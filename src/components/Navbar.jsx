import React from 'react'
import { navlinks } from '../constant'
const Navbar = () => {
    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="apple logo" />

                <ul>
                    {navlinks.map((linker)=>(
                      <li key={linker.label}>
                        <a href={linker.label}>
                            {linker.label}
                        </a>


                      </li>
                    ))}

                    
                
                </ul>
                <div className='flex-center gap-3'>
                    <button>
                        <img src="/search.svg" alt="search img" />
                    </button>
                    <button>
                        <img src="/cart.svg" alt="Cart img"/>
                    </button>

                </div>
            </nav>
        </header>
    )
}

export default Navbar