import styled from "styled-components";

export const Intro = styled.div`
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 425px);
  width: 850px;
  height: 300px;
  white-space: nowrap;
`;

export const Hi = styled.h1`
  line-height: 50px;
  color: rgb(194, 77, 44);
  font-size: 3rem;
  letter-spacing: 30px;
  line-height: 0px;
  > span {
    color: rgb(217, 218, 215);
    display: inline-flex;
    font-size: 1rem;
    letter-spacing: 25px;
  }
`;

export const Name = styled.h1`
  color: rgb(217, 218, 215);
  font-size: 3rem;
  letter-spacing: 30px;
  text-shadow: 0px 0px 5px rgb(194, 77, 44);
`;

export const Title = styled.p`
  color: rgb(217, 218, 215);
  font-size: 1rem;
  letter-spacing: 25px;
  > span {
    display: inline;
    text-shadow: 0px 0px 5px rgb(194, 77, 44);
  }
`;

export const Resume = styled.div`
  border: 2px solid rgb(194, 77, 44);
  font-weight: 600;
  border-radius: 5px;
  width: 125px;
  height: 40px;
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  letter-spacing: 5px;
  transition: all 600ms ease;
  &:hover {
    color: rgb(217, 218, 215);
    background-color: rgba(194, 77, 44, 0.25);
    transition: all 600ms ease;
  }
`;
