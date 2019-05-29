import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Navbar from './Navbar/Navbar'
// import Footer from './Footer/Footer';

import './all.sass'

const mainStyle = {
  'minWidth': '380px',
  'margin': '0 auto',
  'outline': 'none'
}

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <Fragment>
        <Helmet>
          <html lang="en"/>
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link rel="apple-touch-icon" sizes="180x180" href="/img/a-logo.png" />
	        <link rel="icon" type="image/png" href="/img/a-logo.png" sizes="32x32" />
	        <link rel="icon" type="image/png" href="/img/a-logo.png" sizes="16x16" />
	        <link rel="mask-icon" href="/img/a-logo.png" color="#ff4400" />
	        <meta name="theme-color" content="#fff" />
	        <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/a-image.jpg" />

          <style type="text/css">{`
              html, body, div#___gatsby {
                overflow-x: hidden !important;
                width: 100%;
            }
          `}</style>
        </Helmet>
          <Navbar />
          <main id="main" style={mainStyle} tabIndex="-1">
            {children}
          </main>
          
      </Fragment>
    )}
  />
)

export default TemplateWrapper
