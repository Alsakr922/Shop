import {
  Button,
  Typography,
  Card,
  CardBody ,
  CardFooter,
  CardHeader,
  Input
} from '@material-tailwind/react'
import { useState } from 'react'
import {  FaEnvelope, FaShieldAlt, FaUser } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../Redux/Slices/AuthSlice'


const Login = () => {
  const dispatch = useDispatch()
  const initialState = {
    name: '',
    password: '',
    email: '',
  };
  const [Values, setValues] = useState(initialState)
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  }
  return (
    <div className='container m-auto py-[100px]'>
      <Card className='w-96 m-auto mt-10'>
        <CardHeader
          variant='gradient'
          className='mb-4 grid h-28 place-content-center bg-primary-500'
        >
          <Typography variant='h1' color='white'>
            Log In
          </Typography>
        </CardHeader>
        <CardBody className='flex flex-col gap-4 pb-0'>
          <Input icon={<FaUser />} label='User Name' value={Values.name} onChange={onChange} size='lg' type='text' name='name' className=' focus:border-primary-500 ' />
          <Input icon={<FaEnvelope />} label='Email' value={Values.email} onChange={onChange} size='lg' type='email' name='email' className=' focus:border-primary-500 ' />
          <Input icon={<FaShieldAlt />} label='Password' value={Values.password} onChange={onChange} size='lg' type='password' name='password' className=' focus:border-primary-500 ' />
          <div className="-ml-2.5"></div>
        </CardBody>
        <CardFooter className='pt-0'>
          <Link to={"/"}>
          <Button  className='bg-primary-500 btn w-full my-5' onClick={() => dispatch(login(Values))}>
            Log In
          </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login