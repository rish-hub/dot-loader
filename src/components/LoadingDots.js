import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingDots = () => {
  const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 10px }
  100% { margin-bottom: 0 }
`;
  const Dot = styled.div`
    background-color: black;
    border-radius: 50%;
    width: 7px;
    height: 7px;
    margin: 0 5px;
    background: ${(props) => props.color};
    /* Animation */
    animation: ${BounceAnimation} 0.5s linear infinite;
    animation-delay: ${(props) => props.delay};
  `;

  const DotWrapper = styled.div`
    display: flex;
    align-items: flex-end;
  `;
  const ParentWrapper = styled.div`
    display: flex;
    justify-content: center;
    top: 50%;
    left: 50%;
    position: absolute;
  `;
  return (
    <ParentWrapper>
      Loading
      <DotWrapper>
        <Dot delay=".1s" color="#00e9ff" />
        <Dot delay=".2s" color="#ff8c00" />
        <Dot delay=".3s" color="#ff4444" />
      </DotWrapper>
    </ParentWrapper>
  );
};

export default LoadingDots;
