import Image from "next/image"
import Link from "next/link"

const Footer = () => {

     // Arreglo de elementos de navegación con propiedades de pantalla y ruta
    const navItems = [
        {
            display: 'the camp',
            slug: '/'
        },
        {
            display: 'the experience',
            slug: '/experience'
        },
        {
            display: 'the blog',
            slug: '/blog'
        },
        {
            display: 'the events',
            slug: '/events'
        },
    ];

     // Arreglo con propiedades de pantalla y ruta
    const policies = [
        {
            display: 'Imprint',
            slug: '/imprint',
        },
        {
            display: 'Terms and Conditions',
            slug: '/tocs',
        },
        {
            display: 'Data Protection',
            slug: '/data',
        },
    ]


  return (
    <footer className="footer">
        <nav className="footer_nav">
            <Image
                className='footer_logo'
                src='/assets/logo.svg' // Ruta relativa al archivo de imagen
                alt='logo' // Texto alternativo para accesibilidad
                width={80} // Ancho de la imagen en píxeles
                height={123} // Alto de la imagen en píxeles
            />
            <ul className="footer_links">
                {navItems.map((item) => ( // Mapea cada elemento del arreglo navItems
                    <li key={item.slug}> {/* Crea un elemento de lista con una clave única */}
                        <Link href={item.slug}> {/* Utiliza el componente de enlace de Next.js para enrutar con el slug de la constante */}
                            <h5> {item.display} </h5> {/* Muestra el texto del elemento de navegación */}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>

        <div className="footer_policies">
            <ul className="footer_policies-nav">
                {policies.map((policiy) => (    
                    <li key={policiy.slug}>     
                        <p className="copy"> {policiy.display} </p>
                    </li>
                ))}
            </ul>
            <p className="copy"> &copy;2024 Jesus Rosas. Todos los derechos reservados</p>
        </div>

    </footer>
  )
}

export default Footer