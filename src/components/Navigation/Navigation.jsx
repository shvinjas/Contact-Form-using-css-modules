import React from 'react'
import styles from "./Navigation.module.css"

const Navigation = () => {
console.log();

    return (
        
      <nav className={`${styles.navigation} container`}>
        <div className='logo'>
            <img src="./images/brand.png" alt="logo"></img>
        </div>
        <ul>
             <li>Home</li>
             <li>ABOUT</li>
             <li>CONTACT</li>
        </ul>
      </nav>

    )
}

export default Navigation