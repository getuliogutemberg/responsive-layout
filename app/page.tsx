import SideNav from './components/SideNav'
import Header from './components/Header.jsx'
export default function Home() {
  return (
    <div className='flex min-h-screen text-black'>
      <SideNav/>
      <div>
				<Header/>
			</div>
    </div>
  )
}
