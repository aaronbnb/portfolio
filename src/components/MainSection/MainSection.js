import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import '../all.sass'
import mainSectionStyles from "./main-section.module.css"
import youTube from '../../img/github-brands.svg';

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
              <a href="https://www.youtube.com"
                title="YouTube" 
                rel="noopener noreferrer"
                aria-label="Aaron Farber YouTube channel external link"
                target="_blank"
              >
                <div className={`${mainSectionStyles.socialicon} ${mainSectionStyles.yt}`}></div>
              </a>
              <a href="https://www.github.com/aaronbnb"
                title="GitHub" 
                rel="noopener noreferrer"
                aria-label="Aaron Farber GitHub profile external link"
                target="_blank"
              >
                <div className={`${mainSectionStyles.socialicon} ${mainSectionStyles.gh}`}></div>
              </a>
              <p>L</p>
              <p>T</p>
              <p>I</p>
            </aside>
          </div>
          </div>
       
          <div>
        <img alt="pic" src={youTube}></img>
        </div>
        </section>
      </div>
    )}
  />
)

export default MainSection
// style={{'display': 'none'}}