import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Cimpennet() {
    // const[deta,setData]=useState([])
const[loading,setLoading]=useState(false)

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

{

loading ?<h1>loading..</h1>:<h1> reload </h1>

}




    </div>
  )
}

export default Cimpennet