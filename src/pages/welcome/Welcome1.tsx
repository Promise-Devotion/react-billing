import p from '../../assets/images/welcome1.svg'
import './WelcomeItem.scss'

export const Welcome1: React.FunctionComponent = () => {
  return (
    <div className='contain'>
      <img src={p} />
      <h2>
        会挣钱 <br/>
        还要会省钱
      </h2>
    </div>
  )
}
