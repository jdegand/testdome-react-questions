// React is loaded and is available as React and ReactDOM
// imports should NOT be used
class ImageGallery extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      links: props.links
    }
  }
  
  remove(event){
    event.target.closest('div.image').remove();
  }
  
  
  render() {
    return (
    <div>
      {this.state.links.map((link, index) => <div key={index} class="image">
                              <img src={link} />
                                <button class="remove" onClick={event => this.remove(event)}>X</button>
                              </div>
                                )}  
    </div>
      )
  }
      
}

document.body.innerHTML = "<div id='root'> </div>";
  
const rootElement = document.getElementById("root");
const links = ["https://goo.gl/kjzfbE", "https://goo.gl/d2JncW"];
ReactDOM.render(<ImageGallery links={ links } />,
                rootElement);
document.querySelectorAll('.remove')[0].click();
console.log(rootElement.innerHTML);