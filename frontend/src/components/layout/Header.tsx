import React, { useEffect, useState } from 'react'
// import { Layout, Menu } from 'antd';
import lab_logo from '../../assets/concept/metaonlab_logo_vertical.png'
import { Link } from 'react-router-dom'
import { Navbar as MTNavbar, MobileNav, Typography, IconButton } from '@material-tailwind/react'
import routes from '../../routes'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const AppHeader: React.FC = () => {
  const [openNav, setOpenNav] = useState(false)

  const handleAdminClick = () => {
    window.location.href = 'http://165.194.29.153/admin'
  }

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false))
  }, [])

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path }) => (
        <Typography key={name} as="li" variant="lead" color="inherit" className="capitalize" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
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
            <Link to={'/'}>Home</Link>
          </button>
          <button className="text-gray-light hover:font-medium">Contact</button>
          <button className="text-gray-light hover:font-medium" onClick={handleAdminClick}>Admin</button>
        </div>
      </section>
      <hr className="border-[#dedede]" />
      <section>
        <MTNavbar color="transparent" className="p-3" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} onResize={undefined} onResizeCapture={undefined}>
          <div className="container mx-auto flex items-center justify-between text-black">
            <Link to="/">
              <img src={lab_logo} alt='logo' width={130}/>
            </Link>
            <div className="hidden lg:block">{navList}</div>
            <IconButton
                variant="text"
                size="sm"
                color="gray"
                className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                onClick={() => setOpenNav(!openNav)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} onResize={undefined} onResizeCapture={undefined}            >
              {openNav ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
          </div>
          <MobileNav className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900 lg:hidden" open={openNav}>
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
