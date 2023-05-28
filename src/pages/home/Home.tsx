import { Navigate } from 'react-router-dom'
import useSWR from 'swr'
import p from '../../assets/images/pig.svg'
import { useTitle } from '../../hooks/useTitle'
import { ajax } from '../../lib/ajax'
import { Loading } from '../../components/Loading'
import { AddItemFloatButton } from '../../components/AddItemFloatButton'
import './Home.scss'
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
    return <Loading />

  if (itemsData?.resources[0])
    return <Navigate to="/items" />

  return <div className='home-contain'>
    <div className='top-contain flex justify-center items-center'>
      <img src={p} />
    </div>
    <div className='begin'>
      <button className='bill-btn'>开始记账</button>
    </div>
    <AddItemFloatButton />
  </div >
}
