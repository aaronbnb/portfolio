import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import WorkshopPagePreview from './preview-templates/WorkshopPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('workshop', WorkshopPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
