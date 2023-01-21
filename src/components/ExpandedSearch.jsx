import React, { useEffect, useState } from "react";

function ExpandedSearch({ setSearch }) {
  const [searchFor, setSearchFor] = useState("");
  const [city, SetCity] = useState([]); // location
  const [metro, SetMetro] = useState([]); // location
  const [district, SetDistrict] = useState([]); // location
  const [place, SetPlace] = useState([]); // location
  const [categories, setCategories] = useState([]);
  const [selectedCatId, setSelectedCatId] = useState(0);
  const [subs, setSubs] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    //ApiS
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
  console.log(subs);

  useEffect(() => {
    if (selectedCatId != 0) {
      fetch(
        `https://elanlar.im/app/category.php?mod=listsubcategory&&catID=${selectedCatId}`
      )
        .then((a) => a.json())
        .then((a) => setSubs(a));
    }
  }, [selectedCatId]);
  console.log(selectedCatId);
  return (
    <div className="expanded-search-wraper">
      <form action="">
        <button id="close-btn" onClick={() => setSearch(false)}>
          X
        </button>
        <div className="row">
          <select
            onChange={(e) => {
              setSearchFor(e.target.value);
              setSelectedCatId(e.target.value);
            }}
            name="category"
            id=""
          >
            <option>Kateqoriya seçin</option>
            {categories.map((x) => (
              <option value={x.id} key={x.id}>
                {x.name}
              </option>
            ))}
          </select>
          <select name="category" id="">
            <option value="0">Alt kateqoriya</option>
            {subs.length ? subs.map((x) => <option>{x.name}</option>) : ""}
          </select>
        </div>

        <div className="prices">
          <input name="min" placeholder="Minimum qiymət" type="text" />
          <input name="max" placeholder="Maksimum qiymət" type="text" />
        </div>

        <select onChange={(e) => setSelected(e.target.value)} name="" id="">
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
        {searchFor == "1" ? (
          <div className="expanded-div">
            <select>
              <option value="">Marka</option>
              <option value="">Marka</option>
              <option value="">Marka</option>
              <option value="">Marka</option>
            </select>
            <select>
              <option value="">Rəng</option>
              <option value="">Rəng</option>
              <option value="">Rəng</option>
              <option value="">Rəng</option>
            </select>
            <select>
              <option value="">Sürətlər qutusu</option>
              <option value="">Sürətlər qutusu</option>
              <option value="">Sürətlər qutusu</option>
              <option value="">Sürətlər qutusu</option>
            </select>

            <input name="volume" type="text" placeholder="Mühərrikin həcmi" />
            <input name="distance" type="text" placeholder="Yürüş" />
          </div>
        ) : searchFor == "2" ? (
          <div className="expanded-div">
            <select name="" id="">
              <option value="">Elanın tipi</option>
              <option value="">Kirayə</option>
              <option value="">Satış</option>
            </select>
            <select name="" id="">
              <option value="">Əmlak tipi</option>
              <option value="">Satış</option>
              <option value="">Kirayə</option>
            </select>

            <input type="text" placeholder="Sahə (m2)" />
            <input type="text" placeholder="Ərazi" />
            <input type="text" placeholder="Otaq sayı" />
          </div>
        ) : searchFor == "3" ? (
          <div className="expanded-div">
            <select name="" id="">
              <option value="">Fəaliyyət sahəsi</option>
              <option value="">Fəaliyyət sahəsi</option>
              <option value="">Fəaliyyət sahəsi</option>
              <option value="">Fəaliyyət sahəsi</option>
            </select>
            <select name="" id="">
              <option value="">Təhsil</option>
              <option value="">Təhsil</option>
              <option value="">Təhsil</option>
              <option value="">Təhsil</option>
            </select>
          </div>
        ) : (
          ""
        )}
        <button>AXTAR</button>
      </form>
    </div>
  );
}

export default ExpandedSearch;
