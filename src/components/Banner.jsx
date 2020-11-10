import React from "react";
import styled from "styled-components";

const StyledBanner = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: orange;
  margin-bottom: 10px;
`;

const Banner = () => {
  return (
    <StyledBanner>
      <h1>STONKS!!!!!!!!!!!</h1>
    </StyledBanner>
  );
};

export default Banner;
