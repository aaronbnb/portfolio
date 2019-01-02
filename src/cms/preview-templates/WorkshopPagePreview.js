import React from 'react'
import PropTypes from 'prop-types'
import { WorkshopPageTemplate } from '../../templates/workshop-page'

const WorkshopPagePreview = ({ entry, widgetFor }) => (
  <div>
    <h1>We'll fix this later...</h1>
  </div>
)

WorkshopPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WorkshopPagePreview
