'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const path = usePathname();
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
    ]

  return (
    <header 
      className={`header ${path === '/experience' ? 'header-light' : ''}`}
    >
      <Image
        className='header_logo'
        src='/assets/logo.svg' // Ruta relativa al archivo de imagen
        alt='logo' // Texto alternativo para accesibilidad
        width={50} // Ancho de la imagen en píxeles
        height={77} // Alto de la imagen en píxeles
      />

      <ul className='header_nav'>
        {navItems.map((item) => (
            <li key={item.slug}>
                <Link href={item.slug}> 
                    <h5>{item.display} </h5>
                </Link>
            </li>
        ))}
      </ul>

      <Link href='/events'>
        <button className='btn btn--black btn--small'> Book Now </button>
      </Link>

    </header>
  );
};

export default Header;