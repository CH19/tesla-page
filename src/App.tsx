import HeroSection from "./HeroSection/HeroSection";
import Header from "./components/header/header";
import VideoLayout from "./components/sections/videoLayout";
import { dataCars } from "./services/data";
import { funcionesMain } from "./services/functions";
export default function App(){
  // archivo con las funciones del hover y las interacciones de los estilos en el header con los componentes 
  funcionesMain();
  const imagesTitle = ['Model3', 'ModelS', 'ModelXej', 'SolarPanel', 'SolarRoof'];
  // probando intereception observer 
return (<>
    <Header />

    <main className="relative w-screen h-screen overflow-x-hidden  snap-y snap-mandatory">
      <VideoLayout />
        {imagesTitle.map((element, index) => {
          return (
          <HeroSection content={dataCars[index]} dataHeader="black" >
            <img src={`../../../public/${element}.avif`} alt="" />
          </HeroSection>)
        })}
        <HeroSection content={dataCars[0]} dataHeader="white" >
        <img className="object-center object-cover " src="../../../public/Model3.avif"></img>
        </HeroSection>
        <HeroSection content={dataCars[1]} dataHeader="black" >
          <img src="../../../public/ModelXej.avif" alt="" />
        </HeroSection>
        <HeroSection dataHeader="black" >
          <img src="../../../public/ModelS.avif" alt="" />
        </HeroSection>
    </main>
  </>)
}