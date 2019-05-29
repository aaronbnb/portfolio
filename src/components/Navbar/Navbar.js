import React from 'react'
import { Link } from 'gatsby'
import navbarStyles from "./navbar.module.css"

const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('#navburg'), 0);

   document.getElementById('navburg').addEventListener('keypress', function(event) {
     if(event.key === 13 || event.key === 32) {
       event.target.click();
     }
   })
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
         if(el.getAttribute('aria-expanded') === 'true') {
          el.setAttribute('aria-expanded', 'false');
          el.classList.remove('open');
          $target.setAttribute('expanded', 'false');
         } else {
          el.setAttribute('aria-expanded', 'true');
          el.classList.add('open');
          $target.setAttribute('expanded', 'true');
         }
         
 
       });
     });
   }
 }
 
 render() {
   return (
  <nav className={navbarStyles.navbar}
      role="navigation" 
      aria-label="Global Navigation"
  >
    <div className={navbarStyles.navcontainer}>
      <div className={`navbar-brand ${navbarStyles.logocontainer}`}>
        <Link to="/" className={`navbar-item ${navbarStyles.logo}`} aria-label="Aaron Farber home page">
          Aaron Farber
        </Link>
        
       
        {/* <button id="navburg" className={navbarStyles.navburg} 
          data-target="navMenu" 
          aria-label="Navigation Menu Button"
          aria-expanded="false"
          aria-controls="navMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button> */}

        <div className={navbarStyles.wrapper}
          id="navburg" 
          data-target="navMenu" 
          aria-label="Navigation Menu Button"
          aria-expanded="false"
          aria-controls="navMenu"
          role="button"
          tabindex="0"
          >
       
          <div className={`${navbarStyles.line} ${navbarStyles.half} ${navbarStyles.start}`}></div>
          <div className={navbarStyles.line}></div>
          <div className={`${navbarStyles.line} ${navbarStyles.half} ${navbarStyles.end}`}></div>
        </div>


      </div>
      <div id="navMenu" 
        className={navbarStyles.navybarmenu}
        expanded="false">
 
      <div>
      <ul className={navbarStyles.navlist}>
        <li className={navbarStyles.navlistitem}>
        <Link className={`navbar-item ${navbarStyles.navlistlink}`} to="about">
          About
        </Link>
        </li>
        <li className={navbarStyles.navlistitem}>
        <Link className={`navbar-item ${navbarStyles.navlistlink}`} to="/contact">
          Contact
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

{/* <Link className={`navbar-item ${navbarStyles.navlistlink}`} to="/contact/examples">
Workshops
</Link>
</li>
<li className={navbarStyles.navlistitem}>
<Link className={`navbar-item ${navbarStyles.navlistlink}`} to="/products">
Development
</Link>
</li>
<li className={navbarStyles.navlistitem}>
<Link className={`navbar-item ${navbarStyles.navlistlink}`} to="/contact">
Writing
</Link>
</li>
<li className={navbarStyles.navlistitem}>
<Link className={`navbar-item ${navbarStyles.navlistlink}`} to="about">
About
</Link> */}