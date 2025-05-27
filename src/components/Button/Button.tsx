import React from "react";
import "./Button.scss";

export interface ButtonProps {
    /**
     * Is the button a primary action button?
     */
    primary?: boolean;
    /**
     * What color should the button background be?
     */
    backgroundColor?: string;
    /**
     * The size of the button.
     */
    size?: "small" | "medium" | "large";
    /**
     * What text should the button show?
     */
    label: string;
    /**
     * Click handler for the button
     * @returns void
     */
    onClick?: () => void;
}

/**
 *
 *  Button Component for Teckcraft with all variants.
 */
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
