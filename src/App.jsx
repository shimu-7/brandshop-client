
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [brands, setBrands] = useState([])

  useEffect(() => {
    fetch('brands.json')
      .then(res => res.json())
      .then(data => setBrands(data))
  }, [])


  return (
    <>

      <h1>Welcome to Brand Shop</h1>
      <div className='grid grid-cols-3 gap-3'>
        {
          brands.map(brand => <div key={brand.id}><img src={brand.image}></img></div>)
        }
      </div>

    </>
  )
}

export default App
