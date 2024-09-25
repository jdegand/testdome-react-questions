import React from 'react';
import { createRoot } from 'react-dom/client';

const ImageGallery = ({ links }) => {
  const remove = (event) => {
    event.target.parentElement.remove();
  }

  return (
    <div>
      {links.map((link, index) => <div key={index} className="image">
        <img src={link} />
        <button className="remove" onClick={event => remove(event)}>X</button>
      </div>
      )}
    </div>
  );
}

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
const links = ["https://bit.ly/3lmYVna", "https://bit.ly/3flyaMj"];
const root = createRoot(rootElement);
root.render(<ImageGallery links={links} />);

setTimeout(() => {
  document.querySelectorAll('.remove')[0]?.click();
  setTimeout(() => {
    console.log(rootElement?.innerHTML);
  });
});