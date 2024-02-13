import React from 'react';
import backgroundImage from '../images/360_F_117332203_ekwDZkViF6M3itApEFRIH4844XjJ7zEb.jpeg'



 function Home(){
    return(
        <div   style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover', // Adjust as needed
            backgroundPosition: 'center', // Adjust as needed
            /* Additional styling if needed */
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
          }}>
           <h1 className='bg-text text-light'>Come Shop with us!</h1>
         
          </div>
        
    )
}
export default Home;
 