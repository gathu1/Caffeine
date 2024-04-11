import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <>
        <nav className='bg-gray-800 py-4'>
            <div className='container mx-auto flex justify-between items-center'>
            <Link to="/" className='text-white hover:text-gray-300'>Home</Link>
            <ul className="flex justify-center space-x-4">
             
             <li>
                 <Link to="#" className='text-white hover:text-gray-300'>About</Link>
             </li>
             <li>
                 <Link to="#" className='text-white hover:text-gray-300'>Book</Link>
             </li>
             <li>
                 <Link to="#" className='text-white hover:text-gray-300'>Contact</Link>
             </li>
             </ul>
            </div>
        
            
        </nav>
        </>
    )
}

export default Navbar;