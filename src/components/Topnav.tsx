import menu from '../assets/icons/menu.svg'
import './Topnav.scss'

interface Props {
  title?: String
}
export const Topnav: React.FC<Props> = ({ title = '山竹记账' }) => {
  return (
    <div className="nav flex items-center">
      <img src={menu} />
      <h1>{title}</h1>
    </div>
  )
}
