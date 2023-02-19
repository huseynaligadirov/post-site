import React, { useEffect, useState } from "react";
import Item from "../components/Item";

function Favs() {
//   const [favPosts, setFavPosts] = useState([]);
//   const [favPostsN, setFavPostsN] = useState([]);

//   useEffect(() => {
//     fetch(
//       `https://elanlar.im/app/favorites.php?hash=${localStorage.getItem(
//         "hash"
//       )}&mod=list`
//     )
//       .then((res) => res.json())
//       .then((res) => {
//         setFavPostsN(res)
//       });
//   }, []);
//   useEffect  ( async ()=> {
//      if (favPostsN) {
//         favPostsN.map(post=> {
//              fetch(`https://elanlar.im/app/item.php?mod=get&item=${post.elan}`).then(response=>response.json()).then(response=> setFavPosts([...favPosts, response[0]  ]) )
//         })
//     }
//   }, [])
//   return (
//     <>
//       {" "}
//       <section className="post-wrapper">
//         <div className="container">
//           <div className="heading">
//             <h2>Elanlar</h2>
//           </div>
//           <div className="post-list">
//             {favPosts.length
//               ? favPosts.map((x) => <Item x={x} />)
//               : "Hal hazırda aktiv elan yoxdur"}
//           </div>
//         </div>
//       </section>
//     </>
//   );
 }

export default Favs;
