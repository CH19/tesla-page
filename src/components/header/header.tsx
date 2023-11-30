import ElementesComplete from './elmentsComplete';
export default function Header() {
    window.addEventListener('load', ()=> {
        const listItems = document.querySelectorAll('#landingHeader li');
        const menuBackDrop = document.querySelector('#menu-backdrop') as HTMLElement;
        listItems.forEach(item => {
            item.addEventListener('mouseenter', (event)=>{
                const target = event.target as HTMLElement
                const {left, top, width, height} = target.getBoundingClientRect();
                menuBackDrop.style.setProperty('--left', String(`${left}px`));
                menuBackDrop.style.setProperty('--top', String(`${top}px`));
                menuBackDrop.style.setProperty('--width', String(`${width}px`));
                menuBackDrop.style.setProperty('--height', String(`${height}px`));
            })
            item.addEventListener('mouseleave', ()=> {
                alert('hola')
            })
        })
    })
    const opcciones2 = [
        'Soporte', 'Tienda', 'Cuenta', 'Menú'
    ];
    const opcciones = [
        'Model S', 'Model 3', 'Model X', 'Model Y', 'PowerWall', 'Carga'
    ]
    return(<>
        <div className='block'>
        <header  className='py-5 px-10 flex items-center text-white  z-40 fixed top-0 w-full justify-between' id="landingHeader">
            <nav className='flex flex-grow basis-0'>
            <svg className="h-7 w-24 font-bold" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path></svg>
            </nav>
            <nav>
                <ElementesComplete cositas={opcciones}/>
            </nav>
            <nav className='flex flex-grow justify-end basis-0'>
                <ElementesComplete cositas={opcciones2} />
            </nav>
            {/* creando la cajita de tesla  */}
            <div id="menu-backdrop" className={`absolute  bg-dark/10 rounded
            left-0 top-0
            translate-x-[var(--left)] translate-y-[var(--top)]
            w-[var(--width)] h-[var(--height)]
            transition-all duration-300 ease-in-out
             -z-30`}>

            </div>
        </header>
        </div>
        
    </>)
}