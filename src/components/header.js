
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const JustNav = () => {
 
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        
        <>

            <nav>
                <div className="navbar-container">
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>  
                        </li>
                        <li className='nav-item'>
                            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                Listings
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                Profile
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                Something
                            </Link>
                        </li>
                    </ul>
                   
                </div>
            </nav>
            
              
        </>
    )
}

export default JustNav;



