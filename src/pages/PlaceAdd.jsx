import React, { useEffect, useRef, useState } from "react";
import MediaUpload from "../components/MediaUpload";
import $ from "jquery";
import { connect } from "react-redux";

function PlaceAdd({ user }) {
  const [city, SetCity] = useState([]);
  const [selected, setSelected] = useState("");
  const [metro, SetMetro] = useState([]);
  const [district, SetDistrict] = useState("");
  const [place, SetPlace] = useState("");
  const [categories, setCategories] = useState([]);
  const [content, setContent] = useState(null);
  const [selectedCatId, setSelectedCatId] = useState("");
  const [selectSub, setSelSub] = useState("");
  const [subs, setSubs] = useState([]);
  const [kred, setKred] = useState(false);
  const [via, setVia] = useState(false);
  const [loc, setLoc] = useState("");
  const [price, setPrice] = useState("");
  const [text, setTxt] = useState("");
  const [title, setTitle] = useState("");
  const [elantipi, setElanType] = useState(null);
  const [emlaktipi, setEmlakType] = useState(null);
  const [otaqsayi, setRoom] = useState(null);
  const [erazi, setErazi] = useState(null);
  const [fealiyyet, setFeal] = useState(null);
  const [tehsil, setTehsil] = useState(null);
  const [marka, setMarka] = useState(null);
  const [model, setModel] = useState(null);
  const [reng, setReng] = useState(null);
  const [muherrik, setMuherrik] = useState(null);
  const [yanacaq, setYanacaq] = useState(null);
  const [bannovu, setBan] = useState(null);
  const [buraxilis, setBuraxilis] = useState(null);
  const [kmhesab, setHesab] = useState(null);
  const [suret, setSuret] = useState(null);
  const [oturucu, setOtur] = useState(null);
  const [muherrikguc, setMuherrikGuc] = useState(null);
  const [sahe, setSahe] = useState(null);

  const [gallery, setGallery] = useState([]);

  const [add, setAdd] = useState({
    user: "+994993132405",
    category: selectedCatId,
  });

  // form data
  var formdata = new FormData(); //common
  console.log(user.number);
  formdata.append("user", user.number);
  formdata.append("category", selectedCatId);
  formdata.append("subcategory", selectSub);
  formdata.append("kredit", kred);
  formdata.append("vasiteci", via);
  formdata.append("location", loc);
  formdata.append("price", price);
  formdata.append("info", text);
  formdata.append("title", title);

  const transport = () => {
    formdata.append("marka", marka); //car
    formdata.append("model", model);
    formdata.append("reng", reng);
    formdata.append("muherrik", muherrik);
    formdata.append("yanacaq", yanacaq);
    formdata.append("ban_novu", bannovu);
    formdata.append("buraxilis_ili", buraxilis);
    formdata.append("km_hesab", kmhesab);
    formdata.append("suretler_qutusu", suret);
    formdata.append("oturucu", oturucu);
    formdata.append("muherrik_gucu", muherrikguc);

    if (!marka) {
      alert("Marka ad?? bo?? burax??la bilm??z");
    } else if (!model) {
      alert("Model hiss??si bo?? burax??la bilm??z ");
    } else if (!reng) {
      alert("R??ng hiss??si bo?? burax??la bilm??z ");
    } else if (!muherrik) {
      alert("M??h??rrik h??cmi qeyd edilm??lidir!");
    } else if (!yanacaq) {
      alert("Yanacaq n??v?? m??tl??q qeyd edilm??lidir!");
    } else if (!bannovu) {
      alert("Ban n??v?? m??tl??q qeyd edilm??lidir!");
    } else if (!buraxilis) {
      alert("Burax??l???? ili m??tl??q qeyd edilm??lidir!");
    } else if (!kmhesab) {
      alert("Y??r???? m??tl??q qeyd olunmal??d??r!");
    } else if (!suret) {
      alert("S??r??t  m??tl??q qeyd edilm??lidir!");
    } else if (!oturucu) {
      alert("??t??r??c?? m??tl??q qeyd edilm??lidir!");
    } else if (!muherrikguc) {
      alert("M??h??rrik g??c?? m??tl??q qeyd edilm??lidir!");
    } else {
      handleSubmit();
    }
  };

  const emlak = () => {
    formdata.append("elan_tipi", elantipi); //emlak
    formdata.append("emlak_tipi", emlaktipi);
    formdata.append("otaq_sayi", otaqsayi);
    formdata.append("sahe", sahe);

    if (!elantipi) {
      alert("Elan tipi daxil olunmay??b!");
    } else if (!emlaktipi) {
      alert("??mlak tipi daxil olunmay??b!");
    } else if (!otaqsayi) {
      alert("Otaq say?? daxil olunmay??b!");
    } else if (!sahe) {
      alert("Sah?? daxil olunmay??b!");
    } else {
      handleSubmit();
    }
  };
  const work = () => {
    formdata.append("fealiyyet", fealiyyet); //ish
    formdata.append("tehsil", tehsil);
    if (!fealiyyet) {
      alert("F??aliyy??t sah??si qeyd edilm??lidir!");
    } else if (!tehsil) {
      alert("T??hsil bar??d?? m??lumat qeyd edilm??lidir!");
    } else {
      handleSubmit();
    }
  };

  //apiS
  useEffect(() => {
    fetch("http://elanlar.im/app/citylist.php")
      .then((a) => a.json())
      .then((a) => {
        SetCity(a);
      });
    fetch("http://elanlar.im/app/citylist.php?mod=metro")
      .then((a) => a.json())
      .then((a) => SetMetro(a));
    fetch("http://elanlar.im/app/citylist.php?mod=rayon")
      .then((a) => a.json())
      .then((a) => SetDistrict(a));
    fetch("http://elanlar.im/app/citylist.php?mod=menteqe&id=6")
      .then((a) => a.json())
      .then((a) => SetPlace(a));
    fetch("http://elanlar.im/app/category.php?mod=list")
      .then((a) => a.json())
      .then((a) => setCategories(a));
  }, []);

  useEffect(() => {
    if (selectedCatId) {
      fetch(
        `https://elanlar.im/app/category.php?mod=listsubcategory&&catID=${
          selectedCatId
        }`
      )
        .then((a) => a.json())
        .then((a) => setSubs(a));
    }
  }, [selectedCatId]);

  const handleSubmit = () => {
    gallery.map((pic) => {
      formdata.append("upload[]", pic);
    });

    if (!title) {
      alert("Elan ad?? bo?? burax??la bilm??z");
    } else if (!selectedCatId) {
      alert("Kateqoriya hiss??si bo?? burax??la bilm??z");
    } else if (!selectSub) {
      alert("Alt kateqoriya hiss??si bo?? burax??la bilm??z");
    } else if (!loc) {
      alert("??nvan bo?? burax??la bilm??z");
    } else if (!text) {
      alert("??trafl?? m??lumat bo?? burax??la bilm??z");
    } else {
      fetch("https://elanlar.im/app/add-item.php?mod=add", {
        method: "POST",
        body: formdata,
      })
        .then((response) => response.json())
        .then((result) => alert(result.message))
        .catch((error) => {
          // alert(error.message);
          console.log(error.message);
        });
    }
  };
  console.log(selectedCatId)
  return (
    <section className="place-add">
      <div className="container">
        <div className="heading">
          <h2>Elan yerl????dir</h2>
        </div>
        <div className="text-fields">
          <form className="post-text-fields">
            <div className="row">
              <select
                name="category"
                onChange={(e) => {
                  setContent(e.target.textContent);
                  setAdd({ ...add, [e.target.name]: e.target.value });
                  setSelectedCatId(e.target.value);
                  console.log(e.target.value);
                }}
              >
                <option value="0">Kateqoriya</option>
                {categories.map((x) => (
                  <option value={x.id}>{x.name}</option>
                ))}
              </select>
              <select
                onChange={(e) => setSelSub(e.target.value)}
                name="subcategory"
                id=""
              >
                <option value="">Alt Kateqoriya</option>
                {subs.length
                  ? subs.map((x) => <option value={x.id}>{x.name}</option>)
                  : ""}
              </select>
              {content == 1 || content == 2 ? (
                ""
              ) : (
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  name="title"
                  placeholder="Elan??n ad??..."
                />
              )}
            </div>
            <div className="row">
              <div className="check-boxes">
                <label>
                  Kredit
                  <input
                    onChange={(e) => setKred(e.target.checked)}
                    name="kredit"
                    type="checkbox"
                  />
                </label>
                <label>
                  Barter
                  <input
                    name="barter"
                    type="checkbox"
                    // onChange={(e) =>
                    //   setAdd({ ...add, [e.target.name]: e.target.checked })
                    // }
                  />
                </label>
                <label>
                  Vasit????i
                  <input
                    name="vasiteci"
                    onChange={(e) => setVia(e.target.checked)}
                    type="checkbox"
                  />
                </label>
              </div>
              <select
                name="location"
                onChange={(e) => {
                  setAdd({ ...add, [e.target.name]: e.target.value });
                  console.log(e.target.value);
                  setSelected(e.target.value);
                  setLoc(...loc, e.target.value);
                  console.log(e.target);
                }}
                id=""
              >
                <option>????h??r se??in</option>
                {Object.keys(city).map((index) => (
                  <option key={index} value={city[index]}>
                    {city[index]}
                  </option>
                ))}
              </select>
              {loc == "Baku" ? (
                <select
                  onChange={(e) => {
                    setLoc(...loc, e.target.value);
                    console.log(loc);
                  }}
                >
                  <option value="0">??razi se??in</option>
                  <optgroup label="Metrolar">
                    {metro.map((x) => (
                      <option value={x}>{x}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Rayonlar">
                    {Object.keys(district).map((x) => (
                      <option key={x} value={district[x]}>
                        {district[x]}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="M??nt??q??l??r">
                    {Object.keys(place).map((x) => (
                      <option key={x} value={place[x]}>
                        {place[x]}
                      </option>
                    ))}
                  </optgroup>
                </select>
              ) : (
                ""
              )}
              <input
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                name="price"
                placeholder="Qiym??t daxil edin..."
              />
            </div>
            <textarea
              onChange={(e) => setTxt(e.target.value)}
              name="info"
              maxLength={3000}
              id=""
              cols="30"
              rows="10"
            ></textarea>
            {selectedCatId == 77 ? (
              <div className="expanded-post">
                <form action="">
                  <select
                    onChange={(e) => setMarka(e.target.value)}
                    name=""
                    id=""
                  >
                    <option value="">Marka</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Toyota">Toyota</option>
                  </select>
                  <select
                    onChange={(e) => setModel(e.target.value)}
                    name=""
                    id=""
                  >
                    <option value="">Model</option>
                    <option value="Pirius">Pirius</option>
                    <option value="CL 350">CL 350</option>
                    <option value="E39">E39</option>
                    <option value="F10">F10</option>
                    <option value="ML 350">ML 350</option>
                  </select>
                  <select
                    onChange={(e) => setReng(e.target.value)}
                    name=""
                    id=""
                  >
                    <option value="">R??ng</option>
                    <option value="Q??rm??z??">Q??rm??z??</option>
                    <option value="Qara">Qara</option>
                    <option value="Sar??">Sar??</option>
                    <option value="Ya????l">Ya????l</option>
                    <option value="Mavi">Mavi</option>
                  </select>
                  <input
                    onChange={(e) => {
                      setMuherrik(e.target.value);
                    }}
                    type="number"
                    placeholder="M??h??rrik h??cmi..."
                  />

                  <select
                    onChange={(e) => setYanacaq(e.target.value)}
                    name=""
                    id=""
                  >
                    <option value="">Yanacaq</option>
                    <option value="Benzin">Benzin</option>
                    <option value="Dizel">Dizel</option>
                    <option value="Qaz">Qaz</option>
                  </select>
                  <select
                    onChange={(e) => setBan(e.target.value)}
                    name=""
                    id=""
                  >
                    <option value="">Ban n??v??</option>
                    <option value="9">Avtobus</option>
                    <option value="16">Dartq??</option>
                    <option value="14">Furqon</option>
                    <option value="2">Het??bek</option>
                    <option value="11">Kabriolet</option>
                    <option value="26">Karvan</option>
                    <option value="3">Kupe</option>
                    <option value="25">Kvadrosikl</option>
                    <option value="28">Liftbek</option>
                    <option value="7">Mikroavtobus</option>
                    <option value="5">Minivan</option>
                    <option value="27">Moped</option>
                    <option value="20">Motosiklet</option>
                    <option value="21">Offroader / SUV</option>
                    <option value="6">Pikap</option>
                    <option value="22">Qolfkar</option>
                    <option value="8">Rodster</option>
                    <option value="1">Sedan</option>
                    <option value="4">Universal</option>
                    <option value="19">Van</option>
                    <option value="13">Y??k ma????n??</option>
                  </select>
                  <input
                    onChange={(e) => setBuraxilis(e.target.value)}
                    type="number"
                    maxLength={4}
                    placeholder="Burax??l???? ili..."
                  />
                  <input
                    onChange={(e) => setHesab(e.target.value)}
                    type="number"
                    placeholder="Y??r????..."
                  />
                  <select
                    onChange={(e) => setSuret(e.target.value)}
                    name=""
                    id=""
                  >
                    <option value="">S??r??tl??r qutusu...</option>
                    <option value="Mexaniki">Mexaniki</option>
                    <option value="Avtomat">Avtomat</option>
                    <option value="Robotla??d??r??lm????">Robotla??d??r??lm????</option>
                    <option value="Variator">Variator</option>
                  </select>
                  <select
                    onChange={(e) => setOtur(e.target.value)}
                    name=""
                    id=""
                  >
                    <option value="">??t??r??c??</option>
                    <option value="Arxa">Arxa</option>
                    <option value="??n">??n</option>
                    <option value="Tam">Tam</option>
                  </select>
                  <select
                    onChange={(e) => setMuherrikGuc(e.target.value)}
                    name=""
                    id=""
                  >
                    <option value="">M??h??rrikin g??c??...</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="150">150</option>
                    <option value="200">200</option>
                    <option value="250">250</option>
                    <option value="300">300</option>
                    <option value="350">350</option>
                    <option value="400">400</option>
                    <option value="450">450</option>
                    <option value="500">500</option>
                    <option value="600">600</option>
                    <option value="700">700</option>
                    <option value="800">800</option>
                    <option value="900">900</option>
                    <option value="1000">1000</option>
                    <option value="1100">1100</option>
                    <option value="1200">1200</option>
                    <option value="1300">1300</option>
                    <option value="1400">1400</option>
                    <option value="1500">1500</option>
                    <option value="1600">1600</option>
                    <option value="1700">1700</option>
                    <option value="1800">1800</option>
                    <option value="1900">1900</option>
                    <option value="2000">2000</option>
                    <option value="2100">2100</option>
                    <option value="2200">2200</option>
                    <option value="2300">2300</option>
                    <option value="2400">2400</option>
                    <option value="2500">2500</option>
                    <option value="2600">2600</option>
                    <option value="2700">2700</option>
                    <option value="2800">2800</option>
                    <option value="2900">2900</option>
                    <option value="3000">3000</option>
                    <option value="3100">3100</option>
                    <option value="3200">3200</option>
                    <option value="3300">3300</option>
                    <option value="3400">3400</option>
                    <option value="3500">3500</option>
                    <option value="3600">3600</option>
                    <option value="3700">3700</option>
                    <option value="3800">3800</option>
                    <option value="3900">3900</option>
                    <option value="4000">4000</option>
                    <option value="4100">4100</option>
                    <option value="4200">4200</option>
                    <option value="4300">4300</option>
                    <option value="4400">4400</option>
                    <option value="4500">4500</option>
                    <option value="4600">4600</option>
                    <option value="4700">4700</option>
                    <option value="4800">4800</option>
                    <option value="4900">4900</option>
                    <option value="5000">5000</option>
                    <option value="5100">5100</option>
                    <option value="5200">5200</option>
                    <option value="5300">5300</option>
                    <option value="5400">5400</option>
                    <option value="5500">5500</option>
                    <option value="5600">5600</option>
                    <option value="5700">5700</option>
                    <option value="5800">5800</option>
                    <option value="5900">5900</option>
                    <option value="6000">6000</option>
                    <option value="6100">6100</option>
                    <option value="6200">6200</option>
                    <option value="6300">6300</option>
                    <option value="6400">6400</option>
                    <option value="6500">6500</option>
                    <option value="7000">7000</option>
                    <option value="7500">7500</option>
                    <option value="8000">8000</option>
                    <option value="8500">8500</option>
                    <option value="9000">9000</option>
                    <option value="9500">9500</option>
                    <option value="10000">10000</option>
                    <option value="11000">11000</option>
                    <option value="12000">12000</option>
                    <option value="13000">13000</option>
                    <option value="14000">14000</option>
                    <option value="15000">15000</option>
                    <option value="16000">16000</option>
                  </select>
                </form>
              </div>
            ) : selectedCatId == 72 ? (
              <div className="expanded-post">
                <form action="">
                  <select onChange={(e) => setElanType(e.target.value)}>
                    <option value="">Elan tipi</option>
                    <option value="Kiray??">Kiray??</option>
                    <option value="Sat????">Sat????</option>
                  </select>
                  <select onChange={(e) => setEmlakType(e.target.value)}>
                    <option value="">??mlak tipi</option>
                    <option value="H??y??t evi">H??y??t evi</option>
                    <option value="Ba?? evi">Ba?? evi</option>
                    <option value="Villa">Villa</option>
                  </select>
                  <input
                    onChange={(e) => setSahe(e.target.value)}
                    type="number"
                    name=""
                    placeholder="Sah??..."
                    id=""
                  />
                  <input
                    onChange={(e) => setRoom(e.target.value)}
                    type="number"
                    name=""
                    placeholder="Otaq say??..."
                    id=""
                  />
                  <input
                    onChange={(e) => setErazi(e.target.value)}
                    type="number"
                    name=""
                    placeholder="Yerl????diyi ??razi..."
                    id=""
                  />
                </form>
              </div>
            ) : selectedCatId == 75 ? (
              <div className="expanded-post">
                <form action="" id="work-post">
                  <div className="row">
                    <input
                      onChange={(e) => setFeal(e.target.value)}
                      type="text"
                      placeholder="F??aliyy??t sah??si..."
                      name=""
                      id=""
                    />
                    <input
                      type="text"
                      onChange={(e) => setTehsil(e.target.value)}
                      placeholder="T??hsil..."
                      name=""
                      id=""
                    />
                  </div>
                </form>
              </div>
            ) : (
              ""
            )}
          </form>
          {/* <div className="media-upload"><MediaUpload /></div> */}
          <div className="row-bottom">
            <label id="label-up">
              ????kil ??lav?? et
              <input
                id="upfile"
                name="upload[]"
                // onChange={(e) => {
                //   Object.values(e.target.files).map((x) => {
                //     formdata.append(e.target.name, x);
                //   });
                // }}
                onChange={(e) => {
                  setGallery([...gallery, e.target.files[0]]);
                }}
                type={"file"}
              ></input>
            </label>
            {gallery.length ? (
              <div className="gallery">
                {gallery.map((img) => (
                  <div className="img-div">
                    <img src={URL.createObjectURL(img)} alt="" />
                    <button
                      id="del"
                      onClick={(e) =>
                        setGallery(gallery.filter((item) => item != img))
                      }
                    >
                      Sil {"  "} <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
            <button
              id="submit-btn"
              onClick={() => {
                if (selectedCatId == 72) {
                  emlak();
                } else if (selectedCatId == 75) {
                  work();
                } else if (selectedCatId == 77) {
                  transport();
                } else {
                  handleSubmit();
                }
              }}
            >
              Yerl????dir
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
const t = (a) => a;
export default connect(t)(PlaceAdd);
