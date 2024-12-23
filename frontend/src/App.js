import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  // const [name, setname] = useState("");
  // const [content, setcontent] = useState("");
  // const [image, setimage] = useState("");
  // // const [uname, setuname] = useState("");
  // // const [ucontent, setucontent] = useState("");
  // // const [uimage, setuimage] = useState("");
  // const [Blogs, setblogs] = useState();
  // const [Update, setUpdate] = useState(false)


    async function GetBlogs() {
      try {
        const Blogs = await axios.get("http://localhost:8000/blogs");
        console.log(Blogs.data);

        // setblogs(Blogs.data);
      } catch (error) {
        console.error(error.message);
      }
    }
 
 
    let p1 = new Promise.all([GetBlogs(),GetBlogs(),GetBlogs()])

    console.log(p1)

    let [p11 , p2 , p3 ]  = new Promise.all([GetBlogs(),GetBlogs(),GetBlogs()])

    console.log(p11)
    console.log(p2)
    console.log(p3)

    let promis = new Promise ((resolve,reject)=>{
      function GetBlogs() {
        axios.get("http://localhost:8000/blogs")
        .then(response => {
          console.log(response.data);
          resolve(response.data);
        })
        .catch(error => {
          console.error(error.message);
          reject(error);
        });
      }
      GetBlogs();
    });
    
    promis.then(data => {
      console.log(data);
    }).catch(error => {
      console.error(error);
    });

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
