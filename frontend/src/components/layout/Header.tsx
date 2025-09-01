/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react'
import lab_logo from '../../assets/concept/metaonlab_logo_vertical.png'
import { Link } from 'react-router-dom'
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import routes from '../../routes'

const mediaListMenuItems = routes.filter((route) => route.name === 'Media')[0]
const publicListMenuItems = routes.filter((route) => route.name === 'Publication')[0]

const NavListMenu = ({ menuItems }: { menuItems: any }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const renderItems = menuItems.items.filter(({name}) => name !== 'GalleryDetail').map(({ name, path }) => (
    <a href={path} key={name}>
      <MenuItem id={name} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        {name}
      </MenuItem>
    </a>
  ))

  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom" allowHover={true}>
        <MenuHandler>
          <Typography
            as="div"
            variant="small"
            className="font-medium"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {menuItems.name}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? 'rotate-180' : ''}`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? 'rotate-180' : ''}`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          className="hidden overflow-visible lg:grid"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {renderItems}
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  )
}

function NavList() {
  return (
    <List
      className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <NavListMenu menuItems={mediaListMenuItems} />
      <NavListMenu menuItems={publicListMenuItems} />
      <Typography
        as="a"
        href="/team"
        variant="small"
        color="blue-gray"
        className="font-medium"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <ListItem
          className="flex items-center gap-2 py-2 pr-4"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Team
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="/notice"
        variant="small"
        color="blue-gray"
        className="font-medium"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <ListItem
          className="flex items-center gap-2 py-2 pr-4"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Notice
        </ListItem>
      </Typography>
    </List>
  )
}

function AppHeader() {
  const [openNav, setOpenNav] = useState(false)

  // const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur)

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false))
  }, [])

  const handleAdminClick = () => {
    window.location.href = 'http://165.194.29.153/admin'
  }

  const handleContactClick = () => {
    window.location.href = '#contact'
  }

  return (
    <header className="fixed bg-white w-full z-50">
      <div className="container mx-auto">
        <section>
          <div className="flex justify-end gap-4 p-2">
            <button className="text-gray-light hover:font-medium">
              <Link replace to={'/'}>
                Home
              </Link>
            </button>
            <button className="text-gray-light hover:font-medium" onClick={handleContactClick}>
              Contact
            </button>
            <button className="text-gray-light hover:font-medium" onClick={handleAdminClick}>
              Admin
            </button>
          </div>
        </section>
        <hr className="border-[#dedede]" />
        <section>
          <Navbar
            className="mx-auto max-w-screen-xl p-2 lg:pl-6 rounded-none shadow-none"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
              <Typography
                as="a"
                href="/"
                className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <img src={lab_logo} alt="logo" width={130} />
              </Typography>
              <div className="hidden lg:block">
                <NavList />
              </div>
              <IconButton
                variant="text"
                size="sm"
                color="gray"
                className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                onClick={() => setOpenNav(!openNav)}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                {openNav ? (
                  <XMarkIcon strokeWidth={2} className="h-6 w-6" />
                ) : (
                  <Bars3Icon strokeWidth={2} className="h-6 w-6" />
                )}
              </IconButton>
            </div>
            <Collapse open={openNav}>
              <NavList />
            </Collapse>
          </Navbar>
        </section>
      </div>
    </header>
  )
}

export default AppHeader
