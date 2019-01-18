import React from 'react'
import '../all.sass'
import sidebarStyles from "./social-media-sidebar.module.css"

const SocialMediaSidebar = () => (
          <div className={sidebarStyles.socialcontainer}>
            <aside className={sidebarStyles.social} aria-label="Social Media Information">
            <a href="https://www.twitter.com/life_is_a_sport"
                title="Twitter - life is a sport" 
                rel="noopener noreferrer"
                aria-label="Twitter profile for Aaron Farber life_is_a_sport"
                target="_blank"
              >
                <div className={`${sidebarStyles.socialicon} ${sidebarStyles.tw}`}></div>
            </a>
              <span aria-hidden="true" className={sidebarStyles.tick}></span>
            <a href="https://www.youtube.com"
                title="YouTube" 
                rel="noopener noreferrer"
                aria-label="Aaron Farber YouTube channel external link"
                target="_blank"
              >
                <div className={`${sidebarStyles.socialicon} ${sidebarStyles.yt}`}></div>
              </a>
              <span aria-hidden="true" className={sidebarStyles.tick}></span>
              <a href="https://www.github.com/aaronbnb"
                title="GitHub aaronbnb" 
                rel="noopener noreferrer"
                aria-label="Aaron Farber's GitHub profile aaronbnb external link"
                target="_blank"
              >
                <div className={`${sidebarStyles.socialicon} ${sidebarStyles.gh}`}></div>
              </a>
              <span aria-hidden="true" className={sidebarStyles.tick}></span>
              <a href="mailto:aaronfarber9@gmail.com"
                title="Email Aaron" 
                rel="noopener noreferrer"
                aria-label="Send email to aaronfarber9@gmail.com"
              >
             <div className={`${sidebarStyles.socialicon} ${sidebarStyles.em}`}></div>
              </a>
            </aside>
          </div>
    );

export default SocialMediaSidebar;