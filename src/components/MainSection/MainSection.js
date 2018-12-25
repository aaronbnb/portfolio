import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import '../all.sass'
import mainSectionStyles from "./main-section.module.css"


const MainSection = ({ children }) => (
  <StaticQuery
    query={graphql`
      query MainSectionQuery {
          site {
            siteMetadata {
              description,
            }
          }
        }
    `}
    render={data => (
      <div>
          <section className="section">
          <div className="container">
            <h1 className={mainSectionStyles.titled}>Section</h1>
            <h2 className="subtitle">
              A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
            </h2>
            <p>{data.site.siteMetadata.description}</p>
          </div>
        </section>
      </div>
    )}
  />
)

export default MainSection
