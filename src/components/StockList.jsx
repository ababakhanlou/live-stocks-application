import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setShowModal } from "../actions/stocks";

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

const StockList = ({ data, sub }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <StyledStock
        onClick={() => {
          dispatch(setShowModal(data));
          sub(data.code);
        }}
      >
        <p>{data.name}|</p>
        <p>{data.code}</p>
      </StyledStock>
    </div>
  );
};

export default StockList;
