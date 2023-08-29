import React from 'react'
import "./Header.css"
import { Search } from '@material-ui/icons'
import { ShoppingBasket } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
function Header() {
  const handleauthentication=()=>{
     if(user){
      auth.signOut()
     }
  }
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='header'>
      <Link to="/">
      <img className='header_logo' src="logo2.png" alt="Amazon" />
      </Link>
      <div className="header_search">
        <input type="text" className='header_searchinput' />
        <Search className="header_searchicon"/> 
      </div>
     
      <div className="header_nav">
      <Link to={!user && "/login"}>
        <div onClick={handleauthentication} className="header_option">
          <span className='header_option1'>Hello {!user ? 'Guest' : user.email}</span>
          <span className="header_option2">{user?'Sign Out':'Sign In'}</span>
        </div>
        </Link>
        <div className="header_option">
          <span className='header_option1'>Returns</span>
          <span className="header_option2">& Orders</span>
        </div>
        <Link to="https://www.primevideo.com/?ref_=dvm_pds_amz_in_as_s_g_176_mkw_s4mEHKPKZ-dc&mrntrk=pcrid_394383628233_slid__pgrid_82649959567_pgeo_9040195_x__ptid_kwd-339065342343">
        <div className="header_option">
          <span className='header_option1'>Your</span>
          <span className="header_option2">Prime</span>
        </div>
        </Link>
        <Link to="/checkout">
        <div className="header_optionbasket">
            <ShoppingBasket/>
            <span className='header_option2 header_basketcount'> {basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Header