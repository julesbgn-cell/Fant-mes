export default function Paiement() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center gap-4 bg-[#FAF6EF] text-[#101A2B]">
      <h1 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold">
        Le paiement arrive très bientôt
      </h1>
      <p className="text-sm text-[#3A4A5C] max-w-sm">
        On branche le paiement sécurisé à la prochaine étape. Reviens dans
        quelques jours.
      </p>
      <a href="/" className="text-sm underline text-[#B9832A]">
        Retour à l&apos;accueil
      </a>
    </main>
  );
}
