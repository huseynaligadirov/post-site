import React, { useEffect, useState } from "react";

function MediaUpload() {
  const [images, setImages] = useState([]);
  const [links, setlinks] = useState([]);
  useEffect(()=>{
    [...document.querySelectorAll(".view img")].map((x)=>{
      setlinks([...links, x.getAttribute("src")])
    })
  },[images])

console.log(links);
  return (
    <section className="media-uploader">
      <form action="">
      <label htmlFor="btn-upload">
        Şəkil yüklə
        <input
          id="btn-upload"
          multiple
          hidden
          type="file"
          onChange={(e) => {
            setImages([...images, ...Array.from(e.target.files)]);
            e.target.value= null
          }}
        />
      </label>
      <button>Göndər</button>
      </form>

      {images.length ? (
        <div className="view">
          {images.map((x) => (
            <div draggable={true} className="images-view">
              <div onClick={()=>{setImages([...images.filter(deleted => x != deleted)])}} className="delete">
                Sil <i class="fa-regular fa-trash-can"></i>
              </div>
              <img src={URL.createObjectURL(x)} />

        
            </div>
          ))}
        </div>
      ) : (
        ""
      )}

    </section>
  );
}

export default MediaUpload;
