import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ExerciseCard from '../components/ExerciseCard/ExerciseCard'
import Content, { HTMLContent } from '../components/Content'

export const Module = ({ modules }) => 
  {

    // const moduleRows = modules.map(({ topic, time, exercises}, i) =>
    //   <tr key={i}>
    //     <td disabled={topic.includes('Break')}>{topic}</td>
    //     <td>{time}</td>
    //   </tr>
    // );

  //   <table className="table is-striped is-bordered">
  //   <thead>
  //     <tr>
  //       <th>Module</th>
  //       <th>Time</th>
  //     </tr>
  //   </thead>
  //     <tbody>
  //       {moduleRows}
  //     </tbody>
  // </table>

    const moduleCards = (<ul style={{'margin': '0px'}}>
      {modules.map(({ topic, time, exercises}, i) =>
        <ExerciseCard topic={topic} time={time} exercises={exercises} id={i} key={i}/>)}
      </ul>
  );

    return (<div>
        {moduleCards}
  </div>)
  }


export const WorkshopPageTemplate = ({ title, content, contentComponent, modules, description }) => {
  const PageContent = contentComponent || Content

  return (
    <section>
        <div>
          <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
            {title}
          </h2>
        </div>
        <p>{description}</p>
        <PageContent className="content" content={content} />
        <Module modules={modules}/>
    </section>
  )
}

WorkshopPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const WorkshopPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <WorkshopPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        modules={post.frontmatter.modules}
        description={post.frontmatter.description}
      />
    </Layout>
  )
}

WorkshopPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WorkshopPage

export const workshopPageQuery = graphql`
  query WorkshopPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        introOne
        introTwo
        introThree
        introFour
        teaser
        descriptionOne
        descriptionTwo
        descriptionThree
        descriptionFour
        description
        modules {
          topic
          time
          exercises {
            exercise
          }
        }
      }
    }
  }
`
