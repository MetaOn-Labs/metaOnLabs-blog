import React, { useEffect, useState } from 'react'
// import { Layout, Menu } from 'antd';
import lab_logo from '../../assets/concept/logo2.png'
import { Link } from 'react-router-dom'
import { Navbar as MTNavbar, MobileNav, Typography, Button, IconButton } from '@material-tailwind/react'
import routes from '../../routes'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const AppHeader: React.FC = () => {
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false))
  }, [])

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path }) => (
        <Typography key={name} as="li" variant="small" color="inherit" className="capitalize">
          <Link
            to={path}
            // target={target}
            className="flex items-center gap-1 p-1 font-bold"
          >
            {name}
          </Link>
        </Typography>
      ))}
    </ul>
  )

  return (
    <header className="fixed bg-white w-full z-50">
      <div className="container mx-auto">
      <section>
        <div className="flex justify-end gap-4 p-2">
          <button className="text-gray-light hover:font-medium">
            <Link to={'/'}>home</Link>
          </button>
          <button className="text-gray-light hover:font-medium">contact</button>
          <button className="text-gray-light hover:font-medium">admin</button>
        </div>
      </section>
      <hr className="border-[#dedede]" />
      <section>
        <MTNavbar color="transparent" className="p-3">
          <div className="container mx-auto flex items-center justify-between text-black">
            <Link to="/">
              <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">{'RACP'}</Typography>
            </Link>
            <div className="hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              size="sm"
              color="black"
              className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
          </div>
          <MobileNav className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900" open={openNav}>
            <div className="container mx-auto">
              {navList}
            </div>
          </MobileNav>
        </MTNavbar>
      </section>
      </div>
    </header>
  )
}

export default AppHeader
