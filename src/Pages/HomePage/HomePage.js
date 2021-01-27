import { React } from "react";
import { Intro, Hi, Name, Title, Resume } from "./styled";

export default function Introduction() {
  return (
    <Intro>
      <Hi>
        Hi
        <span>,my name is</span>
      </Hi>
      <Name>Karolis Kimtys</Name>

      <Title>
        I am a <span>junior web developer</span>.
      </Title>
      <Resume>
        <div>Resume</div>
      </Resume>
    </Intro>
  );
}
