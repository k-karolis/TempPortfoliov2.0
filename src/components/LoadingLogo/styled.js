import styled from "styled-components";

export const Loading = styled.div`
  transform: scale(1.25);
  height: 100px;
  width: 120px;
  /* border: 1px solid; */
`;

export const Circle = styled.svg`
  position: absolute;
  left: calc(50% - 75px);
  top: calc(50% - 75px);
`;

export const Box = styled.svg`
  position: absolute;
  left: calc(50% - 62.5px);
  top: calc(50% - 40px);
`;

export const FirstLine = styled.svg`
  position: absolute;
  left: calc(50% - 50px);
  top: calc(50% - 40px);
  overflow: hidden;
`;

export const SecondLine = styled.svg`
  position: absolute;
  left: calc(50% - 37.5px);
  top: calc(50% - 40px);
`;

export const ThirdLine = styled.svg`
  position: absolute;
  left: calc(50% - 45px);
  top: calc(50% - 40px);
`;

export const FourthLine = styled.svg`
  position: absolute;
  left: calc(50% + 5px);
  top: calc(50% - 10px);
`;

export const FifthLine = styled.svg`
  position: absolute;
  left: calc(50% - 4px);
  top: calc(50% - 2.5px);
`;
