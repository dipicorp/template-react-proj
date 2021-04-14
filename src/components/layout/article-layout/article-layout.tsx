import { motion } from 'framer-motion'
import React from 'react'
import { Helmet } from 'react-helmet'
import { BasePropsPage } from '../../../helper/base-props'
import { combineCN } from '../../../helper/combine-classname'
import siteInfo from '../../../site-info.json'
// import style from './article-layout.module.scss'
import { footerHeight, navHeight } from '../../../variable.css'

interface Props extends BasePropsPage {
  title?: string
}

const ArticleLayout: React.FC<Props> = React.memo((props) => {
  return <div
    id="article-layout"
    style={props.style}
    className="w-full"
  >
    <Helmet>
      <title>{props.title ?? "Page"} - {siteInfo.title}</title>
    </Helmet>
    <motion.main
      className={combineCN(props.className,
        `w-full m-auto`)}
      id={props.id}
      style={{ minHeight: `calc(100vh - ${navHeight} - ${footerHeight})`, maxWidth: 900 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {props.children}
    </motion.main>
  </div>
})

export default ArticleLayout