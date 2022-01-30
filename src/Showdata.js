import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import firebase from 'firebase';

const Showdata=(data)=> {
   
    // var starCountRef = firebase.database().ref('posts/' );
    // starCountRef.on('value', (snapshot) => {
    //            const dbdata=(snapshot.val());
    //   console.log(dbdata);
    //   console.log(typeof(dbdata));
    //   console.log(data);
      
    
    // });
    // console.log(data.data);}

    // firebase.database().ref('posta').startAt(searchBoxInput).orderByChild('title')
    // .on('child_added', function (snapshot) {
    // console.log("All Data Search2:", snapshot.val());
// })

    return(
        <div style={{overflow:"auto", height:'600px'}}>
   <table>
    <thead>
   <tr style={{padding:'10px'}}><th>UserId</th><th>Title</th><th>Content</th></tr>
   </thead>
  <tbody>
      {data.data.map((data)=>(
           <tr key={data.id}>
           <td>{data.userId}</td><td>{data.title}</td><td>{data.body}</td>
         </tr>
      ))
      }
 
  </tbody>  
</table>
</div>
    )    }
    
   

export default Showdata;
