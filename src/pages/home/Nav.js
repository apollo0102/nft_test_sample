import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import { ReactComponent as IconLogo } from '../../assets/icons/Logo.svg'

const pages = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'ABOUT',
    link: '/about',
  },
  {
    text: 'FAO',
    link: '/fao',
  },
]

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className=''>
      <nav className=''>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex justify-between items-center w-full'>
              <div className='hidden md:block flex-shrink-0'>
                <IconLogo></IconLogo>
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-8'>
                  {pages.map((page) => (
                    <a
                      key={page.link}
                      className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                      href={`#${page.link}`}
                    >
                      {page.text}
                    </a>
                  ))}
                </div>
              </div>
              <div className='hidden md:block'>
                <button className='border-[#577a30] border-2 rounded-lg p-2 text-[#577a30] font-bold hover:bg-gray-700 hover:text-white'>
                  CONNECT WALLET
                </button>
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M2 6h16M4 12h14M2 18h16M4 24h14'
                    />
                    
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          {(ref) => (
            <div className='md:hidden  bg-red-400 z-50' id='mobile-menu'>
              <div ref={ref} className='px-2 pt-2 pb-3 space-y-1 float-right h-full max-h-full w-1/2 sm:px-3 '>
              {pages.map((page) => (
                    <a
                      key={page.link}
                      className='hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium text-right'
                      href={`#${page.link}`}
                    >
                      {page.text}
                    </a>
                  ))}

              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
    
  )
}

export default Nav
