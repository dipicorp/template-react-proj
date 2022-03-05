import React from 'react'
import FullWidthLayout from '../../components/layout/fullwidth-layout/fullwidth-layout'
//import style from './signup.module.scss'

const Signup = React.memo(() => {
  console.log("signup rendered")

  const onSubmit = (data) => {
    console.log(data)
  }

  return <FullWidthLayout title="Page">
    <label>nothing</label>
  </FullWidthLayout>
})

export default Signup