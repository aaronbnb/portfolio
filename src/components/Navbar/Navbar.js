import React from 'react'
import { Link } from 'gatsby'
import navbarStyles from "./navbar.module.css"
// import home from '../../img/home.png'

const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
 
     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
 
         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);

         //need to add aria-current code here...will add later
 
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }
 }
 
 render() {
   return (
  
  <nav className="navbar" role="navigation" aria-label="Navigation Bar">
    <div className={`container ${navbarStyles.navcontainer}`}>
      <div className={`navbar-brand ${navbarStyles.logocontainer}`}>
        <Link to="/" className={`navbar-item ${navbarStyles.logo}`} aria-label="Aaron Farber home page">
          Aaron Farber
        </Link>
        
        {/* Hamburger menu */}
        <button className={`navbar-burger ${navbarStyles.whopper}`} data-target="navMenu" aria-label="Navigation Menu Button">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div id="navMenu" className="navbar-menu">
      <div className="navbar-start has-text-centered">

      </div>
      <div className="navbar-end">
      <ul className={navbarStyles.navlist}>
        <li className={navbarStyles.navlistitem}>
        <Link className={`navbar-item ${navbarStyles.navlistlink}`} to="/about">
          About
        </Link>
        </li>
        <li className={navbarStyles.navlistitem}>
        <Link className={`navbar-item ${navbarStyles.navlistlink}`} to="/products">
          Teaching
        </Link>
        </li>
        <li className={navbarStyles.navlistitem}>
        <Link className={`navbar-item ${navbarStyles.navlistlink}`} to="/contact">
          Development
        </Link>
        </li>
        <li className={navbarStyles.navlistitem}>
        <Link className={`navbar-item ${navbarStyles.navlistlink}`} to="/contact/examples">
          Writing
        </Link>
        </li>
        </ul>
      </div>
      </div>
    </div>
  </nav>
  )}
}

export default Navbar
