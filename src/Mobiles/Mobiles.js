import React, { Component } from 'react';
import axios from 'axios';
// import React from 'react';



 class Mobiles extends Component {
  state = {
    Mobiles: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/tmmobiles`,{
     
    })
      .then(res => {
        console.log(res);
        this.setState({ Mobiles:res.data });
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
        <div class="row">
        { this.state.Mobiles.map(items =>
            <div class="col-4">
                <div class="card card-body" style={{Height:"300px",maxWidth:"300px"}}>
                <p style={{backgroundColor:"red",width:"20%"}}>{items.discount}</p>
                 <img  src ={items.image} alt="loading"></img>
                 <h4 class ="card-title">{items.title}</h4>
                <div><a href={items.url} target="_">DETAILS</a></div>
                <div>availability: {items.availability}</div>
                <div>{items.newPrice}</div>
                <div style={{textDecorationLine:"line-through",color:"red"}}>{items.oldPrice}</div>
                <div>{items.regularPrice}</div>
                
                 </div>
               
            </div>
        )}
        </div>
        
    )
  }
}
export default Mobiles;