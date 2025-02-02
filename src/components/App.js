import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const menuItems = [
  { id: 1, title: "buttermilk pancakes", category: "breakfast", price: 15.99, img: "./images/item-1.jpeg", desc: "Delicious pancakes with buttermilk." },
  { id: 2, title: "diner double", category: "lunch", price: 13.99, img: "./images/item-2.jpeg", desc: "A classic double burger with fries." },
  { id: 3, title: "godzilla milkshake", category: "shakes", price: 6.99, img: "./images/item-3.jpeg", desc: "A massive milkshake for the sweet tooth." },
  { id: 4, title: "country delight", category: "breakfast", price: 20.99, img: "./images/item-4.jpeg", desc: "A hearty country-style breakfast." },
  { id: 5, title: "egg attack", category: "lunch", price: 22.99, img: "./images/item-5.jpeg", desc: "Egg lovers' paradise." },
  { id: 6, title: "oreo dream", category: "shakes", price: 18.99, img: "./images/item-6.jpeg", desc: "Oreo shake loaded with flavors." },
  { id: 7, title: "bacon overflow", category: "breakfast", price: 8.99, img: "./images/item-7.jpeg", desc: "Bacon-lovers' dream breakfast." },
  { id: 8, title: "american classic", category: "lunch", price: 12.99, img: "./images/item-8.jpeg", desc: "Classic American meal." },
  { id: 9, title: "quarantine buddy", category: "shakes", price: 16.99, img: "./images/item-9.jpeg", desc: "A shake to get you through tough times." },
];

const categories = ["all", "breakfast", "lunch", "shakes"];

function App() {
  const [filteredItems, setFilteredItems] = useState(menuItems);

  const filterItems = (category) => {
    if (category === "all") {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter((item) => item.category === category));
    }
  };

  return (
    <div id="main">
      <h1>Menu</h1>
      <div>
        {categories.map((category, index) => (
          <button
            key={index}
            id={`filter-btn-${index}`}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div>
        {filteredItems.map((item) => (
          <div key={item.id} data-test-id={`menu-item-${item.category}`}>
            <h2>{item.title}</h2>
            <img src={item.img} alt={item.title} width={150} />
            <p>{item.desc}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// Jest test case
export const testComponentRender = () => {
  document.body.innerHTML = '<div id="root"></div>';
  ReactDOM.render(<App />, document.getElementById("root"));
  return document.getElementById("main") !== null;
};
