import React from 'react'
import { BasePropsComponent } from '../../../submodules/props/base-props'

interface Props extends BasePropsComponent {
  data?: { id: number, name: string, shortMsg: string, isChosen: boolean }[]
  handleClick?: (id: number) => void
}

const ListThumbnail: React.FC<Props> = React.memo((props) => {
  return <ul className="w-1/4 bg-red-50 divide-y overflow-y-auto">
    {
      props.data?.map(val => {
        return <li
          onClick={() => props.handleClick(val.id)}
          key={val.id}
          className={`hover:bg-gray-600 hover:text-white ${val.isChosen ? 'bg-pink-400' : ''}`}>
          <div className="p-2">
            <label className="mb-1 font-medium">{val.name}</label>
            <p>{val.shortMsg}</p>
          </div>
        </li>
      })
    }
  </ul>
})

export default ListThumbnail