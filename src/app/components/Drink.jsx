import React from 'react'

const Drink = () => {
    const drink = {
        title: "DRINK",
        items: [
            {name:"아이스 아메리카노", description:"Ice americano"},
            {name:"아메리카노", description:"Hot americano"},
            {name:"제로 콜라", description:"Cola zero"},
        ]
    }
  return (
    <div>
        <h1>{drink.title}</h1>
        <ul>
      {drink.items.map((item, index) => (
        <li key={index}>
          {item.name} {item.description}
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Drink;