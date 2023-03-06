import { Navigate } from 'react-router-dom'
import useSWR from 'swr'
import add from '../../assets/icons/add.svg'
import p from '../../assets/images/pig.svg'
import { useTitle } from '../../hooks/useTitle'
import { ajax } from '../../lib/ajax'
interface Props {
  title?: string
}
export const Home: React.FC<Props> = (props) => {
  useTitle(props.title)
  const { data: meData, error: meError } = useSWR('/api/v1/me', async path =>
    (await ajax.get<Resource<User>>(path)).data.resource,
  )
  const { data: itemsData, error: itemsError } = useSWR(meData ? '/api/v1/items' : null, async path =>
    (await ajax.get<Resources<Item>>(path)).data,
  )

  const isLoadingMe = !meData && !meError
  const isLoadingItems = meData && !itemsData && !itemsError

  if (isLoadingMe || isLoadingItems)
    return <div>加载中……</div>

  if (itemsData?.resources[0])
    return <Navigate to="/items" />

  return <div>
    <div className='flex justify-center items-center'>
      <img src={p} />
    </div>
    <div>
      <button >开始记账</button>
    </div>
    <button >
      <img src={add} />
    </button>
  </div >
}
