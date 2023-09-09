import axios from "axios";
import FCard from "../components/FCard";
import { useState } from "react";

export default function Home() {
  const style = {
    display: "flex",
    marginBottom: "10px",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const [dataApi, setDataApi] = useState([]);

  function handleCardAPI() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setDataApi([...res.data]))
      .catch((err) => err);
  }

  return (
    <>
      <button onClick={handleCardAPI}>Click To Render Cards</button>
      <div style={style}>
        {dataApi.map((x) => (
          <FCard
            title={x.title}
            description={x.description}
            price={x.price}
            rating={x.rating.rate}
            picture={x.image}
          />
        ))}
      </div>
    </>
  );
}
