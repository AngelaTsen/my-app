import "./Blog.scss";

import { useEffect, useState } from "react";
import { BlogItem } from "./BlogItem/BlogItem";

export const Blog = () => {
 const [blogData, setBlogData] = useState([]);

  useEffect (()=> {
   fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => setBlogData(data))
   },[]);

  return <div className="content">
  <div className="blog">
{blogData.map(item => <BlogItem key={item.id} title = {item.title} body={item.title}></BlogItem>)} 

    
    </div>
    <div className="news">
      <div className="news__div"></div>
      <div className="news__div"></div>
      <div className="news__div"></div>
    </div>
  </div>
};



// export const Blog = () => {
//   return (
//     <div>
//       <div className="blog">
//         <div className="blog__div">works blog</div>
//         <div className="blog__div">,mjnhbv</div>
//         <div className="blog__div"></div>
//         <div className="blog__div"></div> 
//       </div>
//       <div className="news">
//         <div className="news__div"></div>
//         <div className="news__div"></div>
//         <div className="news__div"></div>
//       </div>
//     </div>
//   );
// };
