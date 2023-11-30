import HeroSection from "./HeroSection/HeroSection";
import Header from "./components/header/header";
import VideoLayout from "./components/sections/videoLayout";
export default function App(){
  const arr =[1,2,3,4,5];
  return (<>
    <Header />
    <VideoLayout />

    <main className="relative w-full h-full overflow-auto snap-y snap-mandatory">
       {arr.map(e => (<><div className="snap-center"><HeroSection /></div></>))}
    </main>
  </>)
}