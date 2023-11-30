import HeroSection from "./HeroSection/HeroSection";
import Header from "./components/header/header";
import VideoLayout from "./components/sections/videoLayout";
export default function App(){
  // probando intereception observer 
  window.addEventListener('load', ()=> {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0.8],
    }
    const $header = document.getElementById('landingHeader') as HTMLElement;
    const oberser = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        console.log(entry);
        const {isIntersecting} = entry;
        if(isIntersecting){
          const color = entry.target.getAttribute('data-header-section');
          console.log(color)
          $header.style.backgroundColor = String(color);
          console.log($header)
        }
      })
    }, observerOptions);
    const $sections = document.querySelectorAll('.landingSection');
    $sections.forEach($section => oberser.observe($section));
  })
return (<>
    <Header />

    <main className="relative w-screen h-screen overflow-x-hidden  snap-y snap-mandatory">
      <div className="snap-center">
      <VideoLayout />
      </div>
      <div className="snap-center">
        <HeroSection />
      </div>
      <div className="snap-center">
        <HeroSection />
      </div>
      <div className="snap-center">
        <HeroSection />
      </div>

    </main>
  </>)
}