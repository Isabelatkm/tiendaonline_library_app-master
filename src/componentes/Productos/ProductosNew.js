import React, {useContext} from "react";
import { DataContext } from "../../context/DataProvider";

export const ProductosNew = ({title, image, author, summary, id}) => {

  const value = useContext(DataContext);
  



  return (
    
    <div key={id} className="producto">
      
      <div className="producto__img" >
        <img src={image} alt={title} />
      </div>
     
      <div className="producto__footer">
      <p className="price">{title}</p>
        <h1>{author}</h1>
        <p>{summary} </p>
      </div>
     
    </div>
  );
};
