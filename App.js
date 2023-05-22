import React from 'react'
import NavBar from './NavBar'
import Card from './Card'
import dogArray from './Dogs'


const App = () => {
  const DogElements = dogArray.map(dog=>{
    return <Card
    description = {dog.description}
    imgUrl = {dog.imageUrl}
    title = {dog.title}
    />
  })
  return (
  <div>
    <NavBar />

    {DogElements}

  </div>
  )
}

export default App 



