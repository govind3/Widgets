import React from 'react'
import Accordion from './component/Accordion'
import Search from './component/Search';

const items=[
  {
    title:'what is react?',
    content:'React is front end javascript framework.',
  },
  {
    title:'Why use ract?',
    content:'React is a favorite js library for developer',
  },
  {
    title:'how do you use react?',
    content:'you use react by creating components',
  },
];

const App=()=>{
  return (
    <div className='ui container'>
      <br />
     {/*<Accordion items={items} />   items as a props */}
      {/* <h2>Widgets App</h2> */}
      <Search />
    </div>
  );
};

export default App;