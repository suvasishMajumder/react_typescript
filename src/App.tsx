import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import shoe1 from './assets/show1.jpeg'
import Input from "./Input";

const App = () => {
  const [showText, setShowText] = useState(false);

  const changeTextShow = () => {
    setShowText((prev) => !prev);
  };


  const CardAlert = () =>{

    alert('Hi this is a card alert. This is a custom alert box.');

  }

  return (
    <div className="bg-red-400 flex justify-center flex-col space-y-16 items-center w-screen h-screen">
      <h1 className={`${showText ? "block" : "hidden"} text-5xl text-sky-400`}>
        This is a text
      </h1>

      <Button
        onclickbtn={changeTextShow}
        fontSize={"text-[15px]"}
        btnTextColor={"text-red-800"}
        btnBgColor="bg-cyan-500"
        btnBorderColor="border-gray-950"
        btnText="Click Me"
      />

      <Card
      onclickcard={CardAlert}
        cardImg={shoe1}
        cardTitle="Card Title"
        cardContent=" the 1500s, when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five centuries,
         but also the leap into electronic typesetting, remaining essentially unchange"
        style={{ color: "white", fontSize: "15px", backgroundColor: "blue" }}
      />


<Input inputType='password'  placeholder='Enter your address'  
className=""  label='Address:' id={`${1}I`} isDisabled={false} isRequired={true} 
style={{

  backgroundColor: "gray",
  color:'yellow',
  border:'3px dashed teal',
padding:'6px',
borderRadius:'5%'

}}
/>

    </div>
  );
};

export default App;
