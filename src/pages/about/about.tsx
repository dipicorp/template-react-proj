import React from 'react'
import ArticleLayout from '../../components/layout/article-layout/article-layout'


const About = React.memo(() => {
  console.log("About render")
  return <ArticleLayout id="about" title="About">
    <h1>About</h1>
  </ArticleLayout>
})

export default About