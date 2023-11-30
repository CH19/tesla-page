import ButtonText from "./buttomText"
export default function VideoLayout() {
    const content ={
        title: 'Disfrute de tesla',
        subtitle: 'Programe una prueba de conduccion hoy mismo',
        footer: 'Prueba de conducción'
    }
return (<>
    <section className="landingSection bg-dark text-white w-screen h-screen text-center overflow-hidden relative " data-header-section="white"    >
        <div className="flex flex-col h-screen justify-center">
        <header className="relative z-20 flex flex-grow justify-center items-center flex-nowrap flex-col">
        <h2 className="text-2xl font-bold">{content.title}</h2>
        <p className="text-sm font-light">{content.subtitle}</p>
        </header>
        <footer className="relative z-20 flex flex-col basis-0 bottom-8 gap-4">
            <div className="grid grid-cols-4 gap-2">
            <ButtonText content="Prueba de conduccion" mode />
            <ButtonText content="Pedido personalizado" />
            </div>
            <div>
            <a className=" border-2 bg-white/25 backdrop-blur-xl rounded px-4 py-2 text-xs w-fit hover:bg-white hover:text-black hover:border-none transition-colors duration-300" href="">{content.footer}</a>

            </div>
        </footer>

        </div>
        <div className="absolute top-0 w-screen h-screen z-10">
        <video className="object-center " src="../../../public/Homepage-Model-Y-Desktop-NA.mp4"></video>
        </div>
    </section>

</>)

}