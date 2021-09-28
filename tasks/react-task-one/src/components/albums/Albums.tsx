import React, { Component } from 'react';
import styled from 'styled-components';

const AlbumsContainer = styled.div`
  background-color: #000;  
`;

const AlbumsButton = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 10px;  
`;

type AlbumsProps = {
  data?: object[]
}

export class Albums extends Component<AlbumsProps> {
  constructor(props: AlbumsProps) {
    super(props)
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  render() {
    return (
      <AlbumsContainer>
        Albums
        <AlbumsButton>Get</AlbumsButton >
      </AlbumsContainer>
    )
  }
}

export default Albums
