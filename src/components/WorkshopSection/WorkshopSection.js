import React from 'react'
import '../all.sass'
import sectionStyle from "./workshop-section.module.css"
import { Link } from 'gatsby'


const WorkshopSection = props => (
        <section className={sectionStyle.section}>
            <div className={sectionStyle.container}>
                <div className={sectionStyle.hero}>
                    <div className={sectionStyle.text}>
                    <h2 className={sectionStyle.header}> 
                    <span className={sectionStyle.emphasis}>I run workshops teaching technology professionals </span>
                    how to consider accessibility in their development - before a court makes them.
                    </h2>
                    </div>
                </div>
  
                <div className={sectionStyle.pattern}>
            
                </div>
            </div>
        </section>
    );
    
export default WorkshopSection