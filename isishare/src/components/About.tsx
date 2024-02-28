export default function About() {
    return (
        <>
        <span className="flex items-center">
            <span className="h-px flex-1 bg-black ml-28"></span>
            <span className="shrink-0 px-6 text-2xl font-bold">Qui sommes-nous ?</span>
            <span className="h-px flex-1 bg-black mr-28"></span>
        </span>
        <section className="bg-white">
            <div id="qui-sommes-nous" className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-black sm:text-lg">
                    <div className="mb-4">
                        Nous sommes une équipe passionnée de trois développeurs dévoués à révolutionner l'apprentissage des langages informatiques. Ensemble, nous formons le cœur et l'esprit derrière Isishare.
                        <p className="mt-4">
                            <strong>CASTELLIER Florian :</strong> Il notre expert en bases de données et développement backend, Florian Castellier, est le pilier sur lequel repose la robustesse de notre système. Avec une solide expérience dans la conception et l'optimisation de bases de données, Florian veille à ce que notre plateforme soit à la fois efficace et évolutive.
                        </p>
                        <p className="mt-4">
                            <strong>BRON Adrien :</strong> Il est le cerveau polyvalent de notre équipe. Son expertise s'étend à divers aspects du développement logiciel, de la conception à l'implémentation. Touche-à-tout talentueux, Adrien est le moteur de l'innovation chez Isishare, apportant des idées fraîches et des solutions créatives à chaque étape du processus de développement.
                        </p>
                        <p className="mt-4">
                            <strong>CANAC Andy :</strong> Il est notre spécialiste du style et du design. Sa passion pour l'esthétique et l'expérience utilisateur se traduit par une interface utilisateur intuitive et attrayante pour notre plateforme. Andy s'efforce de rendre l'apprentissage sur Isishare non seulement enrichissant sur le plan éducatif, mais aussi agréable visuellement.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src="/test.jpg" alt="office content 1"/>
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src="/test.jpg" alt="office content 2"/>
                    
                </div>
            </div>
        </section>
    </>
    )
}
