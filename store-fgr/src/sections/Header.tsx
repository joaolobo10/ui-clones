import React from 'react'
import { GoPerson } from 'react-icons/go';
import { PiShoppingCartThin } from 'react-icons/pi';


const Header = () => {
  return (
  <footer className="flex items-center justify-between px-6 py-8 bg-zinc-800 border-b-1 border-zinc-600">
  <div className='flex items-center gap-3'>
    <div>
    <img src="../"></img>
    </div>
  </div>
  <nav className="flex gap-5 flex-grow justify-center"> {/* Adicionado flex-grow e justify-center */}
    <a href="#" className="">Novidades</a>
    <a href="#" className="">Camisetas</a>
    <a href="#" className="">Moletons</a>
    <a href="#" className="">Chaveiros</a>
  </nav>
  {/* Conteúdo adicional que você queira à direita */}
  <div className="flex items-center"> {/* Exemplo de elemento à direita */}
    <a href='#' className='text-2xl'>
        <GoPerson />
    </a>
    <div className='text-2xl'>
        <PiShoppingCartThin />
    </div>
  </div>
</footer>
  )
};

export default Header