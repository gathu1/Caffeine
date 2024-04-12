import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const Home = () => {
  return (
    <>
      <div className="bg-main-image bg-cover h-screen bg-no-repeat bg-center text-white">
        <div className='mt-30'>
          <h1 className="text-align-center  ml-10 text-6xl">{/* */}
            Savour The Richness <br></br> Of Every Brew
          </h1>
          </div>
          <p className="text-align-center text-white mt-10 ml-10">  {/* bg-main-image bg-cover h-screen bg-no-repeat bg-center bg-height-100% text-white */}
            Welcome to Caffeine, the premier source of exceptional coffee experiences.<br />As a leading coffee exporter, we connect the globe with the finest blends,<br /> meticulously selected and roasted to perfection. Dive into the world of Caffeine,<br /> where every sip is an adventure waiting to unfold. Discover the essence of true <br /> coffee craftsmanship with us.
          </p>
          <button className=" hover:text-black hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-10  ml-10" ><Link to='/about'>
            Explore More</Link>
          </button>
          <button className=" hover:text-black hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-10  ml-10"><Link to="/contact">
            Contact us</Link>
          </button>
        
      </div>

    </>
  )
}

export default Home