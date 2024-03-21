import React from "react";
import Button from "@mui/material/Button";

interface CustomButtonProps {
  buttonName?: string;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
}

function CustomButton({
  buttonName,
  backgroundColor,
  color,
  borderColor,
}: CustomButtonProps) {

  const buttonCustomStyle = {
    backgroundColor,
    color,
    borderColor,
    border: borderColor ? `2px solid ${borderColor}` : undefined,
  };

  return (
    <Button
      style={buttonCustomStyle}
      variant="contained"
      disableElevation
    >
      {buttonName}
    </Button>
  );
}

export default CustomButton;
