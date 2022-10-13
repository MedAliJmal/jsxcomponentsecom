import React from "react";
import "./CardList.css";
import { Button, Card } from "react-bootstrap";

const products = [
  {
    id: Math.random(),
    name: "Hand Bag",
    price: "50dt",
    url: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?cs=srgb&dl=pexels-ge-yonk-1152077.jpg&fm=jpg",
  },
  {
    id: Math.random(),

    name: "Dress",
    price: "150dt",
    url: "https://www.collinsdictionary.com/images/full/dress_31690953_1000.jpg",
  },
  {
    id: Math.random(),
    name: "Shoes",
    price: "250dt",
    url: "https://target.scene7.com/is/image/Target/GUEST_e498dda2-e356-438b-b0de-f35a7d060535?wid=315&hei=315&qlt=60&fmt=webp",
  },
  {
    id: Math.random(),
    name: "Watch",
    price: "50dt",
    url: "https://i0.wp.com/diafashionstore.com/wp-content/uploads/2022/01/Untitled-design.jpg?fit=1080%2C1080&ssl=1",
  },
];

const CardList = () => {
  return (
    <div className="cardlist">
      {products.map((el) => (
        <Card key={el.id} className="card" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={el.url}
            style={{ height: "280px", width: "auto" }}
          />
          <Card.Body>
            <Card.Title>{el.name}</Card.Title>
            <Card.Text>{el.price}</Card.Text>
            <Button variant="danger">Add to cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CardList;
