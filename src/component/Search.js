import React, { useEffect, useState } from "react";

const Search=()=>{
  const [term, setTerm]=useState("");
  
  console.log('I RUN EVERY RENDER');

  useEffect(()=>{
    console.log('i run at initial or data change');
  },[term]);  //second arugment

  return(
    <div>
      <div className='ui form'>
          <div className='feild'> 
              <label className='ui black label'>Enter Search Term</label>
              <input 
                className='input' value={term} onChange={(e)=>setTerm(e.target.value)} />
          </div>
      </div>
    </div>
  );
};

export default Search;