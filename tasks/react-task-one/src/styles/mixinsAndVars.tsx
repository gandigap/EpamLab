export const colors = {
  firstColor: '#212529',
  secondColor: '#6c757c',
  thirdColor: '#bdbdbd',
  fourthСolor: '#F2F2F2',
  fifthСolor: '#FFFFFF',
}

export const buttonStyle = () => {
  return `
    padding: 5px 20px;
    font-size:24px;
    border: 3px solid ${colors.secondColor};
    border-radius: 10px;

    &:hover {
      background-color: ${colors.secondColor};
      color: ${colors.firstColor};
    }

    &:active {
      
    }
  `
}


