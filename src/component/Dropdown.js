import React,{useState,useEffect,useRef} from "react";

const Dropdown=({label,options,selected,onSelectedChange})=>{
  const [open, setOpen]=useState(false);
  const ref=useRef(); // declare a piece of state

  //only run one time because in second argument pass as empty array
  useEffect(()=>{
    const onBodyClick=(event)=>{  
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener('click',onBodyClick, { capture: true }); //click is first argument and onBodyClick as the callback to the BodyClick event Listener

    //  cleanup function
    return()=>{
      document.body.removeEventListener('click',onBodyClick,{
        capture:true,
      })  // we want to remove is the onBodyClick Function
    };

  },[]); // array as a second argument

  const renderedOptions=options.map((option)=>{

    if(option.value=== selected.value)
    {
      return null;
    }
    return (
      <div 
        key={option.value} 
        className="item"
        onClick={()=>onSelectedChange(option)}
      >
        {option.label}
      </div>
      
    );
  });
  //console.log(ref.current);
  return(
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div 
          onClick={()=>setOpen(!open)} 
          className={`ui selection dropdown ${open ? 'visible active':''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition':''}`}>
            {renderedOptions}
          </div>
        </div>
        <p style={{color:`${selected.value}`}}>{selected.label}</p>
      </div>
    </div>
  );
};

export default Dropdown;