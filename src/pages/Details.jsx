import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Report from "../components/Report";

function Details({dispatch, cart}) {
  const toCart = "Post number 1"
  const [report, setReport] = useState(false)
  console.log(cart)
  return (
    <>
      <section className="details-wrapper container">
   
        <div className="detail-heading">
          <h1>Lorem ipsum dolor sit.</h1>
          <div className="operations">
            <button
            onClick={()=>{
              dispatch({
                type: "ADD_TO_CART",
                payload: toCart
              })
            }}
            >Seçilmişlərə əlavə et</button>
            <button onClick={()=> setReport(true)}>Şikayət et</button>
            {report && <Report setReport={setReport}/>}
          </div>
        </div>
        <div className="gallery-details">
          <div className="photo">
            <img
              src="https://turbo.azstatic.com/uploads/f460x343/2022%2F08%2F19%2F12%2F18%2F26%2Fe93f5739-6139-496f-afbf-1a9160a01a7c%2F41393_wCg5yPP0i14jHCd97jfshw.jpg"
              alt=""
            />
          </div>
          <div className="main-details">
            <h2 className="price">45.000 AZN</h2>
            <div className="user-name">
              <h3>Elan paylaşan:</h3>
              <h3>Huseynali Gadirov</h3>
            </div>
            <button className="num-btn">Mobil nömrə göstər</button>
          </div>
        </div>
        <div className="text-info">
          <div className="characteristics">
            <h2>Xüsusiyyətlər:</h2>
            <ul>
              <li>
                Param: <span>value</span>
              </li>
              <li>
                Param: <span>value</span>
              </li>
              <li>
                Param: <span>value</span>
              </li>
              <li>
                Param: <span>value</span>
              </li>
              <li>
                Param: <span>value</span>
              </li>
              <li>
                Param: <span>value</span>
              </li>
              <li>
                Param: <span>value</span>
              </li>
              <li>
                Param: <span>value</span>
              </li>
              <li>
                Param: <span>value</span>
              </li>
              <li>
                Param: <span>value</span>
              </li>
              <li>
                Param: <span>value</span>
              </li>
              <li>
                Param: <span>value</span>
              </li>
              <li>
                Param: <span>value</span>
              </li>
              <li>
                Param: <span>value</span>
              </li>
              <li>
                Param: <span>value</span>
              </li>
            </ul>
          </div>
          <div className="texts">
            <div className="location">
              <h2>Yer</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="description">
              <h2>Açıqlama</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                minus est veniam voluptate harum error quo sunt cumque, adipisci
                doloribus, impedit vitae nostrum iste expedita nulla aliquam
                illum sapiente ipsam ducimus! Perspiciatis sapiente dolore nulla
                similique dolorum, eius, voluptas sint, minus incidunt
                reprehenderit delectus?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="post-wrapper">
        <div className="container">
          <div className="heading">
            <h2>Bənzər Elanlar</h2>
          </div>
          <div className="post-list">
            {[1,1,1,1,1].map((x) => (
              <Link to="/details" class="product">
                <img
                  src="https://turbo.azstatic.com/uploads/f460x343/2022%2F08%2F19%2F12%2F18%2F26%2Fe93f5739-6139-496f-afbf-1a9160a01a7c%2F41393_wCg5yPP0i14jHCd97jfshw.jpg"
                  alt=""
                />
                <div class="texts">
                  <span>
                    <b>45.000$</b>
                  </span>
                  <h2>Range rover RR Sport</h2>
                  <p>2016, 2.6L, 23300KM</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
const t = a => a
export default connect(t) (Details);
