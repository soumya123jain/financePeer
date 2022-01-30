import axios from "axios";
import { useEffect, useState } from "react";
import { storage } from "./fire";
import Showdata from "./Showdata";
import { database } from "./fire";
import firebase from "firebase";

function Fileupload() {
    
  
  const [progress, setProgress] = useState(0);
  const [post, setPost] = useState([]);
  const[baseUrl,setBaseUrl]=useState('');
  const[toggle,setToggle]=useState(false);
  const [info , setInfo] = useState([]);

  let fileReader;
    
  const handleFileRead = (e) => {
    const content =[JSON.parse(fileReader.result)];
    console.log(content);
    console.log(typeof(content));
    setPost(content[0])
    console.log((content[0][0]).title);
       content[0].map(writeUserData);

       function writeUserData(item) {
        var postListRef = firebase.database().ref('posts');
  var newPostRef = postListRef.push();
  newPostRef.set({    
      item  });
      };
 
    
      
  };


  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    console.log(file);
    handleFileChosen(file);
    uploadFiles(file);
  };
 



  const uploadFiles = (file) => {
    //
    const uploadTask = storage.ref(`files/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        storage
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url)          
                   
          })          
            
          });
      }
    
      const handleFileChosen = (file) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
      };
  


// function view(baseurl){
//        console.log(baseUrl);
//        axios.get(baseUrl).then((response) => {
//         setPost(response.data);

//       })
//     }   
     
            


  return (
    <div className="Fileupload">
      <form onSubmit={formHandler}>
        <input type="file" className="input" />
        <button type="submit">Upload</button>
      </form>
      <hr />
     
      <p>Uploading done {progress}%</p><br></br>
      <span style={{color:'red',fontSize:'15px'}}>{progress===100?"click here to view the data":"Waiting"
          }</span>
          {progress===100 && <button style={{marginBottom:'10px' ,marginLeft:'5px'}}onClick={()=>setToggle(true)}>View data</button>}
          {toggle && <Showdata data={post}/>}
    </div>
  );
}

export default Fileupload;