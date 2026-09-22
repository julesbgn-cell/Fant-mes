export default function Succes() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center gap-4 bg-[#FAF6EF] text-[#101A2B]">
      <h1 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold">
        Paiement confirmé 🎉
      </h1>
      <p className="text-sm text-[#3A4A5C] max-w-sm">
        Merci ! Ton accès arrive par email dans quelques minutes. En
        attendant, garde cette page ouverte.
      </p>
      <a href="/" className="text-xs underline text-[#7A8798]">
        Retour à l&apos;accueil
      </a>
    </main>
  );
}
