import Link from "next/link";

const benefices = [
  {
    titre: "Détection en quelques minutes",
    texte:
      "Dépose ton relevé bancaire (PDF ou export), on repère tout seul les prélèvements qui reviennent chaque mois.",
  },
  {
    titre: "Lettre de résiliation prête",
    texte:
      "Pour chaque abonnement repéré, une lettre de résiliation générée et prête à envoyer, sans rien rédiger toi-même.",
  },
  {
    titre: "Le total que tu récupères",
    texte:
      "Un seul chiffre : ce que tu économises sur l'année si tu résilies ce qui ne te sert plus.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-1 flex flex-col justify-center px-6 py-16 max-w-md mx-auto w-full text-center gap-6">
        <p className="uppercase tracking-widest text-xs font-semibold text-[#B9832A]">
          Fantômes
        </p>
        <h1 className="font-[family-name:var(--font-fraunces)] text-4xl leading-tight font-semibold text-[#101A2B]">
          Tu paies des abonnements fantômes. On les débusque.
        </h1>
        <p className="text-base text-[#3A4A5C] leading-relaxed">
          Un essai jamais résilié, un service remplacé, une option activée une
          fois. Ils sont petits, invisibles sur ton relevé, et tournent
          depuis des années.
        </p>

        <Link
          href="/paiement"
          className="mt-2 inline-flex items-center justify-center rounded-full bg-[#E3A93C] text-[#101A2B] font-semibold text-lg px-8 py-4 shadow-sm active:scale-95 transition-transform"
        >
          Trouver mes fantômes — 19 €
        </Link>
        <p className="text-xs text-[#7A8798]">
          Paiement unique. Résultat en quelques minutes.
        </p>
      </section>

      <section className="px-6 py-14 bg-[#101A2B] text-[#FAF6EF]">
        <div className="max-w-md mx-auto flex flex-col gap-10">
          {benefices.map((b) => (
            <div key={b.titre} className="flex flex-col gap-2">
              <h2 className="font-[family-name:var(--font-fraunces)] text-xl font-semibold text-[#E3A93C]">
                {b.titre}
              </h2>
              <p className="text-sm leading-relaxed text-[#D7DEE6]">
                {b.texte}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-14 max-w-md mx-auto w-full text-center flex flex-col gap-4">
        <p className="text-sm text-[#3A4A5C]">
          Aucun rendez-vous, aucun appel. Tu déposes ton relevé, tu repars
          avec tes lettres de résiliation.
        </p>
        <Link
          href="/paiement"
          className="inline-flex items-center justify-center rounded-full bg-[#E3A93C] text-[#101A2B] font-semibold px-8 py-4"
        >
          Trouver mes fantômes — 19 €
        </Link>
      </section>

      <footer className="px-6 py-8 text-center text-xs text-[#7A8798] flex flex-col gap-2 border-t border-[#EAE3D4]">
        <div className="flex justify-center gap-4">
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/cgv">CGV</Link>
          <Link href="/confidentialite">Confidentialité</Link>
        </div>
        <p>© {new Date().getFullYear()} Fantômes</p>
      </footer>
    </main>
  );
}
