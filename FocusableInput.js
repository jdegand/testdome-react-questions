// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const FocusableInput = (props) => {
    // Write your code here
    const shouldFocus = React.useRef(null);
    
    React.useEffect(()=> {
      shouldFocus.current.focus();
    }, [])
    
    return <input ref={shouldFocus} />;
  };
  
  document.body.innerHTML = "<div id='root' />";
  ReactDOM.render(<FocusableInput shouldFocus={true} />, document.getElementById("root"));
  setTimeout(() => console.log(document.getElementById("root").innerHTML));