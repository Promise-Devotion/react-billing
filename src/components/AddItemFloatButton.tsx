import add from '../assets/icons/add.svg'
import './AddItemFloatButton.scss'

export const AddItemFloatButton: React.FC = () => {
  return (
    <button className='additem-btn flex justify-center items-center'>
      <img src={add} alt="" />
    </button>
  )
}
