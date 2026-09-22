"use client";

import { useState } from "react";

export default function Paiement() {
  const [chargement, setChargement] = useState(false);
  const [erreur, setErreur] = useState("");

  async function payer() {
    setChargement(true);
    setErreur("");
    try {
      const res = await fetch("/api/creer-paiement", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setErreur("Une erreur est survenue. Réessaie dans un instant.");
        setChargement(false);
      }
    } catch {
      setErreur("Une erreur est survenue. Réessaie dans un instant.");
      setChargement(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center gap-6 bg-[#FAF6EF] text-[#101A2B]">
      <h1 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold">
        Audit complet de tes abonnements
      </h1>
      <p className="text-sm text-[#3A4A5C] max-w-sm">
        19 € payés une seule fois. Accès immédiat après paiement pour déposer
        ton relevé.
      </p>
      <button
        onClick={payer}
        disabled={chargement}
        className="inline-flex items-center justify-center rounded-full bg-[#E3A93C] text-[#101A2B] font-semibold text-lg px-8 py-4 disabled:opacity-60"
      >
        {chargement ? "Redirection..." : "Payer 19 € en sécurité"}
      </button>
      {erreur && <p className="text-sm text-red-600">{erreur}</p>}
      <a href="/" className="text-xs underline text-[#7A8798]">
        Retour à l&apos;accueil
      </a>
    </main>
  );
}
