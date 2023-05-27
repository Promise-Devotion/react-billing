import p from '../../assets/images/welcome4.svg'
import './WelcomeItem.scss'

export const Welcome4: React.FunctionComponent = () => {
  return (
    <div className='contain'>
      <img src={p} />
      <h2>
      云备份 <br />
        再也不怕数据丢失
      </h2>
    </div>
  )
}
