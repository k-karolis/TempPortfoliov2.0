import styled from "styled-components";

export const HighBody = styled.div`
  /* font-family: "NTR", sans-serif; */
  font-family: "Questrial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #c24d2c;
  background-color: #1a2639;
  min-height: 100vh;
  min-width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  position: relative;
  @media only screen and (max-width: 1000px) {
    /* border: 1px solid red; */
  }
`;

export const LogoPosition = styled.div`
  position: absolute;
  height: 100px;
  width: 200px;
  top: calc(50% - 61px);
  left: calc(50% - 400px);
  /* border: 1px solid red; */
  transition: all 600ms ease;
  @media only screen and (max-width: 1000px) {
    transition: all 1000ms ease;
    top: calc(17%);
    left: calc(50% - 100px);
    transform: scale(0.75);
  }
`;

export const Link = styled.div`
  /* border: 1px solid; */
  /* height: 250px; */
  transform: rotate(180deg);
  position: absolute;
  right: 10px;
  bottom: 15px;
  -webkit-user-select: none; /* Chrome all and Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* Internet Explorer 10 and later */
  user-select: none; /* Likely future */
  @media only screen and (max-width: 1000px) {
  }
`;

export const Link2 = styled.div`
  /* border: 1px solid; */
  /* height: 300px; */
  transform: rotate(360deg);
  position: absolute;
  left: 10px;
  top: 15px;
  -webkit-user-select: none; /* Chrome all and Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* Internet Explorer 10 and later */
  user-select: none; /* Likely future */
`;

export const Intro = styled.div`
  position: absolute;
  top: calc(50% - 149px);
  left: calc(50% - 215px);
  width: 710px;
  height: 200px;
  white-space: nowrap;
  -webkit-user-select: none; /* Chrome all and Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* Internet Explorer 10 and later */
  user-select: none; /* Likely future */
  transition: all 1000ms ease;
  /* border: 1px solid white; */

  /* border: 1px solid white; */

  @media only screen and (max-width: 1000px) {
    width: 200px;
    top: calc(21%);
    left: calc(50% - 57px);
    transition: all 1000ms ease;
    /* border: solid; */
    /* flex-direction: column; */
  }
`;

export const Names = styled.div`
  width: 200px;
  transition: all 1000ms ease;
  @media only screen and (max-width: 1000px) {
    transition: all 1000ms ease;
    position: absolute;
    top: calc(7%);
  }
`;

export const Name = styled.h2`
  /* font-family: "Montserrat", sans-serif; */
  color: rgb(217, 218, 215);
  letter-spacing: 25px;
  text-shadow: 0px 0px 5px rgb(194, 77, 44);
  text-transform: uppercase;
  display: inline-flex;
  transition: all 1000ms ease;
  @media only screen and (max-width: 1000px) {
    transition: all 1000ms ease;
    display: block;
    margin: 5px;
    letter-spacing: 5px;
    font-size: 3rem;
  }
`;

export const Title = styled.h5`
  transition: all 1000ms ease;
  color: rgb(217, 218, 215);
  letter-spacing: 30px;
  text-shadow: 0px 0px 5px rgb(194, 77, 44);
  position: absolute;
  top: calc(50% - 20px);
  @media only screen and (max-width: 1000px) {
    position: absolute;
    top: calc(30%);
    left: calc(-190px);
    letter-spacing: 10px;
    transform: rotate(-90deg);
    transition: all 1000ms ease;
  }
`;

export const LinkButtons = styled.div`
  display: inline-flex;
  position: absolute;
  top: calc(60%);
  right: 0;
  transition: all 1000ms ease;
  @media only screen and (max-width: 1000px) {
    width: 150px;
    position: absolute;
    top: calc(40%);
    left: calc(50% - 118px);
    display: block;
    transition: all 1000ms ease;
  }
`;

export const Github = styled.h5`
  /* position: absolute;
  right: 450px; */

  border-radius: 5px;
  margin-left: 25px;
  letter-spacing: 5px;
  transition: all 600ms ease;

  a:focus,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    transition: all 600ms ease;
    color: rgb(194, 77, 44);
  }
  a:hover {
    transition: all 600ms ease;
    color: rgb(217, 218, 215);
  }
`;

export const Linkedin = styled.h5`
  /* position: absolute;
  right: 300px; */
  color: rgb(194, 77, 44);
  border-radius: 5px;
  margin-left: 25px;
  letter-spacing: 5px;
  transition: all 600ms ease;
  a:focus,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    transition: all 600ms ease;
    color: rgb(194, 77, 44);
  }
  a:hover {
    transition: all 600ms ease;
    color: rgb(217, 218, 215);
  }
`;

export const Resume = styled.h5`
  /* position: absolute;
  right: 150px; */
  border-radius: 5px;
  margin-left: 25px;
  letter-spacing: 5px;
  transition: all 600ms ease;
  a:focus,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    transition: all 600ms ease;
    color: rgb(194, 77, 44);
  }
  a:hover {
    transition: all 600ms ease;
    color: rgb(217, 218, 215);
  }
`;

export const Mail = styled.h5`
  /* position: absolute;
  right: 0; */
  border-radius: 5px;
  margin-left: 25px;
  letter-spacing: 5px;
  transition: all 600ms ease;
  a:focus,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    transition: all 600ms ease;
    color: rgb(194, 77, 44);
  }
  a:hover {
    transition: all 600ms ease;
    color: rgb(217, 218, 215);
  }
`;

export const Icons = styled.div`
  height: 45px;
  position: absolute;
  right: 300px;
  bottom: 0px;
`;
