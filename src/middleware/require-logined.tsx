
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
// import { Route } from 'react-router-dom'
import LocalStotage from '../submodules/localstorage/local-storage'
import { userInfoState } from '../state/user-state'

export const RequireLogined = <P extends object>(Component: React.FC<P>): React.FC<P> => {
  let token = LocalStotage.get("token")
  let user = useRecoilValue(userInfoState)
  console.log("Loggg")

  return (props) => {
    return token ? <Component {...props} /> : <Navigate to="/" />
  }
}