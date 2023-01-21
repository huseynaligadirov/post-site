import React, { useEffect, useRef, useState } from "react";
import MediaUpload from "../components/MediaUpload";
import $ from "jquery";

function PlaceAdd() {
  const [photo, setPhoto] = useState(null)
  const [city, SetCity] = useState([]);
  const [selected, setSelected] = useState("");
  const [metro, SetMetro] = useState([]);
  const [district, SetDistrict] = useState("");
  const [place, SetPlace] = useState("");
  const [categories, setCategories] = useState([]);
  const [content, setContent] = useState(null);
  const [selectedCatId, setSelectedCatId] = useState("");
  const [subs, setSubs] = useState([]);
  const [add, setAdd] = useState({
    user: "+994993132405",
    category: selectedCatId,
  });

  // form data
  var formdata = new FormData();
  formdata.append("photo", photo);
  formdata.append("user", "0513959197");
  formdata.append("category", "5");
  formdata.append("subcategory", "5");
  formdata.append("kredit", "0");
  formdata.append("vasiteci", "0");
  formdata.append("location", "5");
  formdata.append("price", "250000");
  formdata.append("info", "Kreditle munkundur");
  formdata.append("title", "Ev satilir");

  console.log(formdata);

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
    fetch(
      `https://elanlar.im/app/category.php?mod=listsubcategory&&catID=${selectedCatId}`
    )
      .then((a) => a.json())
      .then((a) => setSubs(a));
  }, [selectedCatId]);

  //
  const handleSubmit = () => {
    fetch("https://elanlar.im/app/add-item.php?mod=add", {
      method: "POST",
      body: formdata,
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  return (
    <section className="place-add">
      <div className="container">
        <div className="heading">
          <h2>Elan yerləşdirmək üçün paket seçin</h2>
        </div>
        <div className="payment-packs">
          <div className="pack">
            <h3>Standart</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit lorem
              ipsum Lorem, ipsum dolor. Illum aspernatur molestiae nesciunt.
            </p>
          </div>
          <div className="pack">
            <h3>Standart</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              aspernatur molestiae nesciunt.
            </p>
          </div>
          <div className="pack">
            <h3>Standart</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              aspernatur molestiae nesciunt.
            </p>
          </div>
        </div>
        <div className="text-fields">
          <form className="post-text-fields">
            <div className="row">
              <select
                name="category"
                onChange={(e) => {
                  setContent(e.target.value);
                  setAdd({ ...add, [e.target.name]: e.target.value });
                  setSelectedCatId(e.target.value);
                  console.log(e.target.value);
                  formdata.append(e.target.name, e.target.value);
                }}
                id=""
              >
                <option value="0">Kateqoriya</option>
                {categories.map((x) => (
                  <option value={x.id}>{x.name}</option>
                ))}
              </select>
              <select
                onChange={(e) =>
                  setAdd({ ...add, [e.target.name]: e.target.value })
                }
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
                  onChange={(e) =>
                    setAdd({ ...add, [e.target.name]: e.target.value })
                  }
                  type="text"
                  name="title"
                  placeholder="Elanın adı..."
                />
              )}
            </div>
            <div className="row">
              <div className="check-boxes">
                <label>
                  Kredit
                  <input
                    onChange={(e) =>
                      setAdd({ ...add, [e.target.name]: e.target.checked })
                    }
                    name="kredit"
                    type="checkbox"
                  />
                </label>
                <label>
                  Barter
                  <input
                    name="barter"
                    // onChange={(e) =>
                    //   setAdd({ ...add, [e.target.name]: e.target.checked })
                    // }
                    type="checkbox"
                  />
                </label>
                <label>
                  Vasitəçi
                  <input
                    name="vasiteci"
                    onChange={(e) =>
                      setAdd({ ...add, [e.target.name]: e.target.checked })
                    }
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
                }}
                id=""
              >
                {Object.keys(city).map((index) => (
                  <option key={index} value={index}>
                    {city[index]}
                  </option>
                ))}
              </select>
              {selected == 7 ? (
                <select>
                  <option value="0">Ərazi seçin</option>
                  <optgroup label="Metrolar">
                    {metro.map((x) => (
                      <option>{x}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Rayonlar">
                    {Object.keys(district).map((x) => (
                      <option key={x} value={x}>
                        {district[x]}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Məntəqələr">
                    {Object.keys(place).map((x) => (
                      <option key={x} value={x}>
                        {place[x]}
                      </option>
                    ))}
                  </optgroup>
                </select>
              ) : (
                ""
              )}
              <input
                onChange={(e) =>
                  setAdd({ ...add, [e.target.name]: e.target.value })
                }
                type="text"
                name="price"
                placeholder="Qiymət daxil edin..."
              />
            </div>
            <textarea
              onChange={(e) =>
                setAdd({ ...add, [e.target.name]: e.target.value })
              }
              name="info"
              maxLength={3000}
              id=""
              cols="30"
              rows="10"
            ></textarea>
            {content == 1 ? (
              <div className="expanded-post">
                <form action="">
                  <select
                    onChange={(e) =>
                      setAdd({ ...add, [e.target.name]: e.target.value })
                    }
                    name=""
                    id=""
                  >
                    <option value="">Marka</option>
                  </select>
                  <select
                    onChange={(e) =>
                      setAdd({ ...add, [e.target.name]: e.target.value })
                    }
                    name=""
                    id=""
                  >
                    <option value="">Model</option>
                  </select>
                  <select
                    onChange={(e) =>
                      setAdd({ ...add, [e.target.name]: e.target.value })
                    }
                    name=""
                    id=""
                  >
                    <option value="">Rəng</option>
                  </select>
                  <input type="number" placeholder="Mühərrik həcmi..." />
                  <select
                    onChange={(e) =>
                      setAdd({ ...add, [e.target.name]: e.target.value })
                    }
                    name=""
                    id=""
                  >
                    <option value="">Yanacaq</option>
                  </select>
                  <select
                    onChange={(e) =>
                      setAdd({ ...add, [e.target.name]: e.target.value })
                    }
                    name=""
                    id=""
                  >
                    <option value="">Ban növü</option>
                  </select>
                  <input
                    onChange={(e) =>
                      setAdd({ ...add, [e.target.name]: e.target.value })
                    }
                    type="number"
                    maxLength={4}
                    placeholder="Buraxılış ili..."
                  />
                  <input
                    onChange={(e) =>
                      setAdd({ ...add, [e.target.name]: e.target.value })
                    }
                    type="number"
                    placeholder="Yürüş..."
                  />
                  <select
                    onChange={(e) =>
                      setAdd({ ...add, [e.target.name]: e.target.value })
                    }
                    name=""
                    id=""
                  >
                    <option value="">Sürətlər qutusu...</option>
                  </select>
                  <select
                    onChange={(e) =>
                      setAdd({ ...add, [e.target.name]: e.target.value })
                    }
                    name=""
                    id=""
                  >
                    <option value="">Ötürücü...</option>
                  </select>
                  <select
                    onChange={(e) =>
                      setAdd({ ...add, [e.target.name]: e.target.value })
                    }
                    name=""
                    id=""
                  >
                    <option value="">Mühərrikin gücü...</option>
                  </select>
                </form>
              </div>
            ) : content == 2 ? (
              <div className="expanded-post">
                <form action="">
                  <select
                    onChange={(e) =>
                      setAdd({ ...add, [e.target.name]: e.target.value })
                    }
                  >
                    <option value="">Elan tipi</option>
                  </select>
                  <select
                    onChange={(e) =>
                      setAdd({ ...add, [e.target.name]: e.target.value })
                    }
                  >
                    <option value="">Əmlak tipi</option>
                  </select>
                  <input
                    onChange={(e) =>
                      setAdd({ ...add, [e.target.name]: e.target.value })
                    }
                    type="number"
                    name=""
                    placeholder="Sahə..."
                    id=""
                  />
                  <input
                    onChange={(e) =>
                      setAdd({ ...add, [e.target.name]: e.target.value })
                    }
                    type="number"
                    name=""
                    placeholder="Otaq sayı..."
                    id=""
                  />
                  <input
                    onChange={(e) =>
                      setAdd({ ...add, [e.target.name]: e.target.value })
                    }
                    type="number"
                    name=""
                    placeholder="Yerləşdiyi ərazi..."
                    id=""
                  />
                </form>
              </div>
            ) : content == 3 ? (
              <div className="expanded-post">
                <form action="" id="work-post">
                  <div className="row">
                    <input
                      onChange={(e) =>
                        setAdd({ ...add, [e.target.name]: e.target.value })
                      }
                      type="text"
                      placeholder="Fəaliyyət sahəsi..."
                      name=""
                      id=""
                    />
                    <input
                      type="text"
                      onChange={(e) =>
                        setAdd({ ...add, [e.target.name]: e.target.value })
                      }
                      placeholder="Təhsil..."
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
          <input
            name="photo"
            onChange={(e) => {
              setPhoto(e.target.files[0])
            }}
            type={"file"}
          ></input>
          <button id="submit-btn" onClick={() => handleSubmit()}>Yerləşdir</button>
        </div>
      </div>
    </section>
  );
}

export default PlaceAdd;
