import React from 'react'
import '../all.sass'
import sectionStyle from "./section.module.css"

const Section = props => (
        <section className={sectionStyle.section}>
          <div className={sectionStyle.hero}>
              <h2 className={sectionStyle.header}>{props.heading}</h2>
          </div>
        </section>
    );

export default Section