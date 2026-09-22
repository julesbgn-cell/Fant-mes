export default function Confidentialite() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-2xl mx-auto text-[#101A2B]">
      <h1 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold mb-6">
        Politique de confidentialité
      </h1>
      <div className="text-sm leading-relaxed space-y-4 text-[#3A4A5C]">
        <p>Responsable du traitement : [À COMPLÉTER]</p>
        <p>Données collectées : relevé bancaire déposé par l&apos;utilisateur, adresse email, données de paiement (traitées par Stripe, jamais stockées par nous).</p>
        <p>Finalité : détection des abonnements récurrents et génération des lettres de résiliation demandées par l&apos;utilisateur.</p>
        <p>Conservation : le temps nécessaire à la fourniture du service.</p>
        <p>Droits : accès, rectification, suppression, à demander à [À COMPLÉTER — email de contact].</p>
      </div>
    </main>
  );
}
