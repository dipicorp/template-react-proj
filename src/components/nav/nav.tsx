import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { BasePropsComponent } from '../../helper/base-props'
import { combineCN } from '../../helper/combine-classname'
import { countState } from '../../state/user-state'
// import style from './nav.module.scss'
import config from '../../site-info.json'
import { navHeight, navZIndex } from '../../variable.css'

interface Props extends BasePropsComponent {
}

const Nav: React.FC<Props> = React.memo((props) => {

  let count = useRecoilValue(countState)
  console.log("Nav rendered")
  return <nav className={combineCN(props.className,
    "sticky top-0 bg-white left-0 w-screen flex justify-between p-2 shadow-md items-center")}
    id="nav-bar"
    style={{ ...props.style, height: navHeight, zIndex: navZIndex }}
  >
    {count}
    {
      config['nav-item'].map(val => {
        return <Link key={val.url} to={val.url}>
          {val.title}
        </Link>
      })
    }
    {props.children}
  </nav>
})

export default Nav