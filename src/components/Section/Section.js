import React from 'react'
import '../all.sass'
import sectionStyle from "./section.module.css"
import { Link } from 'gatsby'


const Section = props => (
        <section className={sectionStyle.section}>
            <div className={sectionStyle.container}>
                <div className={sectionStyle.hero}>
                    <div className={sectionStyle.text}>
                    <h2 className={sectionStyle.header}> 
                    <span className={sectionStyle.emphasis}>I run workshops</span>, teaching developers how to build accessible websites 
                    that support the broadest circle of people.
                    </h2>
                    </div>
                </div>
                <div className={sectionStyle.drag}>

                </div>
                <div className={sectionStyle.pattern}>
            
                </div>
            </div>
           
    
        </section>
    );

export default Section


// <div className={sectionStyle.hero}>
// <h2 className={sectionStyle.header}> 
// <span className={sectionStyle.emphasis}>I run workshops</span>, teaching developers how to build accessible websites 
// that support the broadest circle of people.
// </h2>
// <p>This one-day developer-centric crash course starts at a high level, covering the regulatory landscape and key conclusions from the explosion of web accessibility lawsuits. Then most of the day is spent on technical implementation--the code.
// </p>
// <p>
// Participants test out screen readers and learn how to consider accessibility in their development. Each person builds fundamental skills that any tech professional delivering web applications should know. We quickly go from building basic forms to implementing complex, dynamic UI features.
// </p>
// <p>It’s fun and interactive with live coding and hands-on exercises for participants, which means everyone gets to contribute their own unique perspective.</p>
// <Link to="products">View the Full Workshop Schedule and Booking Information</Link>

// </div>