
import { useState } from 'react';
import Button from './Button';




const App = () => {

  const [showText,setShowText] = useState(false);

const changeTextShow = () =>{

setShowText((prev)=>!prev);

}



  return (
    <div className='bg-red-400 flex justify-center flex-col space-y-16 items-center w-screen h-screen'>


      <h1 className={`${showText ? 'block' : 'hidden'} text-5xl text-sky-400`}>This is a text</h1>
 
<Button onclickbtn={changeTextShow} fontSize={'text-[15px]'} btnTextColor={'text-red-800'} btnBgColor='bg-cyan-500' btnBorderColor='border-gray-950' btnText='Click Me' />


    </div>
  )
}

export default App;
