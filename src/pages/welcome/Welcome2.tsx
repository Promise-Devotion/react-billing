import p from '../../assets/images/welcome2.svg'
import './WelcomeItem.scss'

export const Welcome2: React.FunctionComponent = () => {
  return (
    <div className='contain'>
      <img src={p} />
      <h2>
      每日提醒 <br />
        不会遗漏每一笔账单
      </h2>
    </div>
  )
}
