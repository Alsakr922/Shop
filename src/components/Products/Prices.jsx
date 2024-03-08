import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import {  FaGreaterThan } from 'react-icons/fa'

const Prices = () => {
  return (
    <div>
            <Menu className="my-5 m-auto" color='black'>
        <MenuHandler>
          <Button
            className="bg-second-200 px-10 text-black py-2 my-5"
            size="lg"
          >
            Price
        </Button>
        </MenuHandler>
        <MenuList className='bg-primary-200'> Colors:
              <MenuItem  className='flexCenter' >0  - 500$</MenuItem>
              <MenuItem  className='flexCenter' >500$ - 1000$</MenuItem>
              <MenuItem  className='flexCenter' >1000$ - 2000$</MenuItem>
              <MenuItem  className='flexCenter' >2000$ - 10000$</MenuItem>
              <MenuItem className='flexCenter'  > <FaGreaterThan className='inline' /> 10000$</MenuItem>
          </MenuList>
            </Menu>
    </div>
  )
}

export default Prices