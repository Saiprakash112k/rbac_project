'use client'

import { useState } from 'react'
import {
  PopoverGroup,
  Dialog,
  DialogPanel
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
const navigate = useNavigate()
  const logOut = ()=>{
    sessionStorage.clear()
    navigate('/')
  }

  return (
    <header className="bg-white rounded-md">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
    <h4 className='text-lg font-semibold'>RABC</h4>
          </a>
        </div>
        <div className="flex lg:hidden">
        <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          
            <Link to={'/dashboard'}>
          <a  className="text-sm/6 font-semibold text-gray-900">
            Dashboard
          </a>
          </Link>
          <Link to={'/users'}>
          <a  className="text-sm/6 font-semibold text-gray-900">
            UserManagement
          </a>
          </Link>
          <Link to={'/roles'}>
          <a  className="text-sm/6 font-semibold text-gray-900">
            RoleManagement
          </a>
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900" onClick={logOut}>
            Log Out <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
            <h4 className='text-lg font-semibold'>RABC</h4>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <Link to={'/dashboard'}>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Dashboard
                </a>
                </Link>
                <Link to={'/users'}>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  UserManagement
                </a>
                </Link>
                <Link to={'/roles'}>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  RoleManagement
                </a>
                </Link>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={logOut}
                >
                  Log Out
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
