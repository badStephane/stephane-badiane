 /**
  * @copyright Copyright (c) 2024.  All rights reserved.
  * @license Apache-2.0
  */

import React from 'react'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900'>
        <div className='max-w-screen-2xl w-full mx-auto px-4 flex items-center justify-between
        md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]'>
            <h1>
                <a href="/" className='logo'>
                <img src="/src/assets/logo.png" width={40} height={40} alt="Stephane Badiane" />
                </a>
            </h1>

            <div className='relative md:justify-self-center'>
                <button className='menu-btn md:hidden' onClick={null}>
                    <span className='material-symbols-rounded'>
                        menu 
                    </span>
                </button>

                Navbar
            </div>
            <a href="#contact" className=''>
                Contact Me
            </a>
        </div>
    </header>
  )
}

export default Header