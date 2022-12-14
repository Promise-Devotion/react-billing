import { NavLink } from 'react-router-dom'

export const Welcome4: React.FunctionComponent = () => {
  return (
    <div style={{ border: '1px solid red' }}> 4 <NavLink to="/welcome/2">下一页</NavLink> </div>
  )
}
