import React from 'react'

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import Navbar from 'react-bootstrap/Navbar';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'


const Header = () => {
  return (
    
     
        <Navbar bg="dark" variant="dark" style={{height: '45px'}}>
     
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='amazon'/>
        <LocationOnOutlinedIcon id="location" style={{backgroundColor:'white'}}/>
        <span className='hello'>Hello<br/>
           <span className='Sin'>
           <b> Select Your Address</b>
           </span>
        </span>
        <select id="cars">
  <option value="volvo">All</option>
  <option value="saab">Service</option>
  <option value="opel">About</option>
  <option value="audi">Cloud</option>
  </select>
  <input type="search" placeholder="Search on Amazon" />
        <SearchIcon className='SearchIcon'style={{height: '30px'}}  />
            
        
        <span className='flagOne'>Hello & Sigin<br/>
           <span className='Siin'>
          
           <b>Account & List</b>
           </span>
          <span className='Return'>
          Return  & Orders
            <span className='guuri'>
          Your & Cart
            </span>
          </span>
        </span>
     <AddShoppingCartIcon className='Cart' style={{color:'white'}}/>
      </Navbar>
    
    
  )
}

export default Header