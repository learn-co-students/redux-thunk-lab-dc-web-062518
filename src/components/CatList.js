import React from 'react'

const CatList = props=>{

  const renderPics =()=>{
    return props.catPics.map(pic=>(
      <img key={pic.url} src={pic.url} alt='Cat pics' />
    ))
  }

  return(

    <div>
      {renderPics()}
    </div>

  )
}

export default CatList
