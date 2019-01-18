import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import '../all.sass'
import heroStyles from "./hero.module.css"
import SocialMediaSidebar from "../SocialMediaSidebar/SocialMediaSidebar";

const Hero = ({ children }) => (
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
        <section 
          className={heroStyles.section}
          aria-label="Short Bio"
        >
          <div className={heroStyles.hero}>
            <div className={heroStyles.contained}>
              <h1 
                className={heroStyles.title}
                id="hero-title"
              >{data.site.siteMetadata.headline}</h1>
              <h2 className={heroStyles.subtitle}>{data.site.siteMetadata.description}</h2>
            </div>
            <SocialMediaSidebar />
          </div>
        </section>
    )}
  />
)

export default Hero