import { useState } from 'react'


function App() {
  const [result,setResult] = useState("");
  const [search,setSearch] = useState("");
  const customDict=
  [
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
      { word: "Component", meaning: "A reusable building block in React." },
      { word: "State", meaning: "An object that stores data for a component." }
  ];

  const findWord=()=>{
    const foundWord = customDict.find((obj)=>search==obj.word.toLowerCase());
    if(foundWord){
      setResult(foundWord.meaning);
    }else{
      setResult("Word not found in the dictionary");
    }
  }

  return (
    <>
     <h1>Dictionary App</h1>
     <input type='text' placeholder='Search for a word' value={search} onChange={(e)=>setSearch(e.target.value)}/>
     <button onClick={findWord}>Search</button> 
     <h3>Definition:</h3>
     <p>{result}</p>
     
    </>
  )
}

export default App
