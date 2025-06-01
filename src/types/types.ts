
export type User = {

userId:number;
id:number;
title:string;
body:string;

}



export interface CheckBoxPropType{

    children?: React.ReactNode;
    htmlFor?:string;
    labelValue:string;
    className:string;
   

}


export interface finalCheckBoxProp extends CheckBoxPropType{

     style: React.CSSProperties;

}


export type CardProps = {
  cardTitle: string;
  cardImg: string;
  cardContent: string;
  style:React.CSSProperties;
  onclickcard: () => void;
  onkeydown:(num:number) => string;
};


export type ButtonProps = {
  children:React.ReactNode;
  fontSize: string;
  btnTextColor: string;
  btnBgColor: string;
  btnBorderColor?: string; //I am making this as optional by using a '?' in the type definition.
    onclickbtn:() => void;
};