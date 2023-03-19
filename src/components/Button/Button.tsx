import React from "react";
import "./Button.scss";

export interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: "small" | "medium" | "large";
    label: string;
    onClick?: () => void;
}

const Button = ({
    primary = false,
    size = "medium",
    backgroundColor,
    label,
    ...props
}: ButtonProps) => {
    const mode = primary ? "tc-button--primary" : "tc-button--secondary";
    return (
        <button
            type="button"
            className={["tc-button", `tc-button--${size}`, mode].join(" ")}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};

export default Button;
