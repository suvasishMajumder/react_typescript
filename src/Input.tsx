import React from "react";

type inputProp = {
  inputType: "text" | "number" | "email" | "password" | "search";
  placeholder: string;
  label: string;
  style: React.CSSProperties;
  id: string;
  isDisabled: boolean;
  className: string;
  isRequired: boolean;
};

const Input = (props: inputProp) => {
  const {
    inputType,
    placeholder,
    label,
    style,
    id,
    isDisabled,
    className,
    isRequired,
  } = props;

  return (
    <div className="flex space-x-6 font-bold">
      <label htmlFor={props.label}>{label}</label>
      <input
        style={style}
        className={className}
        type={inputType}
        placeholder={placeholder}
        id={id}
        disabled={isDisabled}
        required={isRequired}
      />
    </div>
  );
};

export default Input;
