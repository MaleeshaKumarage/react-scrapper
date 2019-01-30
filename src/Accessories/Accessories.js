import React from 'react';
import axios from 'axios';
import './Accessories.css';




export default class Accessories extends React.Component {
  state = {
    Accessories: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/tmaccessories`,{
     
    })
      .then(res => {
        console.log(res);
        this.setState({ Accessories:res.data });
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div class="row">
      { this.state.Accessories.map(items =>
      
          <div class="col-3">
              <div class="card card-body" style={{Height:"300px",maxWidth:"300px"}}>
              <p style={{backgroundColor:"red",width:"30%"}}>{items.discount}</p>
               <img   src ={items.image} alt="loading"></img>
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