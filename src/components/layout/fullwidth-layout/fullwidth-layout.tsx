import React from 'react'
import { Helmet } from 'react-helmet'
import { BasePropsPage } from '../../../submodules/props/base-props'
import { combineCN } from '../../../submodules/string-processing/combine-classname'
// import style from './fullwidth-layout.module.scss'
import siteInfo from '../../../site-info.json'
import { motion } from 'framer-motion'
import { footerHeight, navHeight } from '../../../variable.css'

interface Props extends BasePropsPage {
  title?: string
}

const FullWidthLayout: React.FC<Props> = React.memo((props) => {
  return <motion.main className={combineCN(props.className,
    ``)}
    id={props.id}
    style={{ ...props.style, minHeight: `calc(100vh - ${navHeight} - ${footerHeight})` }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.03 }}
  >
    <Helmet>
      <title>{props.title ?? "Page"} - {siteInfo.title}</title>
    </Helmet>
    {props.children}
  </motion.main>
})

export default FullWidthLayout