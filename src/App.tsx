import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Card from "./Card";
import shoe1 from "./assets/show1.jpeg";
import Input from "./Input";
import { CheckBox } from "./CheckBox";
import type {User} from './types/types'



const App = () => {

  const [data, setData] = useState<User[] | null>([]);
const btnRef  = useRef<HTMLButtonElement | null>(null);

const printRefCounter = () =>{

console.log(btnRef?.current)

}


  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if(!response.ok) {

          throw new Error('Data could not be fetched');

        }

const parsedData = await response.json();
        
setData(parsedData);
console.log(data);
        

      } catch (error) {
        console.log(error);
      }
    };


    fetchData();

  }, []);




  const [showText, setShowText] = useState(false);

  const changeTextShow = () => {
    setShowText((prev) => !prev);
  };

  const printNumInStr = (num: number): string => {
    console.log(num.toString());

    return num.toString();
  };

  const CardAlert = () => {
    alert("Hi this is a card alert. This is a custom alert box.");
  };

  //
  return (
    <div className="bg-red-400 flex justify-center max-w-screen overflow-x-hidden
     flex-col space-y-16 items-center  min-h-[130vh]">
      <h1 className={`${showText ? "block" : "hidden"} text-5xl text-sky-400`}>
        This is a text
      </h1>
      <Button
        onclickbtn={changeTextShow}
        fontSize={"text-[15px]"}
        btnTextColor={"text-red-800"}
        btnBgColor="bg-cyan-500"
        btnBorderColor="border-gray-950"
      >
        {"Click Here"}
      </Button>

      <Card
        onclickcard={CardAlert}
        onkeydown={printNumInStr}
        cardImg={shoe1}
        cardTitle="Card Title"
        cardContent=" the 1500s, when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five centuries,
         but also the leap into electronic typesetting, remaining essentially unchange"
        style={{ color: "white", fontSize: "15px", backgroundColor: "blue" }}
      />

      <Input
        inputType="password"
        placeholder="Enter your address"
        className=""
        label="Address:"
        id={`${1}I`}
        isDisabled={false}
        isRequired={true}
        style={{
          backgroundColor: "gray",
          color: "yellow",
          border: "3px dashed teal",
          padding: "6px",
          borderRadius: "5%",
        }}
      />

      <CheckBox
        htmlFor="paymentMoode"
        labelValue="Tick Preffred Payment Mode"
        className="text-red-600"
        style={{
          border: "3px dashed blue",
        }}
      />


<button onClick={printRefCounter} ref={btnRef} 
className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded">
 Click
</button>

    </div>
  );
};

export default App;



//Notes on setting Typescript types on Refs (useRef variables)


/*

you should use such types (useRef<HTMLXElement | null>) for all ref variables in TypeScript React — 
it’s the recommended and type-safe way to handle refs for DOM elements.

✅ Example Patterns for Common HTML Elements
Here are common examples you can safely use throughout your app:

HTML Element	              Ref Type
button	                  `useRef<HTMLButtonElement
input                    	`useRef<HTMLInputElement
textarea	                `useRef<HTMLTextAreaElement
form	                    `useRef<HTMLFormElement
div, span, etc.	          `useRef<HTMLDivElement
img	                      `useRef<HTMLImageElement
select	                  `useRef<HTMLSelectElement

🧠 Why null is included?
On first render, refs are null until the DOM is mounted.

That's why the full type is HTMLXElement | null.



*/