export function funcionesMain(){
    window.addEventListener('load', ()=> {
        const listItems = document.querySelectorAll('#landingHeader li');
        const menuBackDrop = document.querySelector('#menu-backdrop') as HTMLElement;
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: [0.8],
          }
          const $header = document.getElementById('landingHeader') as HTMLElement;  
        listItems.forEach(item => {
            item.addEventListener('mouseenter', (event)=>{
                const target = event.target as HTMLElement
                const {left, top, width, height} = target.getBoundingClientRect();
                menuBackDrop.style.setProperty('--left', String(`${left}px`));
                menuBackDrop.style.setProperty('--top', String(`${top}px`));
                menuBackDrop.style.setProperty('--width', String(`${width}px`));
                menuBackDrop.style.setProperty('--height', String(`${height}px`));
                if(menuBackDrop.classList.contains('opacity-0')) return menuBackDrop.classList.remove('opacity-0');
            })
            item.addEventListener('mouseleave', ()=> {
                if(!menuBackDrop.classList.contains('opacity-0')) return menuBackDrop.classList.add('opacity-0')
            })
        })
        const oberser = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            const {isIntersecting} = entry;
            if(isIntersecting){
              const color = entry.target.getAttribute('data-header-section');
              $header.style.color = String(color);
            }
          })
        }, observerOptions);
        const $sections = document.querySelectorAll('.landingSection');
        $sections.forEach($section => oberser.observe($section));
      })    
}