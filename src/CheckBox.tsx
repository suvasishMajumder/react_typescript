

interface CheckBoxPropType{

    children?: React.ReactNode;
    htmlFor?:string;
    labelValue:string;
    className:string;
   

}


interface finalCheckBoxProp extends CheckBoxPropType{

     style: React.CSSProperties;

}


export const CheckBox = ({children,style, htmlFor , labelValue, className, ...rest}:finalCheckBoxProp) => {
  return (
    <div className="flex space-x-3.5">
    <label htmlFor={htmlFor}>{labelValue ? labelValue : 'No Label Given'}</label>
    <input type="checkbox"
    className={className}
    style={style}
   {...rest} />
    </div>
  )
}

