import React from 'react';
import Container from 'react-bootstrap/Container';
import ic_carousel_3 from '../../assets/ic_carousel_3.jpg';

const Home = () => {
 
  return (
    <>
      <Container fluid className='p-0 mb-2' style={{marginTop:'-7rem'}}>
         <img src={ic_carousel_3} style={{width:'100%', maxWidth:'none'}} />
      </Container>
      <div className='mb-2 p-20' style={{backgroundColor:'#B0A695'}}>
        <h1 className='text-center text-8xl font-semibold' style={{color:'#FFF'}}>NEW COLLECTION</h1>
      </div>
    </>
  )
}

export default Home;