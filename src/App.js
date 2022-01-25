import React,{useState} from 'react'
import Accordion from './component/Accordion'
import Search from './component/Search';
import Dropdown from './component/Dropdown';
import Translate from './component/Translate';
import Route from './component/Route';
import Header from './component/Header'
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

const options=[
  {
    label:'The color Red',
    value: 'red',
  },
  {
    label:'The color Violet',
    value: 'violet',
  },
  {
    label:'The shade of Blue',
    value:'blue',
  },
];



const App=()=>{
  const [selected, setSelected]=useState(options[0]);
  return (
    <div className='ui container' style={{marginTop:'15px'}}>
      <Header />
      <Route path="/">
        <Accordion items={items}/>
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
          label={'Select a Color'}
          selected={selected}
          onSelectedChange={setSelected}
          options={options} 
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;