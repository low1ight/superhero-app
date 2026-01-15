import type {ButtonHTMLAttributes} from "react";

type Variant = "primary" | "danger";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
};

const base =
    `inline-flex 
    items-center 
    justify-center 
    rounded-lg 
    px-3 
    py-2 
    text-sm 
    font-medium 
    transition 
    focus:outline-none 
    focus:ring-2 
    focus:ring-black/20`;

const variants: Record<Variant, string> = {
    primary: "bg-black text-white hover:bg-black/90",
    danger: "bg-red-600 text-white hover:bg-red-700",
};

function Button({variant = "primary", className = "", ...props}: ButtonProps) {


    return (
        <button
            className={`${base} ${variants[variant]} ${className}`}
            {...props}
        />
    );
}


export default Button;