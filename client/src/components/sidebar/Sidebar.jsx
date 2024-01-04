import axios from 'axios';
import './sidebar.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {

  const [cats, setCats] = useState([]);

  useEffect(()=>{
    const getCats = async ()=>
    {
        const res = await axios.get("/cats");
        // console.log(res);
        setCats(res.data);
    }; 
    getCats();
  }, [])


  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                ABOUT WEBSITE
            </span>
            <img src="https://images.unsplash.com/photo-1703772631084-d8e485fc2e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D" alt="sidebarimg" />
            <p>Please express your thoughts, engage in discussions, connect with readers, and establish expertise in various subjects.
            Hope You Enjoy it :)
            </p>
        </div>


        <div className="sidebarItem">
            <span className='sidebarTitle'>CATEGORIES TO DISCUSS</span>
            <ul className='sidebarList'>
                {cats.map(cat=>(
                    <Link to={`/?cat=${cat.name}`} className='link'>
                        <li className='sidebarListItem'>
                            {cat.name}
                        </li>
                    </Link>
                ))}
                
            </ul>
        </div>


        <div className="sidebarItem">
            <span className='sidebarTitle'>FOLLOW ME</span>
            <div className='sidebarSocial'>
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

        </div>


    </div>
  )
}
