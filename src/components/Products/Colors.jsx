import { COLORS } from '../../constans'
import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'

const Colors = () => {
  return (
    <div>
      <Menu className="my-5 m-auto" color='black'>
        <MenuHandler>
          <Button
            className="bg-second-200 px-10 text-black py-2 my-5"
            size="lg"
          >
            Color
        </Button>
        </MenuHandler>
        <MenuList className='bg-primary-200'> Colors:
          {COLORS.map((c,index) => {
            return (
              <MenuItem key={index} style={{ color : c }} >{c}</MenuItem>
              )
            })}
          </MenuList>
            </Menu>
    </div>
  )
}

export default Colors