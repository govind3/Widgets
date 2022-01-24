import React from 'react'
// import Accordion from './component/Accordion'
import Search from './component/Search';
// import Dropdown from './component/Dropdown';
// import Translate from './component/Translate';

// const items=[
//   {
//     title:'what is react?',
//     content:'React is front end javascript framework.',
//   },
//   {
//     title:'Why use ract?',
//     content:'React is a favorite js library for developer',
//   },
//   {
//     title:'how do you use react?',
//     content:'you use react by creating components',
//   },
// ];

// const options=[
//   {
//     label:'The color Red',
//     value: 'red',
//   },
//   {
//     label:'The color Violet',
//     value: 'violet',
//   },
//   {
//     label:'The shade of Blue',
//     value:'blue',
//   },
// ];

const App=()=>{
  // const [selected, setSelected]=useState(options[0]);
  // const [showDropdown,setShowDropdown]=useState(true);
  return (
    <div className='ui container'>
      <br />
     {/*<Accordion items={items} />   items as a props */}
      <h2>Widgets App</h2>
      <Search />
      {/* <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ?
        <Dropdown 
          label={'Select a Color'}
          selected={selected}
          onSelectedChange={setSelected}
          options={options} 
        />:null
      } */}
      <br />
      {/* <Translate /> */}
    </div>
  );
};

export default App;