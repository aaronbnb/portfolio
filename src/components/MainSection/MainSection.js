import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import '../all.sass'
import mainSectionStyles from "./main-section.module.css"
import SocialMediaSidebar from "../SocialMediaSidebar/SocialMediaSidebar";
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
          <SocialMediaSidebar />
          </div>
          <div>
        </div>
        </section>
      </div>
    )}
  />
)

export default MainSection