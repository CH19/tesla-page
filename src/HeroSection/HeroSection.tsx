import { ReactNode } from "react"
import ButtonText from "../components/sections/buttomText"
import { content } from "../services/data";
interface Props {
    dataHeader: 'white' | 'black' | 'dark';
    children?: ReactNode;
    content?: content

}

export default function HeroSection(props: Props) {
    const {dataHeader = 'black', children, content = {
        title: 'Disfrute de tesla',
        subtitle: 'Programe una prueba de conduccion hoy mismo',
        footer: 'Prueba de conducción'
    }} = props;
        return (<>
    <section className="landingSection snap-center bg-dark text-dark w-screen h-screen text-center overflow-hidden relative " data-header-section={dataHeader}>
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
        {children && children}
        </div>
    </section>

</>)

}