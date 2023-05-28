import c from 'classnames'
import './Icon.scss'
interface Props {
  className?: string
  name: string
}
export const Icon: React.FC<Props> = ({ name, className }) => {
  return (
    <svg className={c(className, 'j-icon')}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}
