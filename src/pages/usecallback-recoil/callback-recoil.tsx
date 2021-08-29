import React, { useCallback, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import Button from '../../components/button/button'
import FullWidthLayout from '../../components/layout/fullwidth-layout/fullwidth-layout'
import { BasePropsPage } from '../../helper/base-props'
import { countState } from '../../state/user-state'
// import style from './callback-recoil.module.scss'


const CallBackRecoil = React.memo(() => {
  console.log("callback-recoil rendered")

  const setCount = useSetRecoilState(countState)
  const [toggle, setToggle] = useState(true)
  const setCount_Op = useCallback(() => setCount(num => num + 1), [setCount])
  // return <div>ahi</div>;
  return <FullWidthLayout title="">
    <div id="style.callbackRecoil">
      <div>{toggle ? "True" : "False"}</div>
      <Button onClick={setCount_Op}>
        Ahuhu
      </Button>
      <button onClick={() => { setToggle(val => !val) }}>Toggle</button>
    </div>
  </FullWidthLayout>
})

export default CallBackRecoil