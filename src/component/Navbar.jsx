import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <>
        <nav className='bg-gray-700 py-4  '> { /*  */}
            <div className='container mx-auto flex justify-between items-center mt-1 mb-1 '>
            <Link to="/" className='text-white italic  font-bold text-2xl'>Caffeine</Link>
            <ul className="flex justify-center space-x-6">
            <li>
                 <Link to="/" className='hover:underline hover:text-green-500 text-white transition duration-300 ease-in-out font-bold '>Home</Link>
             </li>
             <li>
                  <Link to="/about" className='hover:underline hover:text-green-500 text-white transition duration-300 ease-in-out font-bold'>About</Link> {/*text-white hover:text-gray-300 */}
             </li>
             <li>
                 <Link to="/contact" className='hover:underline hover:text-green-500 text-white transition duration-300 ease-in-out font-bold'>Contact</Link>
             </li>
             </ul>
            </div>
        </nav>
        </>
    )
}
export default Navbar;

