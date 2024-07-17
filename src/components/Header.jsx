
import Link from 'next/link';
import SanatanLogo from '../../public/Headerlogo35kb.png'
import GaneshaLogo from '../../public/Top ganesha icon  35 kb.png'
import Image from 'next/image';

const Header = () => {
  return (
    <header className="header  centeredLp">
      <Link  href="/" className="logo">
      <Image src={SanatanLogo} alt="" />
        </Link>
        {/* <div className="mainMenu"> */}
        {/* <ul className="menu ulLp"> */}
        {/* <div className="center">
          <div className="topLp">

          </div>
        </div> */}
        <nav className='nav'>
        <ul>
          <li><Link href="/" activeClassName="active">Home</Link></li>
          <li><Link href="/Horoscope" activeClassName="active">Horoscope</Link></li>
          <li><Link href="/Panchang" activeClassName="active">Panchang</Link></li>
          <li><Link href="/Kundali" activeClassName="active">Kundali</Link></li>
          <li><Link href="/MatchMaking" activeClassName="active">Match Making</Link></li>
          <li><Link href="/AnushthanFront" activeClassName="active">Anushthan</Link></li>
          <li><Link href="/Festival" activeClassName="active">Festival</Link></li>
          <li><Link href="/Blog" activeClassName="active">Blog</Link></li>
          <li><Link href="/AboutUs" activeClassName="active">About Us</Link></li>
          <li><Link href="/ContactUs" activeClassName="active">Contact Us</Link></li>
        </ul>
      </nav>
     
      <div className="ganesha"><Image src={GaneshaLogo} alt="" /></div>
    </header>
  );
};

export default Header;
