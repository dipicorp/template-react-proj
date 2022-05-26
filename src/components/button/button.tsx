import React from 'react'
import { BasePropsComponent } from '../../submodules/props/base-props'
import { combineCN } from '../../submodules/string-processing/combine-classname'
// import style from './button.module.scss'
interface Props extends BasePropsComponent {
  onClick?: () => void
  title?: string
}

const Button: React.FC<Props> = React.memo((props) => {
  console.log("Button rendered")

  return <button
    className={
      combineCN(props.className,
        "bg-gray-500 rounded-full text-white hover:bg-gray-400 p-1")
    }
    onClick={props.onClick}
    style={props.style}>
    {props.title ?? "Click me!"}
  </button>
})

export default Button