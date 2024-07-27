import React from 'react';
import { createRoot } from 'react-dom/client';

const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

const TodoList = ({ items, onListClick, onItemClick }) => {
  const handleItemClick = (item, event) => {
    if (item.done) {
      event.stopPropagation();
    } else {
      onItemClick(item,event); 
    }
  };

  return (
    <ul onClick={onListClick}>
      {items.map((item, index) => 
        <TodoItem item={item} key={index} onClick={(event) => handleItemClick(item, event)}/>)}
    </ul>
  );
}

const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];

const App = (props) => <TodoList
  items={props.items}
  onListClick={(event) => console.log("List clicked!")}
  onItemClick={(item, event) => { console.log(item, event) }}
/>;

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));

root.render(<App items={items}/>);
