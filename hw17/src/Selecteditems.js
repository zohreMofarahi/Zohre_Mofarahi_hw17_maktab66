import React, { useContext } from "react";
import { taskDone } from "./Allitems";

function Selecteditems() {
  const info = useContext(taskDone);


  return (
  
  <>
      {info.map(done => <li>{done}</li>)}
      
  </>
   )
}

export default Selecteditems;

// Selecteditems.prototype={
//     info
// }