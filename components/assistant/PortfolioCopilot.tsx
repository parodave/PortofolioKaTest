"use client";

import { useMemo, useState } from "react";

const QUICK_PROMPTS = [
  "Tu me recommandes quel projet si je suis recruteur ?",
  "Quelle est ta stack principale ?",
  "Donne-moi un résumé de ton profil en 6 lignes",
  "Comment te contacter ?",
];

const EMPTY_STATE =
  "Je suis prêt. Demande-moi de te recommander le meilleur projet à voir.";

const DISCLAIMER =
  "Réponses basées uniquement sur le contenu public du portfolio.";

const API_FALLBACK = "https://your-space.hf.space/predict";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function PortfolioCopilot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const apiUrl = useMemo(
    () => process.env.NEXT_PUBLIC_PORTFOLIO_COPILOT_URL ?? API_FALLBACK,
    [],
  );

  const sendMessage = async (question: string) => {
    if (!question.trim()) {
      return;
    }

    const newMessage: Message = { role: "user", content: question.trim() };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsLoading(true);

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 20000);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: [question.trim()] }),
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error("Erreur API");
      }

      const data = (await response.json()) as { data?: string[] };
      const answer = data?.data?.[0] ??
        "Le service est surchargé. Réessaie dans quelques instants.";

      setMessages((prev) => [...prev, { role: "assistant", content: answer }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Le service est surchargé. Réessaie dans quelques instants.",
        },
      ]);
    } finally {
      window.clearTimeout(timeoutId);
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage(input);
  };

  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-white">Portfolio Copilot</h1>
        <p className="text-sm text-slate-200">
          Pose une question sur Karim Hammouche, ses compétences, ses projets, ou la meilleure façon de le contacter.
        </p>
      </header>

      <div className="flex flex-wrap gap-3">
        {QUICK_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => void sendMessage(prompt)}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-100 transition hover:border-white/30 hover:bg-white/10"
          >
            {prompt}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-6">
        {messages.length === 0 ? (
          <p className="text-sm text-slate-300">{EMPTY_STATE}</p>
        ) : (
          <div className="flex flex-col gap-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "self-end bg-indigo-500/20 text-white"
                    : "self-start bg-white/5 text-slate-100"
                }`}
              >
                {message.content}
              </div>
            ))}
            {isLoading ? (
              <div className="self-start rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-300">
                Portfolio Copilot réfléchit...
              </div>
            ) : null}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Écris ta question…"
          className="h-12 flex-1 rounded-full border border-white/10 bg-slate-950 px-4 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="h-12 rounded-full bg-indigo-500 px-6 text-sm font-semibold text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Envoyer
        </button>
      </form>

      <p className="text-xs text-slate-400">{DISCLAIMER}</p>
    </div>
  );
}
