import SideNav from './components/SideNav'
import Header from './components/Header.jsx'
import LeftColmun from './components/LeftColumn.jsx'
import RigthColumn from './components/RightColumn.jsx'
export default function Home() {
  return (
    <div className='flex min-h-screen text-black'>
      <SideNav/>
      <div className='flex-1 md:flex h-screen relative '>
				<Header/>
        <LeftColmun/>
        <RigthColumn/>
			</div>
    </div>
  )
}
