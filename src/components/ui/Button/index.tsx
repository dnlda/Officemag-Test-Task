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
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  isDisabled = false,
  variant = "standard",
  title,
  onClick,
  className = "",
  icon,
}) => {
  const baseClass = "btn";
  const variantClass = `btn--${variant}`;
  const disabledClass = isDisabled ? "btn--disabled" : "";
  const withIconClass = icon ? "btn--with-icon" : "";

  const buttonClass =
    `${baseClass} ${variantClass} ${disabledClass} ${withIconClass} ${className}`.trim();

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      aria-label={title}
      className={buttonClass}
    >
      {icon}
      {title}
    </button>
  );
};

export default Button;
