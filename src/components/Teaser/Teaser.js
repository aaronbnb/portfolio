import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import '../all.sass'
import teaserStyle from "./teaser.module.css"

const Teaser = ({ children }) => (
  <StaticQuery
    query={graphql`
      query TeaserSectionQuery {
          site {
            siteMetadata {
              description,
              headline,
            }
          }
        }
    `}
    render={data => (
        <section>
            <div id="big">
                <div id={teaserStyle.pattern}> 
                    <div id={teaserStyle.patternoverlay}></div>
                </div>
               
                <div id={teaserStyle.teaser}>
                    <div>
                        <p className={teaserStyle.header}>
                        <strong>I build web applications that support the broadest circle of people including those using assistive technology</strong> 
                        </p>
                        <p className={teaserStyle.header}>
                        I currently work as the Technical Lead at <a href="https://beaccessible.com" rel="noopener noreferrer" className={teaserStyle.link}>Be Accessible</a>
                        </p>
                    </div>
                    <br></br> 
                    <div>
                        <p className={teaserStyle.header}>
                        <strong>I've taught web development and cyber security, helping tens of students shift careers into technology - just like I did.</strong> 
                        </p>
                        <p className={teaserStyle.header}>
                        I serve as a Teaching Assistant for the Cyber Security program at <a href="https://bootcamp.uclaextension.edu/" rel="noopener noreferrer" className={teaserStyle.link}>UCLA Extension</a>.
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>
    )}
  />
)

export default Teaser