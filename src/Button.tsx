import React from "react";

type ButtonProps = {
  fontSize: string;
  btnTextColor: string;
  btnBgColor: string;
  btnBorderColor: string;
  btnText: string;
    onclickbtn:() => void;
};

const Button = ({
  btnBgColor,
  btnBorderColor,
  btnTextColor,
  btnText,
  fontSize,
onclickbtn
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onclickbtn}
      className={`text-white border-[5px] ${fontSize} cursor-pointer ${btnBgColor}
       font-medium ${btnBorderColor} 
        rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
          focus:outline-none`}
    >
      <span className={`${btnTextColor}`}>{btnText ? btnText : "Button"}</span>{" "}
    </button>
  );
};

export default Button;
