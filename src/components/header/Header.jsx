import React from 'react';
import '../header/header.scss';
import { useState } from 'react';

function Header() {

    const [clickMenu, setClickMenu] = useState(false)

    const openMenu = () => {
        setClickMenu(!clickMenu)
        console.log(clickMenu);
        if (clickMenu === false) {
            document.querySelector(".menu").style.left = "0px";
        } else {
            document.querySelector(".menu").style.left = "-1000px";
        }
    }

    return (
        <div className='navBar-container'>
            
            <div className="navBar-top">
                <div>
                    <ul>
                        <li className='menu-item'><img src="https://img.icons8.com/color/50/000000/argentina.png" /></li>
                        <li><img src="https://img.icons8.com/color/48/000000/great-britain.png" /></li>
                    </ul>
                </div>
            </div>

            <div className='navBar-wrapper'>

                <div className='icon-logo'>
                    <img className='icon' src="https://firebasestorage.googleapis.com/v0/b/penguins-reeds.appspot.com/o/Logos%2Flogo-header.png?alt=media&token=4bc5f269-69c2-4872-9195-d19cb89b9f90" alt="" />
                </div>

                <div className="icon-hamburger-mobile" onClick={openMenu}>
                    {
                        clickMenu ?
                            <i className="ri-close-line"></i>
                            :
                            <i className="ri-more-2-fill"></i>
                    }

                </div>

                <ul className='menu'>
                    <li className='menu-item'>
                        <a href="" className='menu-item-link'>Oboe</a>
                    </li>
                    <li className='menu-item'>
                        <a href="" className='menu-item-link'>Clarinete</a>
                    </li>
                    <li className='menu-item'>
                        <a href="" className='menu-item-link'>Fagot</a>
                    </li>
                    <li className='menu-item'>
                        <a href="" className='menu-item-link'>Saxofón</a>
                    </li>
                    <li className='menu-item'>
                        <a href="" className='menu-item-link'>Sobre Nosotros</a>
                    </li>
                    <li className='menu-item'>
                        <a href="" className='menu-item-link'>Contactanos</a>
                    </li>
                    {/* <li className='menu-item'><img src="https://img.icons8.com/color/50/000000/argentina.png" /></li>
                    <li className='menu-item'><img src="https://img.icons8.com/color/50/000000/usa.png" /></li> */}
                </ul>

            </div>
        </div>
    )
}

export default Header