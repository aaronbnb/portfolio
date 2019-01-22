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
                        <strong>I help organizations build accessible sites</strong> 
                        </p>
                        <p className={teaserStyle.header}>
                       I'm an
                        </p>
                    </div>
                    <br></br> 
                    <div>
                        <p className={teaserStyle.header}>
                            <strong>I teach full stack web development and cybersecurity at UCLA Extension.</strong> 
                        </p>
                        <p className={teaserStyle.header}>
                        I’ve helped tens of students change careers into technology. Just like I did.
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>
    )}
  />
)

export default Teaser