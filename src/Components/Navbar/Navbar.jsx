import React,{ useState, useEffect } from 'react';
import * as Section from '../../Config/SectionIds.js';
import './style.css'
import logo from '../../assets/img/logo.svg';
import linkedinIcon from '../../assets/img/nav-icon-linkedin.svg';
import githubIcon from '../../assets/img/nav-icon-github.svg';
import hambergIcon from '../../assets/img/navbar-icon.svg';

const Navbar = () => {
  const navigationLinks = [
    {name:'Home',href:`#${Section.BANNER}`},
    {name:'Projects',href:`#${Section.PROJECT}`},
    {name:'Contact',href:`#${Section.CONTACT}`},
  ];
  const socialMediaLinks =[
    {icon:linkedinIcon,href:'#'},
    {icon:githubIcon,href:'#'},
  ];
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    <>
    <nav className={`${scrolled?'scrolled__nav':''}`}>
      <div className='nav__logo__container'>
         <img src={logo} alt="Logo"/>
      </div>
      <div className='nav__links__container'>
      {navigationLinks.map((_,i)=>{
        return <a key={i} className={`nav__link ${activeLink===_.name?"nav__link__actived":""}`} onClick={()=>onUpdateActiveLink(_.name)} href={_.href} >{_.name}</a>
      })}
      {socialMediaLinks.map((_,i)=>{
        return <div className='social__icon'>
        <a key={i} href={_.href}>
          <img src={_.icon} alt={_.href}/> 
        </a>
        </div>
      })}
      </div>
      <div className='nav__links__container__mobile'>
        <img className='menu__icon' onClick={()=>setDropDownOpen(open=>!open)} src={hambergIcon} alt='hambergIcon'/>
      </div>
    </nav>
    <div className={`${dropDownOpen?'drop__down__nav__active':'drop__down__nav'} swing-in-top-fwd`}>
      {navigationLinks.map((_,i)=>{
        return <a key={i} className={`nav__link ${activeLink===_.name?"nav__link__actived":""}`} onClick={()=>onUpdateActiveLink(_.name)} href={_.href} >{_.name}</a>
      })}
      {socialMediaLinks.map((_,i)=>{
        return <div className='social__icon'>
        <a key={i} href={_.href}>
          <img src={_.icon} alt={_.href}/> 
        </a>
        </div>
      })}
 
    </div>
    </>
  );
};

export default Navbar;
