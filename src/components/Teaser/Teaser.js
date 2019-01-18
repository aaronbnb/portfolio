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
            <div id={teaserStyle.triangle}></div>
                <div id={teaserStyle.pattern}/>
                <div id={teaserStyle.teaser}>
                    <p className={teaserStyle.header}><strong>I teach web development and cyber securitye3ln45 p</strong> at UCLA Extension. 
                    I’ve helped tens of students change careers into technology. Just like I did.
                    </p>
                    <p className={teaserStyle.header}><strong>I run acccessibility workshops</strong> teaching developers how to 
                    build applications that support the broadest circle of people.
                    </p>
                </div>
            </div>
        <div id="work">

        </div>
        </section>
    )}
  />
)

export default Teaser