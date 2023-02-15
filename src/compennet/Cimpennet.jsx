import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Cimpennet() {
    // const[deta,setData]=useState([])


useEffect(() => {

  // Get
// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then(Response=>console.log(Response))

//Post

console.log("request has been sent!");
setLoading(true);
axios.get("https://reqres.in/api/users?delay=3")
.then(response => {
  // Successfull response
  setLoading(false);
  console.log("response received");
});






}, []);


  return (
    <div>

app




    </div>
  )
}

export default Cimpennet