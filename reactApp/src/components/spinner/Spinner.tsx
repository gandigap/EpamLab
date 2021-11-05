import React from 'react';
import styled from 'styled-components';
import spinnerImg from '../../images/spinner.gif';

const SpinnerContainer = styled.div`
  margin: o auto;
  width: 200px;
  height: 200px;
  background-image: url('${spinnerImg}');
`;

const Spinner = () => {
  return (
    <SpinnerContainer />
  );
}

export default Spinner;