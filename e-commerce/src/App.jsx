import { useEffect, useState } from 'react'
import axios from 'axios'

import "./App.css"


//Estado
function App() {
  const [count, setCount] = useState(0)
  const [subTitulo, setSubTitulo] = useState("")

const [produtos, setProdutos] = useState([])

//api de produtos
async function handleGetProducts() {
  const {data} = await axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
  setProdutos(data)
 }

 //salvando os produtos
useEffect(() => {
 handleGetProducts()
}, [])

  //Retorno
  return (
    <>
    
    <div className='topBar'>
      <img src="https://cdn.awsli.com.br/400x300/375/375178/logo/843605e62f.jpg" width={160} height={50} /> 
    </div>
    <div className="container">
    {
      //map(item) = percorrendo os elementos
      produtos.map((item) => (
        <div className="caixinha">
          <img src={item.image_link} alt={item.name} width={100} />
        
          <span className="titulo">{item.name}</span>
          <span className="texto">R$ {item.price}</span>
        </div>
      ))
    }
    </div>
    </>
  )
}

export default App