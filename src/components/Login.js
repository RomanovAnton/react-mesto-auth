import logo from "../images/logo.svg";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <>
    <header className="header">
      <img className="header__logo" src={logo} alt="лого место" />
      <p className="header__nav-link">Регистрация</p>
    </header> 

      <form className="entry-form" style={{minWidth: "880px"}}>
        <h2 className="entry-form__title">Вход</h2>
        <input
          type="email"
          className="entry-form__input"
          placeholder="Email"
          autoComplete="off"
        ></input>
        <span className="entry-form__input-error"></span>
        <input
          type="password"
          className="entry-form__input"
          placeholder="Пароль"
          autoComplete="off"
        ></input>
        <span className="entry-form__input-error"></span>
        <button type="submit" className="entry-form__button">
          Войти
        </button>
      </form>
      </>

  );
}

export default Login;
