export default function About() {
    return (
        <>
        <span className="flex items-center">
            <span className="h-px flex-1 bg-black"></span>
            <span className="shrink-0 px-6 text-2xl font-bold">Qui sommes-nous ?</span>
            <span className="h-px flex-1 bg-black"></span>
        </span>
        <section className="bg-white">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-black sm:text-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold dark:text-black">Lorem ipsum dolor sit amet</h2>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa amet corporis blanditiis porro dolore, quod omnis accusamus odio officiis voluptas ipsam deserunt saepe quo nemo alias eum unde harum velit atque nisi a sapiente? Architecto non debitis dolorum ab?
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur alias corrupti, accusamus quasi voluptatum totam eum possimus iusto reprehenderit nisi dolor architecto veritatis et adipisci at natus impedit nostrum! Hic!</p>
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
