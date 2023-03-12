import React from "react";

interface ButtonProps {
  label: string;
  className: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      data-testid="button-container"
    >
      {label}
    </button>
  );
};

export default Button;
