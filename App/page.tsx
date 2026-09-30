const LIEN_PAIEMENT = "#paiement";

function Bouton({ id }: { id?: string }) {
  return (
    <a
      id={id}
      href={LIEN_PAIEMENT}
      className="flex min-h-14 w-full items-center justify-center rounded-sm bg-craie px-6 py-4 text-center text-lg font-bold text-ardoise active:translate-y-px md:w-auto md:inline-flex"
    >
      Relancer mes devis · <span className="whitespace-nowrap">35 €/mois</span>
    </a>
  );
}

export default function Page() {
  return (
    <main>
      <section className="bg-ardoise px-5 pb-12 pt-10 text-papier">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-craie">
          Ardoise · pour les artisans du bâtiment
        </p>
        <h1 className="mb-5 text-4xl md:text-6xl">
          Vos devis sans réponse,{" "}
          <span className="craie">relancés à votre place</span>.
        </h1>
        <p className="mb-8 max-w-xl text-lg text-papier/80">
          Trois relances polies, envoyées au bon moment. Vous savez dès qu'un
          client ouvre votre devis.
        </p>
        <Bouton />
        <p className="mt-3 text-sm text-papier/60">
          Sans engagement. Résiliable en un clic.
        </p>
      </section>

      <section className="px-5 py-12">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-pierre">
          Le problème
        </p>
        <p className="font-[family-name:var(--font-titre)] text-6xl font-extrabold leading-none">
          2 400 €
        </p>
        <p className="mt-3 max-w-xl text-lg">
          C'est un devis de rénovation resté sans réponse. Vous n'avez pas osé
          relancer, le client a signé ailleurs. Un seul devis récupéré paie
          plus de deux ans d'Ardoise.
        </p>
      </section>

      <section className="border-y border-ardoise/15 bg-white px-5 py-12">
        <h2 className="mb-8 text-3xl">Ce que fait Ardoise</h2>
        <ul className="space-y-8">
          <li>
            <h3 className="mb-1 text-xl">1. Trois relances, sans y penser</h3>
            <p>
              Des messages écrits, polis et espacés. Ils s'arrêtent tout seuls
              dès que le devis est signé.
            </p>
          </li>
          <li>
            <h3 className="mb-1 text-xl">2. Vous voyez qui a ouvert</h3>
            <p>
              Une alerte dès qu'un client ouvre le devis. Vous savez qui
              appeler et quand.
            </p>
          </li>
          <li>
            <h3 className="mb-1 text-xl">3. Le montant en jeu, d'un coup d'œil</h3>
            <p>
              Envoyés, ouverts, signés, perdus : un tableau, et l'argent qui
              reste à aller chercher.
            </p>
          </li>
        </ul>
      </section>

      <section className="px-5 py-12">
        <h2 className="mb-3 text-3xl">35 € par mois</h2>
        <p className="mb-8 max-w-xl text-lg">
          Un devis signé grâce à une relance rembourse l'abonnement. Tout le
          reste, c'est du chiffre d'affaires en plus.
        </p>
        <Bouton id="paiement" />
      </section>

      <footer className="px-5 pb-10 text-sm text-pierre">
        © Ardoise
      </footer>
    </main>
  );
}
