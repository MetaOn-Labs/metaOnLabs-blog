import React from 'react';
// import { Layout, Menu } from 'antd';
import lab_logo from '../../assets/concept/logo2.png';
import { Link } from 'react-router-dom';

const AppHeader: React.FC = () => {
  return (
    <header className='fixed bg-white w-full shadow-sm z-50'>
      <section>
        <div className='flex justify-end gap-4 p-2'>
          <button className='text-gray-light hover:font-medium'><Link to={'/'}>home</Link></button>
          <button className='text-gray-light hover:font-medium'>contact</button>
          <button className='text-gray-light hover:font-medium'>admin</button>
        </div>
      </section>
      <hr className='border-[#dedede]'/>
      <section>
        <div className='flex justify-center items-end'>
          <div id='logo'>
            <Link to='/'>
              <img alt='logo' src={lab_logo} className='w-40 h-auto'></img>
            </Link>
          </div>
          <nav className='flex mb-6'>
            <Link to={'/publication'} className='border-r px-5 border-gray-light'>Publication</Link>
            <Link to={'/solutions'} className='border-r px-5 border-gray-light'>Solution & Software</Link>
            <Link to={'/technology'} className='border-r px-5 border-gray-light'>Technology</Link>
            <Link to={'/team'} className='border-r px-5 border-gray-light'>Team</Link>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default AppHeader;
