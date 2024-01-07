import Image from "next/image"
import Link from "next/link"


const HeroSection = ({ imgSrc, headline, theme = 'turquoise' }) => {
  return (
    <section className="hero">
        <div className="hero_background">
            <img src={ imgSrc || '/assets/heroimg.png'} alt="" />
        </div>

        <div className={`hero_headline hero_headline-${theme}`}>
           {headline} {/* Muestra el encabezado como prop */}
        </div>

        <button className={`btn btn-medium btn-${theme}`}>
            <Link href="/events"> Book Now </Link>
        </button>

        <img className={`hero_logo hero_logo-${theme}`} src="/assets/logo.svg" alt="" />
    </section>
  )
}

export default HeroSection