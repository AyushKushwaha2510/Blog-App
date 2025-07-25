import React, { forwardRef, useId } from "react";


const Input = forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props

}, ref) {
    const id = useId();
    return (
        <div className="w-full flex flex-col gap-1">
            {
                label && <label htmlFor={id}
                                className="ml-1">{label}</label>
            }
            <input type={type} id={id} ref={ref} {...props} 
                   className={`${className} bg-[#f9f9fa20] h-8 w-70 py-2 px-1 border dark:border-[#e7f3ff6a] border-[#61616150] rounded-md shadow-md `}/>
        </div>
    )

})

export default Input;