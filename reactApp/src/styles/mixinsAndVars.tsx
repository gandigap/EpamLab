export const colors = {
  firstColor: '#212529',
  secondColor: '#dddddd',
  thirdColor: '#bdbdbd',
  fourthСolor: '#F2F2F2',
  fifthСolor: '#FFFFFF',
}

export const buttonStyle = () => {
  return `    
    max-width: 150px;
    margin: 5px;
    font-size:24px;
    border: none;
    transition:all ease 0.3s;
    cursor: pointer;   
    
    
    & .button-icon-container{      
      display: flex;         
    }

    & .button-text{
      padding: 5px 10px;   
      border: 3px solid ${colors.thirdColor};     
      background-color: transparent; 
    }    

    &:hover {      
      color: ${colors.firstColor}; 
      
      & .button-text{
        background-color: ${colors.thirdColor}; 
      }  
      
      & .button-icon-container__icon{        
        animation-duration: 2s;
        animation-iteration-count: infinite;         
        transform-origin: bottom;
        animation-name: bounce;
        animation-timing-function: ease;
        background-color: ${colors.fourthСolor};
      }    
    }

    &:active {
      transform: scale(0.9);
    }

    @keyframes bounce {
      0%   { transform: translateY(0); }
      50%  { transform: translateY(-5px);}
      100% { transform: translateY(0); }
    }
  `
}

export const hoverShadowStyle = () => {
  return `
    box-shadow: 5px 5px 2px 0px ${colors.firstColor};
    -webkit-box-shadow: 5px 5px 2px 0px ${colors.firstColor};
    -moz-box-shadow: 5px 5px 2px 0px ${colors.firstColor};
  `
}

export const insetShadowStyle = () => {
  return `
  -webkit-box-shadow: inset 0px 0px 20px 0px ${colors.fifthСolor}; 
  box-shadow: inset 0px 0px 20px 0px ${colors.fifthСolor};
  `
}
