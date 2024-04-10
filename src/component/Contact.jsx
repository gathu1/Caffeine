  
  import '../style/contact.css' 




function Contact() {
    return(
        <div className='contact '>
            <form action="https://formspree.io/f/xayrlbzd" method="POST">
            <div className='nav' id='navbar'>
           <div className='logo'><a href='/'>Caffeine</a></div>
          <ul className='nav-links' id='nav_links'>
        <li><a href='/home'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/contact'>Contact</a></li>

        </ul>
        </div>
                <h1 className="">Contact Us</h1><br />
                
                <div class="inputBox">
                    <p>Enter Name</p>
                    <input type="text" placeholder="Full Name..." required />
                </div>

                <div class="inputBox">
                    <p>Enter Email</p>
                    <input type="text" placeholder="Email Address..." required />
                </div>

                <div class="inputBox">
                    <p>Message</p>
                    <input type="text" placeholder="Message..." required />
                </div>

                <div class="inputBox">
                  <input type="Submit" name="Submit" />
              </div>


                
            
            </form>
        
        </div>
    );
}

export default Contact;

