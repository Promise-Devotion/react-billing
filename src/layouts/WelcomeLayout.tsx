import { animated, useTransition } from '@react-spring/web'
import type { ReactNode } from 'react'
import { useRef, useState } from 'react'
import { Link, useLocation, useOutlet } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import './WelcomeLayout.scss'
const linkMap = {
  '/welcome/1': '/welcome/2',
  '/welcome/2': '/welcome/3',
  '/welcome/3': '/welcome/4',
  '/welcome/4': '/welcome/xxx',
}
export const WelcomeLayout: React.FC = () => {
  const map = useRef<Record<string, ReactNode>>({})
  const location = useLocation()
  const outlet = useOutlet()
  map.current[location.pathname] = outlet
  const [extraStyle, setExtraStyle] = useState({ position: 'relative' })
  const transitions = useTransition(location.pathname, {
    from: { transform: location.pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 300 },
    onStart: () => {
      setExtraStyle({ position: 'absolute' })
    },
    onRest: () => {
      setExtraStyle({ position: 'relative' })
    },
  })
  return <div className='welcome-contain'>
    <header>
      <img src={logo} />
      <h1>山竹记账</h1>
    </header>
    <main>
    {transitions((style, pathname) =>
    <animated.div className="main-contain" key={pathname} style={{ ...style, ...extraStyle }}>
      <div className='main-path'>
        {map.current[pathname]}
      </div>
    </animated.div>,
    )}
    </main>
  <footer>
    <Link style={{ gridArea: '1 / 2 / 2 / 3' }} to={linkMap[location.pathname]}>下一页</Link>
    <Link style={{ gridArea: '1 / 3 / 2 / 4' }} to="/welcome/xxx">跳过</Link>
  </footer>
  </div>
}
