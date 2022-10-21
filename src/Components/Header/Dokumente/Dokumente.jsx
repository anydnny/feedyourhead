import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Divv = styled.div`
  margin-top: 100px;
`;
const Dokumente = () => {
  return (
    <Divv>
      <h1>dokuemnte:</h1>
      <Link to="/dokumente/fyh01">Factory REcords</Link>
    </Divv>
  );
};
export { Dokumente };
