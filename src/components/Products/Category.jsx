import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import { CATEGORYS } from '../../constants'

const Category = () => {
  return (
    <div>
      <Menu className="my-5" color='black'>
        <MenuHandler>
          <Button
            className="bg-second-200 px-10 text-black py-2 my-5"
            size="lg"
          >
            Category
        </Button>
        </MenuHandler>
        <MenuList className='bg-primary-200'> Colors:
          {CATEGORYS.map((c,index) => {
            return (
              <MenuItem key={index} >{c.title}</MenuItem>
              )
            })}
          </MenuList>
            </Menu>
    </div>
  )
}

export default Category
