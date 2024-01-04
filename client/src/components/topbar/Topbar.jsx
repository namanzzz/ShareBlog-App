import { Link } from 'react-router-dom';
import './topbar.css'
import { Context } from '../../context/Context';
import { useContext } from 'react';

export default function Topbar() {
     const {user, dispatch} = useContext(Context);

      const handleLogout = () => {
            dispatch({ type: "LOGOUT" });
        };

  return (
    <div className='top'>
        <div className="topLeft">

            <a href="https://www.facebook.com/namam.sharma.148" target='_blank'>
                <i className="topIcon fa-brands fa-facebook">
                </i>
            </a>
            

            <a href="https://www.linkedin.com/in/namanm21/" target='_blank'>
                <i className="topIcon fa-brands fa-linkedin"></i>
            </a>
            
            
                <a href="https://www.instagram.com/mhitchhiker" target='_blank'>
                    <i className="topIcon fa-brands fa-instagram"></i>
                </a>
            
        </div>
        <div className="topCenter">
            <ul className='topList'>
                <li className='topListItem'>
                    <Link className='link' to="/"
                    >HOME</Link>
                </li>

                <li className='topListItem'>
                    <Link className='link' to="/about"
                    >ABOUT</Link>
                </li>
                

                <li className='topListItem'>
                    <Link className='link' to="/write"
                    >WRITE</Link>
                </li>
                
                <li className='topListItem' onClick={handleLogout}
                >
                    {user && "LOGOUT"}
                </li> 

            </ul>
        </div>
        <div className="topRight">
            {

                 user ? (
                    <i class="topImg fa-solid fa-user"></i>
                    
                 ) : (
                    <ul className='topList'>
                        <li className='topListItem'>
                            <Link className='link'
                            to="/login"
                            >LOGIN</Link>
                        </li>
                    
                        <li className='topListItem'>
                            <Link className='link'
                            to="/register"
                            >REGISTER</Link>
                        </li>
                
                    
                    </ul>

                 )
             }

            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            
        </div>
    </div>
  )
}
