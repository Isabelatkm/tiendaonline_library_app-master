import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import '../../styles/ProductoItem.css';

export const ProductoItem = ({title, image, author, published, isbn10, isbn13, summary, reviews, publisher, id}) => {

  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;



  return (
    
    <div key={id} className="producto">
      <Link to={`/producto/${id}`}>
      <div className="producto__img" >
        <img src={image} alt={title} />
      </div>
      </Link>
      <div className="producto__footer">
        <h1>{title}</h1>
        <h1>{author}</h1>
        <p>{summary}</p>
        <p className="price">{published} </p>
      </div>
      <div className="bottom">
        <button onClick={() => addCarrito(id)} className="btn">Añadir al carrito</button>
        <div>
        <Link to={`/producto/${id}`} className="btn">Vista</Link>
        </div>
      </div>
    </div>
  );
};
