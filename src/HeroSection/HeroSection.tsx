import ButtonText from "../components/sections/buttomText"

export default function HeroSection() {

    const content ={
        title: 'Disfrute de tesla',
        subtitle: 'Programe una prueba de conduccion hoy mismo',
        footer: 'Prueba de conducción'
    }
return (<>
    <section className="landingSection bg-dark text-dark w-screen h-screen text-center overflow-hidden relative " data-header-section="black">
        <div className="flex flex-col h-screen justify-center">
        <header className="relative z-20 flex flex-grow justify-center items-center flex-nowrap flex-col">
        <h2 className="text-2xl font-bold">{content.title}</h2>
        <p className="text-sm font-light">{content.subtitle}</p>
        </header>
        <footer className="relative z-20 flex flex-col basis-0 bottom-2 gap-4">
            <div className="grid grid-cols-4 gap-2">
            <ButtonText content="Ordenar ahora" mode />
            <ButtonText content="Prueba demo" />
            </div>
        </footer>

        </div>
        <div className="absolute top-0 w-screen h-screen z-10">
        <img className="object-center object-cover " src="../../../public/Model3.avif"></img>
        </div>
    </section>

</>)

}