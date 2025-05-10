import React, { useState } from "react";

// Import components needed for page
import HomeHeader from "../components/home-header";
import BackFooter from "../components/back-footer";
import CheckoutItem from "../components/checkoutItem";

// Import and name images used for the page
// remember to include the path in the 'from'
import book1 from "../assets/hunger.jpg";
import book2 from "../assets/mockingjay.jpg";
import book3 from "../assets/neuromancer.avif";
import book4 from "../assets/endersgame.avif";

// Import the css file (stylesheet)
import "./checkout.css";
import HomeHeaderLoggedin from "../components/home-header-loggedin";

// rename function to the page name
function Checkout() {
  const allItems = [
    {
      id: 1,
      title: "Hunger Games",
      image: book1,
      descriptions: [
        "Book Location: Young Adult Fiction - Floor 3 YA COL",
        "Author: Collins, Suzanne ASIN: 0439023521",
        "Publisher: Scholastic Press; Reprint edition (Jan. 1 2010)",
        "Language: English",
        "Paperback: 384 pages",
        "ISBN-10: 9780439023528",
        "ISBN-13: 978-0439023528",
      ],
    },
    {
      id: 2,
      title: "Mockingjay",
      image: book2,
      descriptions: [
        "Book Location: Young Adult Fiction - Floor 3 YA COL",
        "Author: Collins, Suzanne ASIN : 0439023521",
        "Publisher: Scholastic Press; Reprint edition (Jan. 1 2010)",
        "Language : English",
        "Paperback : 384 pages",
        "ISBN-10 : 0441007465",
        "ISBN-13 : 978-0441007462",
      ],
    },
    {
      id: 3,
      title: "Neuromancer",
      image: book3,
      descriptions: [
        "Book Location: Young Adult Fiction - Floor 3 YA COL",
        "Author: Gibson, William ASIN : 0143111604",
        "Publisher: Ace; Reprint edition (July. 1 2000)",
        "Language : English",
        "Paperback : 336 pages",
        "ISBN-10 : 9780439023528",
        "ISBN-13 : 978-0439023528",
      ],
    },
    {
      id: 4,
      title: "Ender's Game",
      image: book4,
      descriptions: [
        "Book Location: Young Adult Fiction - Floor 3 YA COL",
        "Author: Orson, Scott Card ASIN : 0765374811",
        "Publisher: Tor Teen; Media; tie-in edition (Mar. 14 2014)",
        "Language : English",
        "Paperback : 384 pages",
        "ISBN-10 : 0765378485",
        "ISBN-13 : 978-0765378484",
      ],
    },
  ];

  const [checkoutItems, setCheckoutItems] = useState([]);
  const [nextItemIndex, setNextItemIndex] = useState(0);

  const addNextItem = () => {
    if (nextItemIndex < allItems.length) {
      setCheckoutItems([...checkoutItems, allItems[nextItemIndex]]);
      setNextItemIndex(nextItemIndex + 1);
    }
  };

  const removeItem = (id) => {
    setCheckoutItems(checkoutItems.filter((item) => item.id !== id));
  };

  return (
    // ALter div below to make your html file
    <div>
      <div className="section-checkout">
        <div className = "CheckoutHeader">
          <HomeHeaderLoggedin />
        </div>
        <div class="checkout-item-box">
          <div class="checkout-container">
            <div class="checkout-container-title">
              <p class="checkout-description">Scan an Item...</p>
            </div>
            <div class="checkout-container-box">
              {checkoutItems.map((item) => (
                <CheckoutItem
                  key={item.id}
                  book={item}
                  onRemove={() => removeItem(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
        <div class="checkout-finish">
          <button class="finish-checkout-bottom" onClick={addNextItem}>
            Add Next Item
          </button>
          <button class="finish-checkout-bottom">
            <a href="/finishCheckout">Finish Checkout</a>
          </button>
        </div>
      </div>
      <BackFooter />
    </div>
  );
}

// export your function, remember to keep name consistent
export default Checkout;
