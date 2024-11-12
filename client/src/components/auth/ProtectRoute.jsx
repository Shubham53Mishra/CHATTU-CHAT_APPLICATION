// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectRoute = ({children,user,redirect="/login"}) => {
  if(!user) return <Navigator to={redirect} />
  return children;
 
}

export default ProtectRoute

