import Link from "next/link";

export const metadata = {
  title: "Merci · Ardoise",
};

export default function Merci() {
  return (
    <main className="min-h-screen bg-[#212833] px-6 py-16 text-[#f9f8f4]">
      <div className="mx-auto max-w-md">
        <p className="text-sm font-bold uppercase tracking-widest text-[#ebcb5e]">
          Ardoise
        </p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight">
          Merci, votre abonnement est confirmé.
        </h1>
        <p className="mt-6 text-lg text-[#f9f8f4]/80">
          Nous vous écrivons très vite, à l&apos;adresse utilisée pour le
          paiement, pour activer votre accès.
        </p>
        <Link
          href="/"
          className="mt-10 block rounded-md bg-[#ebcb5e] px-6 py-4 text-center text-lg font-bold text-[#212833]"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
