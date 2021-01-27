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
`;

export const LogoPosition = styled.div`
  position: absolute;
  height: 100px;
  width: 100px;
  top: calc(50% - 61px);
  left: calc(50% - 400px);
  /* border: 1px solid red; */
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
  top: calc(50% - 100px);
  left: calc(50% - 255px);
  width: 710px;
  height: 200px;
  white-space: nowrap;
  -webkit-user-select: none; /* Chrome all and Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* Internet Explorer 10 and later */
  user-select: none; /* Likely future */
  /* border: 1px solid white; */

  /* border: 1px solid white; */
`;

export const Name = styled.h2`
  /* font-family: "Montserrat", sans-serif; */
  color: rgb(217, 218, 215);
  letter-spacing: 25px;
  text-shadow: 0px 0px 5px rgb(194, 77, 44);
  text-transform: uppercase;
`;

export const Title = styled.h5`
  color: rgb(217, 218, 215);
  letter-spacing: 30px;
  text-shadow: 0px 0px 5px rgb(194, 77, 44);
`;

export const LinkButtons = styled.div`
  display: inline-flex;
  position: absolute;
  right: 0;
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
