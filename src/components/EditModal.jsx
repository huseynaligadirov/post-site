import React, { useEffect, useState } from "react";

function EditModal({ infOBJ, setEdit }) {
  const [savedinfo, setSave] = useState(infOBJ);
  const [cats, setCategories] = useState([]);
  const [subs, setSubs] = useState([]);
  const [city, SetCity] = useState([]);
  const getSubs = (id) => {
    fetch(
      `https://elanlar.im/app/category.php?mod=listsubcategory&&catID=${id}`
    )
      .then((a) => a.json())
      .then((a) => setSubs(a));
  };
  useEffect(() => {
    fetch("http://elanlar.im/app/citylist.php")
      .then((a) => a.json())
      .then((a) => {
        SetCity(a);
      });

    fetch("http://elanlar.im/app/category.php?mod=list")
      .then((a) => a.json())
      .then((a) => setCategories(a));

    getSubs(infOBJ.category);
  }, []);

  const handleSave = () => {
    const formdata = new FormData();
    formdata.append("user", savedinfo.user);
    formdata.append("category", savedinfo.category);
    formdata.append("subcategory", savedinfo.subcategory);
    formdata.append("kredit", savedinfo.kredit);
    formdata.append("vasiteci", savedinfo.vasiteci);
    formdata.append("location", savedinfo.location);
    formdata.append("price", savedinfo.price);
    formdata.append("info", savedinfo.info);
    formdata.append("title", savedinfo.title);

    if (savedinfo.category == 77) {
      formdata.append("marka", savedinfo.marka); //car
      formdata.append("model", savedinfo.model);
      formdata.append("reng", savedinfo.reng);
      formdata.append("muherrik", savedinfo.muherrik);
      formdata.append("yanacaq", savedinfo.yanacaq);
      formdata.append("ban_novu", savedinfo.ban_novu);
      formdata.append("buraxilis_ili", savedinfo.buraxilis_ili);
      formdata.append("km_hesab", savedinfo.km_hesab);
      formdata.append("suretler_qutusu", savedinfo.suretler_qutusu);
      formdata.append("oturucu", savedinfo.oturucu);
      formdata.append("muherrik_gucu", savedinfo.muherrik_gucu);
    } else if (savedinfo.category == 75) {
      formdata.append("fealiyyet", savedinfo.fealiyyet);
      formdata.append("tehsil", savedinfo.tehsil);
    } else if (savedinfo.category == 72) {
      formdata.append("elan_tipi", savedinfo.elan_tipi); //emlak
      formdata.append("emlak_tipi", savedinfo.emlak_tipi);
      formdata.append("otaq_sayi", savedinfo.otaq_sayi);
      formdata.append("sahe", savedinfo.sahe);
    }

    fetch(`http://elanlar.im/app/item.php?mod=edit&item=${infOBJ.id}`, {
      method: "POST",
      body: formdata,
    })
      .then((a) => a.json())
      .then((a) => {
        console.log(a);
      });

    setEdit(false);
    window.location.reload();
  };
  return (
    <section className="edit-post">
      <form action="">
        <div onClick={() => setEdit(false)} className="close-xmark">
          <i class="fa-solid fa-xmark"></i>
        </div>

        <div className="main">
          <input
            name="title"
            onChange={(e) =>
              setSave({ ...savedinfo, [e.target.name]: e.target.value })
            }
            type="text"
            value={savedinfo.title}
          />
          <select
            onChange={(e) => {
              getSubs(e.target.value);
              setSave({ ...savedinfo, [e.target.name]: e.target.value });
            }}
            value={savedinfo.category}
            name="category"
            id=""
          >
            <option value="">Kateqoriya</option>
            {cats.map((x) => (
              <option value={x.id}>{x.name}</option>
            ))}
          </select>
          <select
            value={savedinfo.subcategory}
            onChange={(e) =>
              setSave({ ...savedinfo, [e.target.name]: e.target.value })
            }
            name="subcategory"
            id=""
          >
            <option value="">Alt ateqoriya</option>
            {subs.length
              ? subs.map((x) => <option value={x.id}>{x.name}</option>)
              : ""}
          </select>
          <div className="check-boxes">
            <label htmlFor="">
              Vasitəçi
              <input value={infOBJ.vasiteci} name="vasiteci" type="checkbox" />
            </label>
            <label htmlFor="">
              Barter
              <input value={infOBJ.barter} name="barter" type="checkbox" />
            </label>
            <label htmlFor="">
              Kredit
              <input value={infOBJ.kredit} name="kredit" type="checkbox" />
            </label>
          </div>
          <select
            onChange={(e) =>
              setSave({ ...savedinfo, [e.target.name]: e.target.value })
            }
            value={savedinfo.location}
            name="location"
            id=""
          >
            <option value="">Şəhər</option>
            {Object.values(city).map((x) => (
              <option value={x}>{x}</option>
            ))}
          </select>
          <input
            onChange={(e) =>
              setSave({ ...savedinfo, [e.target.name]: e.target.value })
            }
            value={savedinfo.price}
            type="number"
            name="price"
          />

          {savedinfo.category == 77 ? (
            <>
              <input
                onChange={(e) =>
                  setSave({ ...savedinfo, [e.target.name]: e.target.value })
                }
                value={savedinfo.ban_novu}
                name="ban_novu"
                type="text"
              />
              <input
                onChange={(e) =>
                  setSave({ ...savedinfo, [e.target.name]: e.target.value })
                }
                value={savedinfo.buraxilis_ili}
                name="buraxilis_ili"
                type="text"
              />
              <input
                onChange={(e) =>
                  setSave({ ...savedinfo, [e.target.name]: e.target.value })
                }
                value={savedinfo.km_hesab}
                name="km_hesab"
                type="text"
              />
              <input
                onChange={(e) =>
                  setSave({ ...savedinfo, [e.target.name]: e.target.value })
                }
                value={savedinfo.marka}
                name="marka"
                type="text"
              />
              <input
                onChange={(e) =>
                  setSave({ ...savedinfo, [e.target.name]: e.target.value })
                }
                value={savedinfo.model}
                name="model"
                type="text"
              />
              <input
                onChange={(e) =>
                  setSave({ ...savedinfo, [e.target.name]: e.target.value })
                }
                value={savedinfo.muherrik}
                name="muherrik"
                type="text"
              />
              <input
                onChange={(e) =>
                  setSave({ ...savedinfo, [e.target.name]: e.target.value })
                }
                value={savedinfo.muherrik_gucu}
                name="muherrik_gucu"
                type="text"
              />
              <input
                onChange={(e) =>
                  setSave({ ...savedinfo, [e.target.name]: e.target.value })
                }
                value={savedinfo.oturucu}
                name="oturucu"
                type="text"
              />
              <input
                onChange={(e) =>
                  setSave({ ...savedinfo, [e.target.name]: e.target.value })
                }
                value={savedinfo.reng}
                name="reng"
                type="text"
              />
              <input
                onChange={(e) =>
                  setSave({ ...savedinfo, [e.target.name]: e.target.value })
                }
                value={savedinfo.suretler_qutusu}
                name="suretler_qutusu"
                type="text"
              />
            </>
          ) : savedinfo.category == 72 ? (
            <>
              <select
                onChange={(e) =>
                  setSave({ ...savedinfo, [e.target.name]: e.target.value })
                }
                value={savedinfo.elan_tipi}
                name="elan_tipi"
                id=""
              ></select>
              <select
                onChange={(e) =>
                  setSave({ ...savedinfo, [e.target.name]: e.target.value })
                }
                value={savedinfo.emlak_tipi}
                name="emlak_tipi"
                id=""
              ></select>
              <input
                onChange={(e) =>
                  setSave({ ...savedinfo, [e.target.name]: e.target.value })
                }
                value={savedinfo.erazi}
                name="erazi"
                type="text"
              />
              <input
                onChange={(e) =>
                  setSave({ ...savedinfo, [e.target.name]: e.target.value })
                }
                value={savedinfo.sahe}
                name="sahe"
                type="text"
              />
              <input
                onChange={(e) =>
                  setSave({ ...savedinfo, [e.target.name]: e.target.value })
                }
                value={savedinfo.otaq_sayi}
                name="otaq_sayi"
                type="text"
              />
            </>
          ) : savedinfo.category == 75 ? (
            <>
              <input value={savedinfo.fealiyyet} type="fealiyyet" />
              <input value={savedinfo.tehsil} type="tehsil" />
            </>
          ) : (
            ""
          )}
        </div>
        <div className="row">
          <textarea
            onChange={(e) =>
              setSave({ ...savedinfo, [e.target.name]: e.target.value })
            }
            value={savedinfo.info}
            name="info"
            id=""
            cols="30"
            rows="10"
          ></textarea>

          <button
            onClick={(e) => {
              e.preventDefault();
              handleSave();
            }}
          >
            Yadda saxla
          </button>
        </div>
      </form>
    </section>
  );
}

export default EditModal;
