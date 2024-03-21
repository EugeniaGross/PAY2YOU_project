import React from "react";
import PageStyles from "../styles/global-styles.module.scss";
import { ReactComponent as PhoneNumberIcon } from "../images/phone-number-icon.svg";
import Info from "../components/Info/Info";
import Navigation from "../../global-components/Navigation/Navigation";
import CustomButton from "../../global-components/Button/Button";
import variables from "../../styles-utils/variables.scss";
import PhoneInput from "../components/PhoneInput/PhoneInput";
import { Link } from "react-router-dom";
import {paymentData} from "../../utils/billing-data"

function PaymentConfirm() {
    const paymentItem = paymentData[0];

  return (
    <div className={PageStyles.page_wrapper}>
      <Navigation color="primary" pageName={"Оформление"} />
      <div className={PageStyles.contentWrapper}>
        <div>
          <img src={"иконка логотипа"} alt={"название сервиса"} />
          <h1 className={PageStyles.serviceName}>{"название сервиса"}</h1>
          <span>
            <p className={PageStyles.priceInfo}>{"1 ₽"}</p>
            <p>за месяц</p>
          </span>
          <p className={PageStyles.planInfo}>первый месяц за 1 ₽, дальше — 399 ₽⁠/⁠месяц</p>
        </div>
        <div>
            <div>
            <p className={PageStyles.inputTitle}>Номер телефона</p>
           <p>+ 7 (900) 999-99-99</p>
           </div>

           <div className={PageStyles.billingWrapper}>
           <span><img src={paymentItem.iconWithBackground} alt="Счет списания" /></span>
            <div>
                <p className={PageStyles.inputTitle}>Счёт списания</p>
                <p>{paymentItem.title}</p>
            </div>
           </div>

        </div>
      </div>
      <Link to="/subscription/warning">
        <CustomButton
          buttonName={"К оплате 1 ₽"}
          backgroundColor={variables.mainButtonColor}
          color={variables.mainTextFontColor}
        />
      </Link>
      <div>
        <p className={PageStyles.policy}>Нажимая кнопку «К оплате» вы соглашаетесь  с политикой обработки персональных данных  и с правилами партнера</p>
      </div>
    </div>
  );
}

export default PaymentConfirm;
