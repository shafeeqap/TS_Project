import React from 'react'
import bgImage from '../assets/bgImage.svg'
import todoLogo from '../assets/pencil.svg'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const Home: React.FC = () => {
  const navigate = useNavigate();



  return (
    <div className='flex flex-col justify-between bg-white min-h-screen object-contain oerflow-hidden'>
      <div className='w-full flex flex-col justify-center items-center p-5'>
        <div className='flex justify-start items-start w-full max-md:justify-center mb-6 px-9 max-md:bg-slate-200'>
          <img className='w-24 max-md:w-20 p-2' src={todoLogo} alt="todoLogo" />
        </div>
        <div className='md:flex justify-between items-center w-full px-9'>
          <div className='container'>
            <h1 className='text-black text-4xl mb-5 md:text-6xl font-bold md:leading-[75px]'>Get your work <br /> organized<br />  with</h1>
            <Button onClick={() => navigate('/todoList')} className='bg-orange-700 rounded-md p-2 w-50 h-11 text-lg hover:bg-orange-600'>My Todo</Button>
          </div>
          <img src={bgImage} alt="bgImage" className='w-full md:w-[350px]' />
        </div>
      </div>
      
      <footer className='bg-slate-200 text-black p-4'>
        <div className='container mx-auto text-center'><p>© 2024 My Todo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home