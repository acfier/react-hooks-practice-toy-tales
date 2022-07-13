import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDeleteToy, handleUpdateToy}) {
  const toyCards = toys.map((toy) => (
    <ToyCard 
      key={toy.id}
      toy={toy}
      handleDeleteToy={handleDeleteToy}
      handleUpdateToy={handleUpdateToy}
    />  
  ))

  return (
    <div id="toy-collection">
     {toyCards}
    </div>
  );
}

export default ToyContainer;
