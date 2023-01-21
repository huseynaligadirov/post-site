import React from "react";
import { Link } from "react-router-dom";

function Login({ setLogin }) {
  return (
    <section className="login">
      <form action="">
        <h2>Telefon nömrəniz ilə daxil olun:</h2>
        <div className="number-type">
          <div className="prefix">
            <span>+994</span>
            <select name="" id="">
              <option value="">Prefiks</option>
              <option value="">10</option>
              <option value="">50</option>
              <option value="">51</option>
              <option value="">55</option>
              <option value="">60</option>
              <option value="">70</option>
              <option value="">77</option>
              <option value="">99</option>
            </select>
          </div>

          <div className="number-input">
            <input type="number" placeholder="xxx-xx-xx" />
            <label htmlFor="">Telefon nömrəbizi daxil edin:</label>
          </div>
        </div>

        <div className="btn">
          <Link>OTP kodunu göndər</Link>
        </div>
        <button onClick={() => setLogin(false)} id="close-btn">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </form>
    </section>
  );
}

export default Login;
