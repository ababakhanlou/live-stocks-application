import React, { useState } from "react";
import styled from "styled-components";
import StockModal from "./StockModal";

const StyledStock = styled.div`
  height: 150px;
  width: 260px;
  padding: 18px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border-radius: 25px;
  font-weight: 700;
`;

const StockList = ({ data, sub, unsub }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <StyledStock
        onClick={() => {
          setShowModal(true);
          sub(data.code);
        }}
      >
        <p>{data.name}|</p>
        <p>{data.code}</p>
      </StyledStock>

      {showModal && (
        <StockModal
          data={data}
          removeModal={() => {
            setShowModal(false);
            unsub(data.code);
          }}
        />
      )}
    </div>
  );
};

export default StockList;
