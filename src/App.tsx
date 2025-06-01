import { useEffect, useState } from "react";
import Button from "./Button";
import Card from "./Card";
import shoe1 from "./assets/show1.jpeg";
import Input from "./Input";
import { CheckBox } from "./CheckBox";



type User = {
// "userId": 1,
// "id": 1,
// "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// "body": "quia et suscipit\nsuscipit recusandae consequuntur 
// expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"

userId:number;
id:number;
title:string;
body:string;



}

const App = () => {

  const [data, setData] = useState<User[] | null>([]);


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
    </div>
  );
};

export default App;
