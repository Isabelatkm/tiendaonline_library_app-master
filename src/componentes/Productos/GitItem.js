import React, {useContext} from "react";
import { DataContext } from "../../context/DataProvider";

const GitItem = ({title, image, category, price, id}) => {
    
  const value = useContext(DataContext);
  return (
    <div key={id} className="producto">
    
        <div className="producto__img" >
        <img src={image} alt={title} />
        </div>
    
        <div className="producto__footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price">${price} </p>
        </div>
        
      
      </div>
 

  )
}
