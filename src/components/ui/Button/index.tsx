import React from "react";
import "./styles.css";

export type ButtonVariant =
  | "standard"
  | "success"
  | "error"
  | "successOutlined"
  | "errorOutlined"
  | "goTo";

export interface ButtonProps {
  variant: ButtonVariant;
  title?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  isDisabled = false,
  variant = "standard",
  title,
  onClick,
  className = "",
  children,
}) => {
  const baseClass = "btn";
  const variantClass = `btn--${variant}`;
  const disabledClass = isDisabled ? "btn--disabled" : "";

  const buttonClass =
    `${baseClass} ${variantClass} ${disabledClass} ${className}`.trim();

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      aria-label={title}
      className={buttonClass}
    >
      {children || title}
    </button>
  );
};

export default Button;
