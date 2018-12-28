import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import '../all.sass'
import mainSectionStyles from "./main-section.module.css"
import email from "../../img/envelope-solid.svg"

const MainSection = ({ children }) => (
  <StaticQuery
    query={graphql`
      query MainSectionQuery {
          site {
            siteMetadata {
              description,
              headline,
            }
          }
        }
    `}
    render={data => (
      <div>
          <section className={mainSectionStyles.section}>
          <div className={mainSectionStyles.hero}>
          <div className={mainSectionStyles.contained}>
            <h1 className={mainSectionStyles.title}>{data.site.siteMetadata.headline}</h1>
            <h2 className={mainSectionStyles.subtitle}>{data.site.siteMetadata.description}
            </h2>
          </div>
          <div className={mainSectionStyles.socialcontainer}>
            <aside className={mainSectionStyles.social}>
            <a href="https://www.twitter.com/life_is_a_sport"
                title="Twitter - life is a sport" 
                rel="noopener noreferrer"
                aria-label="Twitter profile for Aaron Farber life_is_a_sport"
                target="_blank"
              >
                <div className={`${mainSectionStyles.socialicon} ${mainSectionStyles.tw}`}></div>
            </a>
              <span aria-hidden="true" className={mainSectionStyles.tick}></span>
            <a href="https://www.youtube.com"
                title="YouTube" 
                rel="noopener noreferrer"
                aria-label="Aaron Farber YouTube channel external link"
                target="_blank"
              >
                <div className={`${mainSectionStyles.socialicon} ${mainSectionStyles.yt}`}></div>
              </a>
              <span aria-hidden="true" className={mainSectionStyles.tick}></span>
              <a href="https://www.github.com/aaronbnb"
                title="GitHub aaronbnb" 
                rel="noopener noreferrer"
                aria-label="Aaron Farber's GitHub profile aaronbnb external link"
                target="_blank"
              >
                <div className={`${mainSectionStyles.socialicon} ${mainSectionStyles.gh}`}></div>
              </a>
              <span aria-hidden="true" className={mainSectionStyles.tick}></span>
              <a href="mailto:aaronfarber9@gmail.com"
                title="Email Aaron" 
                rel="noopener noreferrer"
                aria-label="Send email to aaronfarber9@gmail.com"
              >
             <div className={`${mainSectionStyles.socialicon} ${mainSectionStyles.em}`}></div>
              </a>
            </aside>
          </div>
          </div>
          <div>
        </div>
        </section>
      </div>
    )}
  />
)

export default MainSection
// style={{'display': 'none'}}