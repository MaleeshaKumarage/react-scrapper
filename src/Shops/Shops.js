import React from 'react';

import axios from 'axios';

export default class Shops extends React.Component {
  state = {
    title: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/tmaccessories`,{
     
    })
      .then(res => {
        console.log(res);
        this.setState({ title:res.data });
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <ul>
        { this.state.title.map(title => <li>{title.title}</li>)}
      </ul>
    )
  }
}