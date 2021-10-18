import React from 'react';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  @keyframes ldio-18awhk7wbvl {
    0% {
      transform: rotate(0)
    }

    100% {
      transform: rotate(360deg)
    }
  }

  .ldio-18awhk7wbvl div {
    box-sizing: border-box !important
  }

  .ldio-18awhk7wbvl>div {
    position: absolute;
    width: 90px;
    height: 90px;
    top: 55px;
    left: 55px;
    border-radius: 50%;
    border: 10px solid #000;
    border-color: #777777 transparent #777777 transparent;
    animation: ldio-18awhk7wbvl 1s linear infinite;
  }

  .ldio-18awhk7wbvl>div:nth-child(2),
  .ldio-18awhk7wbvl>div:nth-child(4) {
    width: 66px;
    height: 66px;
    top: 67px;
    left: 67px;
    animation: ldio-18awhk7wbvl 1s linear infinite reverse;
  }

  .ldio-18awhk7wbvl>div:nth-child(2) {
    border-color: transparent #cccccc transparent #cccccc
  }

  .ldio-18awhk7wbvl>div:nth-child(3) {
    border-color: transparent
  }

  .ldio-18awhk7wbvl>div:nth-child(3) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }

  .ldio-18awhk7wbvl>div:nth-child(3) div:before,
  .ldio-18awhk7wbvl>div:nth-child(3) div:after {
    content: "";
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    top: -10px;
    left: 30px;
    background: #777777;
    border-radius: 50%;
    box-shadow: 0 80px 0 0 #777777;
  }

  .ldio-18awhk7wbvl>div:nth-child(3) div:after {
    left: -10px;
    top: 30px;
    box-shadow: 80px 0 0 0 #777777;
  }

  .ldio-18awhk7wbvl>div:nth-child(4) {
    border-color: transparent;
  }

  .ldio-18awhk7wbvl>div:nth-child(4) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }

  .ldio-18awhk7wbvl>div:nth-child(4) div:before,
  .ldio-18awhk7wbvl>div:nth-child(4) div:after {
    content: "";
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    top: -10px;
    left: 18px;
    background: #cccccc;
    border-radius: 50%;
    box-shadow: 0 56px 0 0 #cccccc;
  }

  .ldio-18awhk7wbvl>div:nth-child(4) div:after {
    left: -10px;
    top: 18px;
    box-shadow: 56px 0 0 0 #cccccc;
  }

  .loadingio-spinner-double-ring-xnl7xhp0yx {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: #f1f2f3;
  }

  .ldio-18awhk7wbvl {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
    /* see note above */
  }

  .ldio-18awhk7wbvl div {
    box-sizing: content-box;
  }
`;

const Spinner = () => {
  return (
    <SpinnerContainer className="loadingio-spinner-double-ring-xnl7xhp0yx">
      <div className="ldio-18awhk7wbvl">
        <div></div>
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </SpinnerContainer>
  );
}

export default Spinner;