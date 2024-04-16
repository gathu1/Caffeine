  
//   import '../style/contact.css' 

import { Container } from "postcss";




// function Contact() {
//     return(
//         <div className='contact '>
//             <form action="https://formspree.io/f/xayrlbzd" method="POST">
//             <div className='nav' id='navbar'>
//            <div className='logo'><a href='/'>Caffeine</a></div>
//           <ul className='nav-links' id='nav_links'>
//         <li><a href='/home'>Home</a></li>
//         <li><a href='/about'>About</a></li>
//         <li><a href='/contact'>Contact</a></li>

//         </ul>
//         </div>
//                 <h1 className="">Contact Us</h1><br />
                
//                 <div class="inputBox">
//                     <p>Enter Name</p>
//                     <input type="text" placeholder="Full Name..." required />
//                 </div>

//                 <div class="inputBox">
//                     <p>Enter Email</p>
//                     <input type="text" placeholder="Email Address..." required />
//                 </div>

//                 <div class="inputBox">
//                     <p>Message</p>
//                     <input type="text" placeholder="Message..." required />
//                 </div>

//                 <div class="inputBox">
//                   <input type="Submit" name="Submit" />
//               </div>


                
            
//             </form>
        
//         </div>
//     );
// }

// export default Contact;

const Contact = () => {

    return (
      <div className="max-w-md w-full mx-auto p-6 bg-gray-600 rounded-lg shadow-md mt-10 mb-10">
        <h2 className="text-3x1 text-center text-black-300 font-bold mb-6">Contact Us</h2>
        <form action="https://formspree.io/f/xayrlbzd" method="POST">
          <div className="mb-4 ">
            <label className="block text-white-500 text-sm font-semibold mb-2" htmlFor="">Full Name</label>
            <input placeholder="Full Name..." className="w-full px-3 py-2 border rounded-lg bg-white-450 focus:border-blue-500" required type="text" />
          </div>
          <div className="mb-4 ">
            <label className="block text-white-500 text-sm font-semibold mb-2" htmlFor=""> Email</label>
            <input placeholder="Your Email..." className="w-full px-3 py-2 border rounded-lg bg-white-450 focus:border-blue-500" required type="email" />
          </div>
          <div className="mb-4 ">
            <label className="block text-white-500 text-sm font-semibold mb-2" htmlFor="">Message</label>
            <textarea rows='4'  placeholder="Type your message..." className="w-full px-3 py-2 border rounded-lg bg-white-450 focus:border-blue-500" required type="text" />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-green-500 text-white-500 font-semibold px-4 py-2 rounded-lg hover:bg-green-500 focus:outline-white">Submit</button>
          </div>

        </form>
      </div>

      
        
      



      )
    }
    
    export default Contact;