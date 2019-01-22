import React from 'react'
import '../all.sass'
import sectionStyle from "./audit-section.module.css"
import { Link } from 'gatsby'


const AuditSection = props => (
        <section className={sectionStyle.section}>
            <div className={sectionStyle.container}>
                <div className={sectionStyle.hero}>
                    <div className={sectionStyle.text}>
                    <h2 className={sectionStyle.header}> 
                    <span className={sectionStyle.emphasis}>I help organizations build web applications </span>
                     that satisfy accessibility laws and support the broadest circle of people
                    </h2>
                    </div>
                </div>
  
                <div className={sectionStyle.pattern}>
            
                </div>
            </div>
           
    
        </section>
    );

export default AuditSection