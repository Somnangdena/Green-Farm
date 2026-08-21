import v1 from "../assets/images/tomatoes.jpg";
import v2 from "../assets/images/carrots.jpg";
import v3 from "../assets/images/lettuce.jpg";
import v4 from "../assets/images/mangos.jpg";
import v5 from "../assets/images/eggs.jpg";
import v6 from "../assets/images/strawberrys.jpg";

export const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Products",
    link: "/product",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];

export const listProducts = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    price: 2.5,
    image: v1,
    category: "Vegetables",
    description: "Fresh and naturally grown tomatoes directly from out farm",
  },
  {
    id: 2,
    name: "Organic Carrots",
    price: 3,
    image: v2,
    category: "Vegetables",
    description: "Fresh organic carrots grown with care using farming",
  },
  {
    id: 3,
    name: "Fresh Lettuce",
    price: 1.5,
    image: v3,
    category: "Vegetables",
    description:
      "Crispy and fresh lettuce harvested from out farm every morning",
  },
  {
    id: 4,
    name: "Fresh Mango",
    price: 4,
    image: v4,
    category: "Fruits",
    description: "Sweet and delicious mangoes carefully growns on our farm",
  },
  {
    id: 5,
    name: "Farm Eggs",
    price: 4.5,
    image: v5,
    category: "eggs",
    description: "Fresh Farm eggs collected daily from healthy chickens",
  },
  {
    id: 6,
    name: "Fresh Stawberries",
    price: 6,
    image: v6,
    category: "Fruits",
    description: "Fresh, Sweet strawberries grown naturally on our farm",
  },
];
