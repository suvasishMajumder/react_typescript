

type ButtonProps = {
  children:React.ReactNode;
  fontSize: string;
  btnTextColor: string;
  btnBgColor: string;
  btnBorderColor?: string; //I am making this as optional by using a '?' in the type definition.
    onclickbtn:() => void;
};


/*
Q:-1) Why React.ReactNode instead of string for children prop?

Answer:

React.ReactNode is the correct and most flexible type to use for the children prop in React components. 
It covers all possible types that can be rendered as children of a React component, including:
React elements
Strings
Numbers
Arrays or fragments containing the above
Null or undefined
Booleans (though they don't render)
Using React.ReactNode allows your Button component to accept various types of children, which is typically 
what you want for a flexible, reusable component.
In your Button component, you're using it correctly:






Q:-2) 

*/

const Button = ({
  children,
  btnBgColor,
  btnBorderColor,
  btnTextColor,
  fontSize,
onclickbtn,
...rest
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onclickbtn}
      className={`text-white border-[5px] ${fontSize} cursor-pointer ${btnBgColor}
       font-medium ${btnBorderColor} 
        rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
          focus:outline-none`}
  {...rest}  >
      <span className={`${btnTextColor}`}>{children ? children : "Button"}</span>{" "}
    </button>
  );
};

export default Button;
