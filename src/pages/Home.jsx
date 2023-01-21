import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MediaUpload from "../components/MediaUpload";

function Home() {
  const [postList, setPosts] = useState([])
  const [defaultImg, setDefault] = useState(
    "https://turbo.azstatic.com/uploads/f460x343/2022%2F08%2F19%2F12%2F18%2F26%2Fe93f5739-6139-496f-afbf-1a9160a01a7c%2F41393_wCg5yPP0i14jHCd97jfshw.jpg"
  );
  let images = [
    "https://turbo.azstatic.com/uploads/f460x343/2022%2F08%2F19%2F12%2F18%2F26%2Fe93f5739-6139-496f-afbf-1a9160a01a7c%2F41393_wCg5yPP0i14jHCd97jfshw.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4vOrKiZOV-3oVsU3U0oH6tTsZr8CH9pFnI82YOU9&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHdN6mkJ1sp2dti0ruGsQV1aiqe40JFqigHYTdkCWY&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnWRx8uh_9xj9WGZVfPeLKLrbFSE74GXHghLhmKmJH&s",
  ];
  const posts = [1, 2, 3, 4, 5];

  useEffect (()=> {
    fetch('https://elanlar.im/app/item.php?mod=all-list').then(a => a.json()).then(a=> setPosts(a))
  })
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
            <img src="https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_6.png" alt="" />
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
            <img src="https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_7.png" alt="" />
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
            <img src="https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_6.png" alt="" />
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
            <img src="https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_7.png" alt="" />
          </div>
        </div>
      </div>
      <section className="post-wrapper">
        <div className="container">
          <div className="heading">
            <h2>Elanlar</h2>
          </div>
          <div className="post-list">
            {postList.map((x) => (
              <Link to="/details" key={x} class="product">
                {/* <div
                  style={{
                    background: `url(${defaultImg})`,
                    backgroundSize: "cover",
                  }}
                  onMouseLeave={(e) => setDefault(images[0])}
                  className="photos"
                >
                  <div
                    onMouseEnter={(e) => setDefault(images[e.target.className])}
                    className="0"
                  ></div>
                  <div
                    onMouseEnter={(e) => setDefault(images[e.target.className])}
                    className="1"
                  ></div>
                  <div
                    onMouseEnter={(e) => setDefault(images[e.target.className])}
                    className="2"
                  ></div>
                  <div
                    onMouseEnter={(e) => setDefault(images[e.target.className])}
                    className="3"
                  ></div>
                </div> */}
                <div className="photo">
                  <img style={{width: '100%', height: '100%'}} src={`https://elanlar.im/uploads/item/${x.photo}`} alt="" />
                </div>
                <div class="texts">
                  <span>
                    <b>{x.price}$</b>
                  </span>
                  <h2>{x.title}</h2>
                  <p>{x.info.slice(0,12)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="post-wrapper">
        <div className="container">
          <div className="heading">
            <h2>Elanlar</h2>
          </div>
          <div className="post-list">
            {posts.map((x) => (
              <Link to="/details" key={x} class="product">
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
      <section className="post-wrapper">
        <div className="container">
          <div className="heading">
            <h2>Elanlar</h2>
          </div>
          <div className="post-list">
            {posts.map((x) => (
              <Link to="/details" key={x} class="product">
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
      <section className="post-wrapper">
        <div className="container">
          <div className="heading">
            <h2>Elanlar</h2>
          </div>
          <div className="post-list">
            {posts.map((x) => (
              <Link to="/details" key={x} class="product">
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

export default Home;
