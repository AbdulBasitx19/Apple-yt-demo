import React from 'react'
import { navLinks } from '../constant'

const Navbar = () => {

  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" />

        <ul>
          {navLinks.map((linker)=>(
            <li key={linker.label}>
              <a href={linker.label}>{linker.label}</a>
            </li>
          ))}
        </ul>

        <div className='flex-center gap-3'>
          <button>
            <img src="/search.svg" alt=" Search Img" />
          </button>

          <button>
            <img src="/cart.svg" alt="Cart Img" />
          </button>
        </div>

      </nav>
    </header>
  )
}

export default Navbar