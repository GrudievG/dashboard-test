import Logo from '../assets/logo.svg?react'
import LogoSmall from '../assets/logo-small.svg?react'
import Button from './ui/Button.tsx';
import PlusIcon from '../assets/icons/plus-filled.svg?react'
import DiscoverIcon from '../assets/icons/discover.svg?react'
import LikeIcon from '../assets/icons/heart.svg?react'
import BellIcon from '../assets/icons/bell.svg?react'
import SearchInput from './ui/SearchInput.tsx';
import { useCallback } from 'react';

const Header = () => {
  const handleInputChange = useCallback((value: string) => {
    console.log('Search query:', value)
  }, [])

  return (
    <div className="border-b border-b-gray-100">
      <div className="container mx-auto flex items-center py-4">
        <div className="w-14 min-w-14 lg:w-sidebar lg:min-w-sidebar">
          <div className="hidden lg:block">
            <Logo/>
          </div>
          <div className="lg:hidden">
            <LogoSmall/>
          </div>
        </div>
        <div className="grow flex justify-between items-center gap-4">
          <div className="grow mr-16">
            <SearchInput onChange={handleInputChange} />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outlined">
              <PlusIcon className="text-primary" />
              <span className="hidden lg:block">Create</span>
            </Button>
            <Button variant="outlined">
              <DiscoverIcon className="text-primary" />
              <span className="hidden lg:block">Discover</span>
            </Button>
            <Button variant="outlined">
              <LikeIcon className="text-primary" />
              <span className="hidden lg:block">Favorites</span>
            </Button>
            <Button variant="transparent" className="relative">
              <BellIcon />
              <div className="absolute top-2 right-2.5 w-1 h-1 rounded-full bg-red-600" />
            </Button>
            <img
              src="https://picsum.photos/100"
              className="w-12 aspect-square rounded-full object-cover"
              alt="User avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;