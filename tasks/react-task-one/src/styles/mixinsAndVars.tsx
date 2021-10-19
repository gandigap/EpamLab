export const colors = {
  firstColor: '#212529',
  secondColor: '#dddddd',
  thirdColor: '#bdbdbd',
  fourthСolor: '#F2F2F2',
  fifthСolor: '#FFFFFF',
}

export const buttonStyle = () => {
  return `
    padding: 5px 20px;
    font-size:24px;
    border: 3px solid ${colors.thirdColor};
    border-radius: 10px;
    transition:all ease 0.3s;

    &:hover {
      background-color: ${colors.thirdColor};
      color: ${colors.firstColor};
    }

    &:active {
      transform: scale(0.9);
    }
  `
}

export const hoverShadow = () => {
  return `
    box-shadow: 5px 5px 2px 0px ${colors.firstColor};
    -webkit-box-shadow: 5px 5px 2px 0px ${colors.firstColor};
    -moz-box-shadow: 5px 5px 2px 0px ${colors.firstColor};
  `
}


