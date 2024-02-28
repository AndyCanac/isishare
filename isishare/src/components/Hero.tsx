export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#609cf3] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Isishare, une nouvelle façon d'apprendre ensemble
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Bienvenue sur Isishare, la plateforme innovante conçue spécifiquement pour les écoles, où les étudiants peuvent développer des relations, partager leurs connaissances et s'entraider dans l'apprentissage de langages informatiques.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Essayer
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              En savoir plus <span aria-hidden="true">→</span>
            </a>
          </div>
          <br /><br /><br /><br /><br />
          <h2 id="qui-sommes-nous" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Qui sommes-nous ?</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            <br />Nous sommes une équipe passionnée de trois développeurs dévoués à révolutionner l'apprentissage des langages informatiques. Ensemble, nous formons le cœur et l'esprit derrière Isishare.
            <br /><strong>CASTELLIER Florian :</strong> Il notre expert en bases de données et développement backend, Florian Castellier, est le pilier sur lequel repose la robustesse de notre système. Avec une solide expérience dans la conception et l'optimisation de bases de données, Florian veille à ce que notre plateforme soit à la fois efficace et évolutive.
            <br /><strong>BRON Adrien :</strong> Il est le cerveau polyvalent de notre équipe. Son expertise s'étend à divers aspects du développement logiciel, de la conception à l'implémentation. Touche-à-tout talentueux, Adrien est le moteur de l'innovation chez Isishare, apportant des idées fraîches et des solutions créatives à chaque étape du processus de développement.
            <br /><strong>CANAC Andy :</strong> Il est notre spécialiste du style et du design. Sa passion pour l'esthétique et l'expérience utilisateur se traduit par une interface utilisateur intuitive et attrayante pour notre plateforme. Andy s'efforce de rendre l'apprentissage sur Isishare non seulement enrichissant sur le plan éducatif, mais aussi agréable visuellement.
            <br />Ensemble, nous croyons fermement que l'apprentissage collaboratif est la clé du succès dans le monde de la programmation. Notre mission est de fournir une plateforme innovante où les étudiants peuvent se connecter, échanger des connaissances et progresser ensemble vers l'excellence dans les langages informatiques.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Essayer
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              En savoir plus <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#609cf3] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}