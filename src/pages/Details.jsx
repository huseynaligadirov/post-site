import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import EditModal from "../components/EditModal";
import Report from "../components/Report";
import ThumbSwiper from "../components/ThumbSwiper";

function Details({ dispatch, cart, user }) {
  const [containFav, setContain] = useState("false");
  const [edit, setEdit] = useState(false);
  const { id } = useParams(window.location);
  const [photos, setPht] = useState([]);
  useEffect(() => {
    fetch(`http://elanlar.im/app/item.php?mod=getimages&item=${id}`)
      .then((photo) => photo.json())
      .then((photo) => setPht(photo));
  });
  const toCart = "Post number 1";
  const [infOBJ, setInfo] = useState({});
  const [report, setReport] = useState(false);
  useEffect(() => {
    fetch(`https://elanlar.im/app/item.php?mod=get&item=${id}`)
      .then((data) => data.json())
      .then((data) => {
        setInfo(data[0]);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("hash").length) {
      fetch(
        `https://elanlar.im/app/favorites.php?hash=${localStorage.getItem(
          "hash"
        )}&mod=list`
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.find((k) => infOBJ.id == k.elan)) {
            setContain(true);
          }
        });
    }
  }, []);

  return (
    <>
      {edit && <EditModal setEdit={setEdit} infOBJ={infOBJ} />}
      <section className="details-wrapper container">
        <div className="detail-heading">
          <h1>
            {infOBJ.title}{" "}
            {infOBJ.pack == 1 ? (
              <span>(VIP)</span>
            ) : infOBJ.pack == 2 ? (
              <span>(Premium)</span>
            ) : (
              ""
            )}
          </h1>
          <div className="operations">
            {containFav ? (
              <button
                onClick={() => {
                  fetch(
                    `https://elanlar.im/app/favorites.php?hash=${localStorage.getItem(
                      "hash"
                    )}&mod=add&id=${infOBJ.id}`
                  )
                    .then((res) => res.json())
                    .then((res) => alert(res.message));
                }}
              >
                Seçilmişlərə əlavə et
              </button>
            ) : (
              <button
                onClick={() => {
                  fetch(
                    `elanlar.im/app/favorites.php?hash=${localStorage.getItem(
                      "hash"
                    )}&mod=del&id=${infOBJ.id}`
                  )
                    .then((res) => res.json())
                    .then((res) => alert(res.message));
                }}
              >
                Seçilmişlərdən sil
              </button>
            )}
            <button onClick={() => setReport(true)}>Şikayət et</button>
            {report && <Report setReport={setReport} />}
          </div>
        </div>
        <div className="gallery-details">
          <div className="photo">
            <ThumbSwiper photos={photos} />
          </div>
          <div className="main-details">
            <h2 className="price">
              Qiymət: <span> {infOBJ.price} AZN</span>{" "}
            </h2>
            <div className="user-name">
              <h3>Elan paylaşan:</h3>
              <h3>{infOBJ.user}</h3>
              {user.number == infOBJ.user ? (
                <div className="btns-for-user">
                  <button
                    onClick={(e) => {
                      // edit
                      setEdit(true);
                    }}
                  >
                    Düzəliş et
                  </button>
                  <button
                    onClick={(e) => {
                      fetch(
                        `https://elanlar.im/app/item.php?mod=del&item=${infOBJ.id}`
                      )
                        .then((a) => a.json())
                        .then((a) => alert(a.message));
                    }}
                  >
                    Sil
                  </button>
                  <button
                    onClick={(e) => {
                      fetch(
                        `https://elanlar.im/app/item.php?mod=set-premium&item=${infOBJ.id}`
                      )
                        .then((a) => a.json())
                        .then((a) => alert(a.message));
                    }}
                  >
                    Elanı premium et
                  </button>
                  <button
                    onClick={(e) => {
                      fetch(
                        `https://elanlar.im/app/item.php?mod=set-vip&item=${infOBJ.id}`
                      )
                        .then((a) => a.json())
                        .then((a) => alert(a.message));
                    }}
                  >
                    Elanı VIP et
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
            {/* <button className="num-btn">Mobil nömrə göstər</button> */}
          </div>
        </div>
        <div className="text-info">
          <div className="characteristics">
            <h2>Detallar :</h2>
            {infOBJ.oturucu ? (
              <ul>
                <li>
                  Marka: <span>{infOBJ.marka}</span>
                </li>
                <li>
                  Model: <span>{infOBJ.model}</span>
                </li>
                <li>
                  Buraxılış ili: <span>{infOBJ.buraxilis_ili}</span>
                </li>
                <li>
                  Ban növü: <span>{infOBJ.ban_novu}</span>
                </li>
                <li>
                  Yürüş: <span>{infOBJ.km_hesab} km</span>
                </li>
                <li>
                  Mühərrik həcmi: <span>{infOBJ.muherrik} L</span>
                </li>
                <li>
                  Mühərrik gücü: <span>{infOBJ.muherrik_gucu}</span>
                </li>
                <li>
                  Ötürücü: <span>{infOBJ.oturucu}</span>
                </li>
                <li>
                  Rəng: <span>{infOBJ.reng}</span>
                </li>
                <li>
                  Sürətlər qutusu: <span>{infOBJ.suretler_qutusu}</span>
                </li>
                <li>
                  Yanacaq: <span>{infOBJ.yanacaq}</span>
                </li>
              </ul>
            ) : infOBJ.elan_tipi ? (
              <ul>
                <li>
                  Elan tipi: <span>{infOBJ.elan_tipi}</span>
                </li>
                <li>
                  Əmlak tipi: <span>{infOBJ.emlak_tipi}</span>
                </li>
                <li>
                  Otaq sayı: <span>{infOBJ.otaq_sayi}</span>
                </li>
                <li>
                  Sahə: <span>{infOBJ.sahe} kv.m</span>
                </li>
              </ul>
            ) : infOBJ.fealiyyet ? (
              <ul>
                <li>
                  Fəaliyyət: <span>{infOBJ.fealiyyet}</span>
                </li>
                <li>
                  Təhsil: <span>{infOBJ.tehsil}</span>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
          <div className="texts">
            <div className="location">
              <h2>Yer</h2>
              <p>{infOBJ.location}</p>
            </div>
            <div className="description">
              <h2>Açıqlama</h2>
              <p>{infOBJ.info}</p>
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
            {[1, 1, 1, 1, 1].map((x) => (
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
const t = (a) => a;
export default connect(t)(Details);
