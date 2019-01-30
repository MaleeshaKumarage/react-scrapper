import React, { Component } from 'react';
import axios from 'axios';
import './Laptops.css';




 class Laptops extends Component {
  state = {
    Laptops: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/tmlaptops`,{
     
    })
      .then(res => {
        console.log(res);
        this.setState({ Laptops:res.data });
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
        <div class="row">
        { this.state.Laptops.map(items =>
        
            <div class="col-3">
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
export default Laptops;