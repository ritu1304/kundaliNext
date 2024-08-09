'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import SanatanLogo from '../../public/Headerlogo35kb.png';
import GaneshaLogo from '../../public/Top ganesha icon  35 kb.png';
import Image from 'next/image';
import LoginNew from './LoginNew';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import axios from 'axios';
import toast from 'react-toastify'; 

const Header = () => {
  const [fullNames, setFullNames] = useState(null);
  const [idStore, setIdStore] = useState(null);
  const router = useRouter(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setFullNames(localStorage.getItem('FullName'));
    setIdStore(localStorage.getItem('id'));
  }, []);
  const handleMobileMenuClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);

  };

  const handleAnushthanOrders = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`https://apis.sanatanjyoti.com/api/getScheduledAnushthanByUserId?userId=${idStore}`);
      if (res.data.data.length > 0) {
        router.push('AnushthanOrders'); // Navigate using router.push
      } else {
        toast.error('No Scheduled Anushthans');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const panditMeetings = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`https://apis.sanatanjyoti.com/api/get-MeetingLinks_ByUser?page=0&size=10&userId=${idStore}`);
      if (res?.data?.data?.content?.length > 0) {
        router.push('/PanditMeetings'); // Navigate using router.push
      } else {
        toast.error("No Scheduled Meetings");
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const PaymentsList = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`https://apis.sanatanjyoti.com/api/get_Transactions?page=0&size=10&userId=${idStore}`);
      if (res?.data?.data?.content.length > 0) {
        router.push('/PaymentsList'); // Navigate using router.push
      } else {
        toast.error("No Payments Found!");
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('FullName');
    localStorage.removeItem('id');
    setFullNames(null);
    setIdStore(null);
    router.push('/'); // Optionally redirect to home page or login page after logout
  };

  return (
    <div>
      <header className="header centeredLp">
        <Link href="/" className="logo">
          <Image src={SanatanLogo} alt="Sanatan Logo" />
        </Link>
        <div className="center">
          <div className="topLp">
            <div>
              {idStore ? (
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="solid" className="btn logoutButton dropdown-toggle " >
                      {fullNames === "null" ? "User" : <>{fullNames}</>}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions" className='flex-profile'>
                    <DropdownItem key="profile" href='/Profile'>Profile</DropdownItem>
                    <DropdownItem key="anushthan" onClick={handleAnushthanOrders}>Anushthan</DropdownItem>
                    <DropdownItem key="meeting" onClick={panditMeetings}>Meeting Links</DropdownItem>
                    <DropdownItem key="payment" onClick={PaymentsList}>Payment</DropdownItem>
                    <DropdownItem key="logout" className="text-danger" color="danger" onClick={handleLogout}>
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <LoginNew />
              )}
            </div>
            <a href="#" className={isMenuOpen ? 'mobileMenu is-active' : 'mobileMenu'} onClick={handleMobileMenuClick}><span></span></a>
          </div>
        
          <div className="mainMenu" style={isMenuOpen ? {display: "block"} : {}}>
          <ul className="menu ulLp">
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
        </div>
        </div>
        <div className="ganesha"><Image src={GaneshaLogo} alt="Ganesha Logo" /></div>
      </header>
    </div>
  );
};

export default Header;
