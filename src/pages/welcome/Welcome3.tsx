import p from '../../assets/images/welcome3.svg'
import './WelcomeItem.scss'

export const Welcome3: React.FunctionComponent = () => {
  return (
    <div className='contain'>
      <img src={p} />
      <h2>
      数据可视化 <br />
        收支一目了然
      </h2>
    </div>
  )
}
