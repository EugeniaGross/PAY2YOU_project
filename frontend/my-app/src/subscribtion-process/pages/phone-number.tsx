import React from "react";
import PageStyles from "../styles/global-styles.module.scss";
import { ReactComponent as PhoneNumberIcon } from "../images/phone-number-icon.svg";
import Info from "../components/Info/Info";
import Navigation from "../../global-components/Navigation/Navigation";
import CustomButton from "../../global-components/Button/Button";
import variables from "../../styles-utils/variables.scss";
import PhoneInput from "../components/PhoneInput/PhoneInput";
import { Link } from 'react-router-dom';

function PhoneNumberSubscription() {
  return (
    <div className={PageStyles.page_wrapper}>
      <Navigation color="primary" pageName={""} />
      <div className={PageStyles.contentWrapper}>
        <Info
          icon={<PhoneNumberIcon />}
          title="Оформим подписку на указанный телефон"
          description="Если подписка уже есть — привяжем телефон для получения кешбэка"
        />
        <PhoneInput />
      </div>
      <Link to="/subscription/confirm">
      <CustomButton
        buttonName={"Далее"}
        backgroundColor={variables.mainButtonColor}
        color={variables.mainTextFontColor}
      />
      </Link>
    </div>
  );
}

export default PhoneNumberSubscription;
