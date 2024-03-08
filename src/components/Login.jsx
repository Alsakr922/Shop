/* eslint-disable react/jsx-key */
import {
  Button,
  Typography,
  Card,
  CardBody ,
  CardFooter,
  CardHeader,
  Input,
} from '@material-tailwind/react'
import { useState } from 'react'
import {  FaCheck, FaEnvelope,  FaFemale,  FaMale,  FaShieldAlt, FaUser } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../Redux/Slices/AuthSlice'


const Login = () => {
  const gender = ['male', 'female']
  const dispatch = useDispatch()
  const [Gender, setGender] = useState('')
  const initialState = {
    name: '',
    password: '',
    email: '',
    gender:Gender,
  };
  console.log("Initial state" , initialState)
  const [Values, setValues] = useState(initialState)
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  }
  localStorage.setItem("gender" , JSON.stringify(Gender));
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
          <div className="flexStart flex-col gap-y-2 pt-3 mb-2 text-xl font-medium text-gray-900 dark:text-white">
          {gender.map((g , index) => {
            return (
            <div className='flexCenter gap-x-10 capitalize m-auto'>
              {g} {g=="male" ?<FaMale /> : <FaFemale />}
              <label className="h-5 w-5 flex rounded-full cursor-pointer" style={{ background: 'gray' }} key={index} >
                <input type="radio" value={g} className="top-0 left-0 cursor-pointer -translate-x-0 hidden" onChange={(e) => setGender(e.target.value)} name='gender' />
                {Gender === g ? <FaCheck className="text-[20px] text-primary-900" /> : ''}
              </label>
              </div>
              )
            })}
        </div>
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