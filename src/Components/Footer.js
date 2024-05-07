import React from 'react'
import { MdCopyright } from "react-icons/md";
import '../CSS/Footer.css';

const Footer = () => {
  return (
    <div>
        <div className='footer'>
          <div className='innerFooter'> 
            <MdCopyright className='CopyR'/>
            <h6> Copy Rights Reserved. Work Done By PNSYILDIZ</h6>
        </div>
        </div> 
      
    </div>
  )
}

export default Footer
