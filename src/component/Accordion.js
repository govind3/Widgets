import React, {useState} from 'react'

const Accordion =({items})=>{
    const [activeIndex,setActiveIndex]=useState("");

    // helper function
    const onTitleClick=(index)=>{
      console.log('Title click', index)
      setActiveIndex(index);
    }

  const renderedItems=items.map((item,index)=>{
    const active = index === activeIndex ? 'active' : '';
    
    return(
        <React.Fragment key={item.title}>
            <div 
              className={`title ${active}`}
              onClick={()=>onTitleClick(index)}
            >
            <i className="dropdown icon"></i>
            {item.title}
            </div>
            <div className={`content ${active}`}>
              <p>{item.content}</p> 
            </div>
        </React.Fragment>
    );
  });
  return( 
    <div className='ui styled accordion'>
      {renderedItems}
      {/*<h2>{activeIndex}</h2>   reference a piece of state */}
    </div>
  );
}

export default Accordion;