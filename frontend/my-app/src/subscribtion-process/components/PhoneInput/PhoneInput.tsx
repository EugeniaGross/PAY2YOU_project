import React from 'react';
import InputMask from 'react-input-mask';
// import './CustomInput.css'; // assuming you have a separate CSS file

function CustomInput() {
  return (
    <InputMask
      mask="+7 999 999-99-99"
      maskChar=" "
      defaultValue="+7"
      disabled={false}
      alwaysShowMask={true}
    >
      {(inputProps: any) => (
        <input
          {...inputProps}
          className="custom-input"
          placeholder="+7"
        />
      )}
    </InputMask>
  );
}

export default CustomInput;
