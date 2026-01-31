import PortfolioCopilot from "@/components/assistant/PortfolioCopilot";

export default function AssistantPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-16">
        <PortfolioCopilot />
      </section>
    </main>
  );
}
