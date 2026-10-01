import Link from "next/link";

export const metadata = {
  title: "Paiement non abouti · Ardoise",
};

export default function PaiementEchoue() {
  return (
    <main className="min-h-screen bg-[#212833] px-6 py-16 text-[#f9f8f4]">
      <div className="mx-auto max-w-md">
        <p className="text-sm font-bold uppercase tracking-widest text-[#ebcb5e]">
          Ardoise
        </p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight">
          Le paiement n&apos;a pas abouti.
        </h1>
        <p className="mt-6 text-lg text-[#f9f8f4]/80">
          Rien n&apos;a été débité. Vous pouvez réessayer, ou utiliser une
          autre carte.
        </p>
        <a
          href="/api/checkout"
          className="mt-10 block rounded-md bg-[#ebcb5e] px-6 py-4 text-center text-lg font-bold text-[#212833]"
        >
          Réessayer · 35 €/mois
        </a>
        <Link
          href="/"
          className="mt-4 block px-6 py-4 text-center text-lg text-[#f9f8f4]/80 underline"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
