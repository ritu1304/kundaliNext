'use client';


import Link from 'next/link';
import SanatanLogo from '../../public/Headerlogo35kb.png'
import GaneshaLogo from '../../public/Top ganesha icon  35 kb.png'
import Image from 'next/image';
//  import { useTranslation } from 'next-i18next';
//  import { useRouter } from 'next/router';

const Header = () => {
  
  // const { i18n } = useTranslation();
  // const router = useRouter();

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  //   router.push(router.pathname, router.asPath, { locale: lng });
  // };

  return (
    <div>
    <header className="header  centeredLp">
    {/* <button onClick={() => changeLanguage('en')}>English</button>
    <button onClick={() => changeLanguage('hi')}>Hindi</button> */}
      <Link  href="/" className="logo">
      <Image src={SanatanLogo} alt="" />
        </Link>
        {/* <div className="mainMenu"> */}
        {/* <ul className="menu ulLp"> */}
        {/* <div className="center">
          <div className="topLp">

          </div>
        </div> */}
        <nav className='nav '>
        <ul className="menu ulLp">
        {/* <div className="mainMenu">
        <ul className="menu ulLp"> */}
          <li><Link className="nav-link" href="/" activeClassName="active">Home</Link></li>
          <li><Link className="nav-link" href="/Horoscope" activeClassName="active">Horoscope</Link></li>
          <li><Link className="nav-link" href="/Panchang" activeClassName="active">Panchang</Link></li>
          <li><Link className="nav-link" href="/Kundali" activeClassName="active">Kundali</Link></li>
          <li><Link className="nav-link" href="/MatchMaking" activeClassName="active">Match Making</Link></li>
          <li><Link className="nav-link" href="/AnushthanFront" activeClassName="active">Anushthan</Link></li>
          <li><Link className="nav-link" href="/Festival" activeClassName="active">Festival</Link></li>
          <li><Link className="nav-link" href="/Blog" activeClassName="active">Blog</Link></li>
          <li><Link className="nav-link" href="/AboutUs" activeClassName="active">About Us</Link></li>
          <li><Link className="nav-link" href="/ContactUs" activeClassName="active">Contact Us</Link></li>
        </ul>
      </nav>
     
      <div className="ganesha"><Image src={GaneshaLogo} alt="" /></div>
    </header>
    </div>
  );
};

export default Header;
