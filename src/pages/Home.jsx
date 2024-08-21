import NavigationBar from '../componnets/NavigationBar'
import background from '../assets/Background.png'
import Faq from './Faq/Faq'
import Info from './Info/Info'
const Home = () => {
  return (
    <>
    <div className='bg-dark'>
        <NavigationBar/>
        <div className="home">
          <div className="header">
            <h1 className="text-white text-uppercase bold">MVP Subscription</h1>
            <p className="text-white">Your go-to Movie Membership Program</p>
          </div>
        </div>
        <Info/>
        <Faq/>
        
       
    </div>
    
    </>
  )
}

export default Home