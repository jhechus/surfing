import HeroSection from "./../_components/HeroSection";
import InfoBlock from "./../_components/InfoBlock";
import { fetchDatafromStrapi, processinfoBlocks } from "@/utils/strapi.utils";

export default async function Home() {
  
  // Obtener datos de Strapi
  const data = await fetchDatafromStrapi('infoblock-experience?populate=deep')
   // Procesar los bloques de información
  const infoBlockData = processinfoBlocks(data)

  console.log(infoBlockData);

  const heroHeadline = (
  <>
    <h1> barrel </h1>
    <h1> your </h1>
    <h1> happiness </h1> 
  </> // Define un encabezado usando JSX
  );


  return (
    <main>
      <HeroSection 
        imgSrc="/assets/hero-experience.png" 
        headline={heroHeadline} 
        theme="orange"
      />
      {infoBlockData.map((data) => (
        <InfoBlock key={data.id} data={data} />
      ))}

    </main>
  )
}


export const revalidate = 300;