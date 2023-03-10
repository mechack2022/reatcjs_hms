import React, { Component } from 'react';
import logo from '../images/logo.svg'
import {Link} from 'react-router-dom'
import {FaAlignRight} from 'react-icons/fa'

class Nav extends Component {
   state={
      isOpen: true
   }
   toggleNav =()=>{
      this.setState({isOpen:!this.state.isOpen})
   }
   render() {
      return (
         <nav className="navbar">
            <div className="nav-center">
               <div className="nav-header">
                 <Link to="/">
                   <img src={logo} alt="logoImage"/>
                 </Link> 
                 <button  type="button" className="nav-btn">
                    <FaAlignRight className="nav-icon" onClick={this.toggleNav}/>
                 </button>
               </div>
               <ul className={this.state.isOpen?"nav-links show-nav" :"nav-links" }>
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/rooms">Rooms</Link></li> 
               </ul>
            </div>
         </nav>
      );
   }
}

export default Nav;