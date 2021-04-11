import React from "react";

interface WaitingProps {
  text: string;
}

const Waiting: React.FC<WaitingProps> = ({ text }) => {
  return (
    <React.Fragment>
      <img alt="waiting" src={"images/waiting.gif"} />;<h1>{text}</h1>
    </React.Fragment>
  );
};

export default React.memo(Waiting);
