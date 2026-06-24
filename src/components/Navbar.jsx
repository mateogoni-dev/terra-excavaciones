import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import logo from '../assets/logo.png'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-[#111] px-6 py-3 flex items-center justify-between sticky top-0 z-50 w-full">
      <div className="flex items-center gap-3">
        <Link to="/hero">
          <img src={logo} alt="Terra Excavaciones" className="h-11 w-11 rounded-full" />
        </Link>
        <div className="flex flex-col leading-tight">
          <span className="text-white text-sm font-medium tracking-widest uppercase">Terra</span>
          <span className="text-gray-500 text-[9px] tracking-[0.18em] uppercase">Excavaciones</span>
        </div>

      </div>

      {/* desktop */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className="text-gray-400 hover:text-[#F5C000] text-xs tracking-wider uppercase transition-all duration-150 ease-in-out hover:-translate-y-0.5">Servicios</Link>
        <Link to="/nosotros" className="text-gray-400 hover:text-[#F5C000] text-xs tracking-wider uppercase transition-all duration-150 ease-in-out hover:-translate-y-0.5">Nosotros</Link>
        <Link to="/trabajos" className="text-gray-400 hover:text-[#F5C000] text-xs tracking-wider uppercase transition-all duration-150 ease-in-out hover:-translate-y-0.5">Trabajos</Link>
        <Link to="/contacto" className="bg-[#F5C000] text-black px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-150 ease-in-out hover:bg-white hover:scale-105 hover:shadow-[0_0_20px_rgba(245,192,0,0.3)] active:scale-95">
          Contacto
        </Link>
      </div>

      {/* mobile */}
      <button className="md:hidden text-white text-xl" onClick={() => setOpen(!open)}>
        {open ? <HiX /> : <HiMenu />}
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-[#111] flex flex-col px-6 py-4 gap-4 md:hidden border-t border-white/5 animate-slideDown shadow-2xl">
          <Link to="/" className="text-gray-400 text-sm uppercase tracking-wider transition-all duration-200 ease-out hover:text-[#F5C000] hover:pl-1" onClick={() => setOpen(false)}>Servicios</Link>
          <Link to="/nosotros" className="text-gray-400 text-sm uppercase tracking-wider transition-all duration-200 ease-out hover:text-[#F5C000] hover:pl-1" onClick={() => setOpen(false)}>Nosotros</Link>
          <Link to="/trabajos" className="text-gray-400 text-sm uppercase tracking-wider transition-all duration-200 ease-out hover:text-[#F5C000] hover:pl-1" onClick={() => setOpen(false)}>Trabajos</Link>
          <Link to="/contacto" className="text-[#F5C000] text-sm font-semibold uppercase tracking-wider transition-all duration-200 ease-out hover:text-[#F5C000] hover:pl-1" onClick={() => setOpen(false)}>Contacto</Link>
        </div>
      )}
    </nav>
  )
}