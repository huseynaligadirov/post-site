import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "../components/Item";
import MediaUpload from "../components/MediaUpload";

function Home() {
  const [postList, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://elanlar.im/app/item.php?mod=list&type=1")
      .then((a) => a.json())
      .then((a) => setPosts(a));
  });

  return (
    <>
      <div className="category-gallery container">
        <div className="row1">
          <div className="categ1">
            <img
              src="https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_1.png"
              alt=""
            />
          </div>
          <div className="categ1">
            <img
              src="https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_4.png"
              alt=""
            />
          </div>
          <div className="categ1">
            <img
              src="https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_6.png"
              alt=""
            />
          </div>
          <div className="categ1">
            <img
              src="https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_2.png"
              alt=""
            />
          </div>
          <div className="categ1">
            <img
              src="https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_8.png"
              alt=""
            />
          </div>
          <div className="categ1">
            <img
              src="https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_7.png"
              alt=""
            />
          </div>
        </div>
        <div className="row2">
          <div className="categ1">
            <img
              src="https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_1.png"
              alt=""
            />
          </div>
          <div className="categ1">
            <img
              src="https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_4.png"
              alt=""
            />
          </div>
          <div className="categ1">
            <img
              src="https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_6.png"
              alt=""
            />
          </div>
          <div className="categ1">
            <img
              src="https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_2.png"
              alt=""
            />
          </div>
          <div className="categ1">
            <img
              src="https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_114.png"
              alt=""
            />
          </div>
          <div className="categ1">
            <img
              src="https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_8.png"
              alt=""
            />
          </div>
          <div className="categ1">
            <img
              src="https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_7.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <section className="post-wrapper">
        <div className="container">
          <div className="heading">
            <h2>Elanlar</h2>
          </div>
          <div className="post-list">
            {postList.length
              ? postList.map((x) => <Item x={x} />)
              : "Hal hazırda aktiv elan yoxdur"}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
