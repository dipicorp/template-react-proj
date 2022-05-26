import React from 'react'
import { BasePropsComponent } from '../../../submodules/props/base-props'
import { combineCN } from '../../../submodules/string-processing/combine-classname'

interface Props extends BasePropsComponent {
}

const Chatcontent: React.FC<Props> = React.memo((props) => {
  return <div className={combineCN(props.className,
    "flex flex-col p-2 w-full overflow-y-auto")}
    style={props.style}
  >
    <MyMsg msg="ahihi" position="middle" />
    <FriendMsg msg="woa woa" position="first" />
  </div>
})

export default Chatcontent

const MyMsg = (props: {
  msg: string,
  position?: 'once' | 'first' | 'middle' | 'end'
}) => {
  // let
  let cssRadius: React.CSSProperties = undefined
  switch (props.position) {
    case 'once': cssRadius = undefined; break;
    case 'first': cssRadius = { borderBottomRightRadius: 5 }; break;
    case 'end': cssRadius = { borderTopRightRadius: 5 }; break;
    case 'middle': cssRadius = { borderTopRightRadius: 5, borderBottomRightRadius: 5 }; break;
  }

  return <div className={`bg-gray-200 self-end px-2 rounded-2xl`}
    style={cssRadius}
  >
    <p>{props.msg}</p>
  </div>
}

const FriendMsg = (props: {
  msg: string,
  position?: 'once' | 'first' | 'middle' | 'end'
}) => {
  // let
  let cssRadius: React.CSSProperties = undefined
  switch (props.position) {
    case 'once': cssRadius = undefined; break;
    case 'first': cssRadius = { borderBottomLeftRadius: 5 }; break;
    case 'end': cssRadius = { borderTopLeftRadius: 5 }; break;
    case 'middle': cssRadius = { borderTopLeftRadius: 5, borderBottomRightRadius: 5 }; break;
  }

  return <div className={`bg-blue-500 self-start px-2 rounded-2xl`}
    style={cssRadius}
  >
    <p className="text-white">{props.msg}</p>
  </div>
}