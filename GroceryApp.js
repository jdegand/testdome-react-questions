import React from 'react';
import { createRoot } from 'react-dom/client';

const Product = props => {
  
  const { name, votes } = props.product;
  
  const plus = () => {
    // Call props.onVote to increase the vote count for this product
    props.onVote(1,props.index);
  };
  const minus = () => {
    // Call props.onVote to decrease the vote count for this product
    props.onVote(-1,props.index);
  };
  return (
    <li>
      <span>{name}</span> - <span>votes: {votes}</span>
      <button onClick={plus}>+</button>{" "}
      <button onClick={minus}>-</button>
    </li>
  );
};

const GroceryApp = (props) => {
 let [products, setProducts] = React.useState(props.products);
  
 const onVote = (dir, index) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index] = { ...updatedProducts[index], votes: updatedProducts[index].votes + dir };
      return updatedProducts;
    });
  };
  

  return (
     <ul>
      {products.map((product,index) => (
         <Product key={index} product={product} index={index} onVote={onVote} />
      ))}
    </ul>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));
root.render(<GroceryApp
  products={[
    { name: "Oranges", votes: 0 },
    { name: "Bananas", votes: 0 }
  ]}
/>);

setTimeout(() => {
  let plusButton = document.querySelector("ul > li > button");
  if(plusButton) {
    plusButton.click();
  }
  setTimeout(() => {
    console.log(document.getElementById('root').outerHTML);
  });
});
