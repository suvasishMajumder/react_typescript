import type { finalCheckBoxProp } from "./types/types"


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

