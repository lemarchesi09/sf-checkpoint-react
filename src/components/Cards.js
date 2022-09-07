import { useEffect, useState } from "react";
import "./cards.css"


export const Cards = () => {

  const [cards, setCards] = useState([])
  const getApi = async() =>{
    try{
      const response = await fetch("https://rickandmortyapi.com/api/character/")
      const data = await response.json();
      console.log(data);
    setCards(data.results)
    }catch (error){
      console.log(error);
    }
  } 
  console.log('cards', cards);
  useEffect(()=>{
    getApi()
  }, [])
  

    return (
    
        
        <div className="container">
          {cards.map((user) => {
            return(
            
                <div className="cards-body" key={user.id}>
                <img src={user.image} alt={user.name} />
                  <h1 className="title">{user.name}</h1>
                  <p>Status:<span className={user.status}>{user.status}</span></p>
                </div>
            )
          })}
          </div>

    );
  }