import React from 'react'
import loadingImg from '../background/Loading.gif'
function Loading() {
  return (
    <div  style={{display:'flex',flexDirection:'column',alignItems:'center',gap:50 ,justifyContent:'center'}}>
      <img style={{width:'500px',maxHeight:'auto'}} src={loadingImg} alt='Loading'/>
      <p style={{color:'white',fontSize:'50px',marginTop:'-10px'}}>Loading...</p>
    </div>
  )
}

export default Loading