import React from 'react'


const Order = () => {

  const base = {
    title: "BASE",
    items: [
      { name: "현미밥", description: "Brown rice",price:"9700원"},
      { name: "메밀면", description: "Soba noodle",price:"12000원" },
      { name: "야채만", description: "Vegetable only",price:"8000원" }
    ],
  };
  
  const mainTopping = {
    title: "MAIN TOPPING",
    items: [
      { name: "스테이크", description: "Steak" },
      { name: "비건숯불직화고기", description: "Vegan charcoal meat" },
      { name: "연어", description: "Salmon" },
      { name: "참치", description: "Tuna" },
      { name: "닭가슴살", description: "Chicken breast" }
    ]
  };

  const sauce = {
    title: "SAUCE",
    items: [
      {name:"비건 크리미 어니언", description:"Vegan creamy onion sauce"},
      {name:"비건 스리라차", description:"Vegan sriracha sauce"},
      {name:"참깨 간장", description:"Sesame soy sauce"},
      {name:"유자 간장", description:"Citron soy sauce"},
    ]
  }

  const extra = {
    title: "EXTRA",
    items: [
      {name:"메인토핑 추가", description:"Add main topping",price:"700원"},
      {name:"아보카도 추가", description:"Add avocado",price:"800원"},
      {name:"현미밥 추가", description:"Add brown rice",price:"1000원"},
      {name:"메밀면 추가", description:"Add soba noodle",price:"1000원"},
    ]
  }
  return (
    <div>
      <div>
      <span>나만의 포케 만들기</span>
      <br /><br />
      <div className="radial-progress" style={{"--value":20}} role="progressbar">STEP 1</div>
      <h1>{base.title}</h1>
      <ul>
      {base.items.map((item, index) => (
        <li key={index}>
          {item.name} {item.description} {item.price}
        </li>
      ))}
    </ul>
      </div>


      <div>
      <div className="radial-progress" style={{"--value":60}} role="progressbar">STEP 2</div>
      <h2>{mainTopping.title}</h2>
      <ul>
      {mainTopping.items.map((item, index) => (
        <li key={index}>
          {item.name} {item.description}
        </li>
      ))}
    </ul>
      </div>
      <div>
      <div className="radial-progress" style={{"--value":80}} role="progressbar">STEP 3</div>
      <h3>{sauce.title}</h3>
      <ul>
        {sauce.items.map((item,index) => (
          <li key={index}>
            {item.name} {item.description}
          </li>
        ))}

      </ul>
      </div>
      <div>
       <div className="radial-progress" style={{"--value":100}} role="progressbar">EXTRA</div>
      <h4>{extra.title}</h4>
      <ul>
        {extra.items.map((item,index) => (
          <li key={index}>
            {item.name} {item.description} {item.price}
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default Order