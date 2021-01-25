import React from 'react'
import { BasePropsComponent } from '../../helper/base-props'
import { combineCN } from '../../helper/combine-classname'
import style from './button.module.scss'
interface Props extends BasePropsComponent {
  onClick?: () => void
  title?: string
}

const Button: React.FC<Props> = React.memo((props) => {
  console.log("Button rendered")

  return <button
    className={combineCN(props.className, style.button)}
    onClick={props.onClick}
    style={props.style}>
    {props.title ?? "Click me!"}
  </button>
})

export default Button