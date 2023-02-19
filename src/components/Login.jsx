import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login({ setLogin }) {
  const [logContent, setLogContent] = useState("number");
  const [number, setNumber] = useState({
    code: "994",
  });
  const [numberREQ, SetNumREQ] = useState("");
  const [error, setError] = useState(false);
  const errText = "Nömrə düzgün daxil edilməyib!!!";
  console.log(number);
  const [otp, setOTP] = useState("");

  const handleOTP = () => {
    if (number.digits && number.prefix) {
      fetch(`http://elanlar.im/app/login/login.php?number=${numberREQ}`, {
        method: "POST",
      })
        .then((a) => a.json())
        .then((a) => console.log(a));
      setError(false);
      setLogContent("otp-content");
    } else {
      setError(true);
    }
  };

  const checkOTP = () => {
    fetch(`http://elanlar.im/app/checkOPT.php?number=${numberREQ}&code=${otp}`)
      .then((a) => a.json())
      .then((a) => {
        console.log(a);
        if(a.error) {
          alert(a.message)
        }
        if (!a.error) {
          localStorage.setItem('hash', a.hash)
          setTimeout(()=>{
            window.location.reload()
          },200)
        }
      });
  };
  useEffect(() => {
    SetNumREQ(number.code + number.prefix + number.digits);
    console.log(numberREQ);
  }, [number]);

  return (
    <section className="login">
      {logContent == "number" ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <div
            onClick={() => {
              setLogin(false);
              setLogContent("number");
            }}
            className="close-btn"
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
          <h3>Telefon nömrəsi daxil edin:</h3>
          <div className="number">
            <div>
              <span>+994</span>
              <select
                onChange={(e) =>
                  setNumber({ ...number, [e.target.name]: e.target.value })
                }
                name="prefix"
                id=""
              >
                <option value="0">Prefiks</option>
                <option value="10">10</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="51">51</option>
                <option value="77">77</option>
                <option value="70">70</option>
                <option value="55">55</option>
                <option value="99">99</option>
              </select>
            </div>
            <input
              onChange={(e) => {
                setNumber({ ...number, [e.target.name]: e.target.value });
              }}
              name="digits"
              type="text"
            />
          </div>

          <button onClick={() => handleOTP()}>OTP kodu göndər</button>
          {error ? <p>{errText}</p> : ""}
        </form>
      ) : logContent == "otp-content" ? (
        <form className="otp-form" onSubmit={(e) => e.preventDefault()}>
          <div
            onClick={() => {
              setLogin(false);
              setLogContent("number");
            }}
            className="close-btn"
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
          <h3>OTP kodu daxil edin:</h3>
          <input onChange={(e) => setOTP(e.target.value)} type="number" />
          <button onClick={() => checkOTP()}>Təsdiq et</button>
        </form>
      ) : (
        ""
      )}
    </section>
  );
}

export default Login;
