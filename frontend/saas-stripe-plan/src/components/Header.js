import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink ,useNavigate} from 'react-router-dom'


let user=JSON.parse(localStorage.getItem('user'))

const navigation = {
    'super-admin': [
  { name: 'SuperAdminDashboard', href: '/super-dashboard' },
  { name: 'RegisterAdmin', href: '/register' },
  { name: 'PlanList', href: '/plan-crud' }
],
'admin':[ 
    { name: 'RegisterUser', href: '/register' },
   {name:'OrderHistory',href: '/order-history'},
   { name: 'PlanList', href: '/plan-list' }
],
'user':[ 
     { name: 'Dashboard', href: '/dashboard' },
   ]
}
function navItems(role){
    return navigation[role] || [];
}

export default function Header(props) {
    let navigation=navItems(user?user.role:user)
    const navigate = useNavigate()
  return (<>
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-14 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive })=>{
                      return 'px-3 py-2 rounded-md text-sm font-medium no-underline' +
                      (!isActive 
                        ? ' text-gray-300 hover:bg-gray-700 hover:text-white'
                        : '  bg-gray-900 text-white')
                    }}
                   
                  >
                    {item.name}
                    
                  </NavLink>
                ))}
                {user?
                <NavLink
                  onClick={()=>{
                    localStorage.clear()
                    window.location.reload()
                    navigate('/login')
                  }}
                    to={'/login'}
                    className="px-3 py-2 rounded-md text-sm font-medium no-underline text-gray-300 hover:bg-gray-700 hover:text-white"
                                      >
                   Logout
                    
                  </NavLink>
                  :
                  <NavLink
                 
                  to={'/login'}
                  className="px-3 py-2 rounded-md text-sm font-medium no-underline text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                 Login
                  
                </NavLink>}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
             
              <BellIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive })=>{
                return 'block rounded-md px-3 py-2 text-base font-medium' +
                (!isActive 
                  ? ' no-underline text-gray-300 hover:bg-gray-700 hover:text-white'
                  : '  no-underline bg-gray-900 text-white')
              }}
            >
              {item.name}
          </NavLink>
          
          ))}
          {user ?
                <NavLink
                  onClick={()=>{
                    localStorage.clear()
                  }}
                    to={'/Login'}
                    className="px-3 py-2 rounded-md text-sm font-medium no-underline text-gray-300 hover:bg-gray-700 hover:text-white"
                                      >
                   Logout
                    
                  </NavLink>
                  :
                  <NavLink
                  
                  to={'/Login'}
                  className="px-3 py-2 rounded-md text-sm font-medium no-underline text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                 Login
                  
                </NavLink>}
        </div>
      </DisclosurePanel>
     
    </Disclosure>
     <div className="bg-gray-300 px-3 py-2 min-h-screen">{props.children}</div>
     </>
  )
}
