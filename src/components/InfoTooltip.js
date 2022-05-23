import popupIcon from "../images/Close_Icon.svg";
import popupSucsess from "../images/sucsess.svg";
import popupError from "../images/error.svg";

function InfoTooltip(props) {
  return (
    <div className={`popup ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container popup__container_size330 ">
        <img
          style={{ margin: "60px 0 32px" }}
          src={props.resStatus == "succsess" ? popupSucsess : popupError}
          alt="Успех"
        ></img>
        <h2
          style={{ width: "358px", textAlign: "center", margin: "0" }}
          className="popup__title"
        >
          {props.resStatus == "succsess"
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте еще раз"}{" "}
        </h2>
        <button className="popup__button-close" type="button">
          <img
            className="popup__icon"
            src={popupIcon}
            alt="кнопка закрыть"
            onClick={props.onClose}
          />
        </button>
      </div>
    </div>
  );
}

export default InfoTooltip;
