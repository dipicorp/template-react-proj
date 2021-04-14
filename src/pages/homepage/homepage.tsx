import React, { useCallback, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import Button from '../../components/button/button'
import FullWidthLayout from '../../components/layout/fullwidth-layout/fullwidth-layout'
import Modal from '../../components/modal/modal'
import { useFetch } from '../../hooks/use-fetch'
import { useScrollPosition } from '../../hooks/use-scroll-position'
import { countState } from '../../state/user-state'
// import style from './homepage.module.scss'

export const Homepage = React.memo(() => {

  const setCount = useSetRecoilState(countState)
  const setCount_Op = useCallback(() => setCount(val => val + 1), [setCount])

  console.log("Homepage rendered")

  const [modal, setModal] = useState(false)
  const setModal_Op = useCallback(() => setModal(val => !val), [setModal])

  const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const [arrNumber2, setArr2,] = useState<{ val: number, selected: boolean }[]>(
    arrNumber.map(val => { return { val: val, selected: false } })
  )

  let { loading, data, errMsg } = useFetch("https://jsonplaceholder.typicode.com/todos/1", "GET")

  const { x, y } = useScrollPosition(150)

  return <FullWidthLayout id="homepage" title="Homepage">
    <div>{loading ? "Loading" : "Done"} {JSON.stringify(data)} {errMsg}</div>
    <button onClick={setModal_Op}>Show modal</button>
    <h1>Hello world</h1>
    <div>{x} {y}</div>
    <Button onClick={setCount_Op}>
      Ahihi
    </Button>
    <div>
      {
        arrNumber2.map(val => {
          return <div
            style={{ color: 'yellow', backgroundColor: 'green', padding: 5, border: 'solid red 1px' }}
            key={val.val}
            onClick={() => {
              setArr2(arr2 => {
                return arr2.map(item => {
                  if (item.val == val.val) return {
                    val: item.val, selected: !item.selected
                  }
                  return item
                })
              })
            }}
          >
            {val.val} - {val.selected ? "Tickedd" : ""}
          </div>
        })
      }
    </div>

    <Modal isShowing={modal}>
      <div
        className="flex flex-col justify-between items-center rounded-sm"
        style={{ padding: 10, width: 300, height: 300, justifyContent: 'space-between', backgroundColor: 'white' }}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero blanditiis inventore labore?</p>
        <button onClick={setModal_Op}>
          Close
         </button>
      </div>
    </Modal>
  </FullWidthLayout >
})