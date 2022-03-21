import React,{useState} from 'react';
import Demo from '../components/Demo/demo';
import Navbar from '../components/Navbar';
const Home = () => {
  const [isOpen,setIsOpen] = useState(false);
  const toggle = () =>{
      setIsOpen(!isOpen)
  }
  return (
    <>
        <Navbar toggle={toggle}/>
        <Demo/>
    </>
  )
}

export default Home;