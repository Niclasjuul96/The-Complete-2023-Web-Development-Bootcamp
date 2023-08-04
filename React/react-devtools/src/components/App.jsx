import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/311927217_10221860168869617_6585994529891716779_n.jpg?_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1j58QMpAeLAAX_g-fx0&_nc_ht=scontent-cph2-1.xx&oh=00_AfAE1zmLcvdTNOZd1zx0TOcdf40vORmE8Tu9jrSOh-0T_g&oe=64D1420E" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
