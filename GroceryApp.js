// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const Product = props => {
    const plus = () => {
      // Call props.onVote to increase the vote count for this product
        props.onVote(1, props.index);
    }; 
    const minus = () => {
      // Call props.onVote to decrease the vote count for this product
        props.onVote(-1, props.index);
    };
    return (
      <li>
        <span>{props.product.name}</span> - <span>votes: {props.product.votes}</span>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </li>
    );
  };
  
  const GroceryApp = (props) => {
    const [products, setProducts] = React.useState(props.products);
    
    const onVote = (dir, index) => {
      const nextProducts = [...products];
      const product = products[index];
      nextProducts[index] = { ...product, votes: product.votes + dir };
      setProducts(nextProducts);
    };
    
    return (
      <ul>
        {products
          .sort((a, b) => b.votes - a.votes)
          .map((product,index) => (
            <Product key={index} product={product} index={index} onVote={onVote} />
          ))
        }
      </ul>
    );
  }
  
  document.body.innerHTML = "<div id='root'></div>";
  
  ReactDOM.render(<GroceryApp
    products={[
      { name: "Oranges", votes: 0 },
      { name: "Bananas", votes: 0 }
    ]}
  />, document.getElementById('root'));
  
  let plusButton = document.querySelector("ul > li > button");
  if(plusButton) {
    plusButton.click();
  }
  console.log(document.getElementById('root').outerHTML)

/* ---------------------------------50%---------------------------------- */

// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const Product = props => {
  const plus = () => {
    // Call props.onVote to increase the vote count for this product
      props.onVote("+", props.index);
  }; 
  const minus = () => {
    // Call props.onVote to decrease the vote count for this product
      props.onVote("-", props.index);
  };
  return (
    <li>
      <span>{props.product.name}</span> - <span>votes: {props.product.votes}</span>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </li>
  );
};

const GroceryApp = (props) => {
  const [products, setProducts] = React.useState(props.products);
  
  const onVote = (dir, index) => {
     const updatedProducts = [...products];
    if(dir==='+'){   
    updatedProducts[index].votes = updatedProducts[index].votes+1;
      setProducts(updatedProducts)
    }
    if(dir==='-') {
      updatedProducts[index].votes = updatedProducts[index].votes-1;
       setProducts(updatedProducts)
  };
 }
  
  return (
    <ul>
      {products
        .sort((a, b) => b.votes - a.votes)
        .map((product,index) => (
          <Product key={index} product={product} index={index} onVote={onVote} />
        ))
      }
    </ul>
  );
}

document.body.innerHTML = "<div id='root'></div>";

ReactDOM.render(<GroceryApp
  products={[
    { name: "Oranges", votes: 0 },
    { name: "Bananas", votes: 0 }
  ]}
/>, document.getElementById('root'));

let plusButton = document.querySelector("ul > li > button");
if(plusButton) {
  plusButton.click();
}
console.log(document.getElementById('root').outerHTML)

/* ------------------100 %---------------------- */

const Product = props => {
  const {name,votes} = props.product
      
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
  var [products, setProducts] = React.useState(props.products);
      
  const onVote = (dir, index) => {
    const clonedProducts = Array.from(products);
    const product = products[index];
    clonedProducts[index] = { ...product, votes: product.votes + dir }; //have to clone all properties otherwise they will be lost if you update one field
    setProducts(clonedProducts);
  };
      
  return (
    <ul>
      {products.map((product,index) => (
         <Product key={index} product={product} index={index} onVote={onVote} />  //product can be named anything -- best practices??
      ))}
    </ul>
  );
}

document.body.innerHTML = "<div id='root'></div>";

ReactDOM.render(
  <GroceryApp
    products={[
      { name: "Oranges", votes: 0 },
      { name: "Bananas", votes: 0 }
    ]}
  />, document.getElementById('root')
);


let plusButton = document.querySelector("ul > li > button");
if (plusButton) {
  plusButton.click();
}
console.log(document.getElementById('root').outerHTML)