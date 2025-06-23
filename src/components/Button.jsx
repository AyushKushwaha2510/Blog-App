import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-[#E0AA5281]",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg transition duration-200 hover:cursor-pointer hover:bg-[#E0AA52] ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}