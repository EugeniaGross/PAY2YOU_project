import React, { ReactNode } from "react";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import CustomButton from "../Button/Button";
import variables from "../../styles-utils/variables.scss"

function SlideTransition(props: any) {
  return <Slide {...props} direction="up" />;
}

interface ModalProps {
  open: boolean;
  onClose: () => void;
  message?: string | ReactNode;
  description?: string;
  title?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  buttonBorderColor?: string;
}


const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  message,
  title,
  showButton,
  buttonText,
  buttonBackgroundColor,
  buttonTextColor,
  buttonBorderColor,
  description
}) => {
  const actionContent = showButton ? (
    <CustomButton
      buttonName={buttonText}
      backgroundColor={buttonBackgroundColor}
      color={buttonTextColor}
      borderColor={buttonBorderColor}
    />
  ) : null;

  console.log(buttonBackgroundColor, buttonTextColor, buttonBorderColor);


  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      onClose={onClose}
      TransitionComponent={SlideTransition}
      message={
        <React.Fragment>
          <h2 style={{color: `${variables.mainTextFontColor}`}}>{title}</h2>
          <p style={{color: `${variables.additionalTextColor}`}}>{description}</p>
          <p style={{color: `${variables.descriptionTextColor}`}}>{message}</p>
          
        </React.Fragment>
      }
      action={actionContent}
    />
  );
};

export default Modal;
