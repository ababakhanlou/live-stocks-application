import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearPrice } from "../actions/stocks";
import getCompanyData from "../services/getCompanyData";
import styled from "styled-components";

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: grey;
  opacity: 50%;
`;

const StyledModal = styled.div`
  position: absolute;
  top: 20%;
  left: 10%;
  height: 500px;
  width: 450px;
  padding: 12px;
  background-color: green;
  color: white;
  display: flex;
  flex-grow: 2;
  flex-wrap: wrap;
  margin: 5px;
  border-radius: 25px;
  font-weight: 700;
  opacity: 100%;
  justify-self: center;
`;
const StyledX = styled.button`
  align-self: start;
  justify-content: right;
  justify-self: right;
`;

const StyledInfo = styled.ul`
  flex-grow: 4;
  list-style-type: none;
  display: inline;
  padding-left: 20px;
  text-decoration: none;
  text-align: left;
  justify-content: center;
`;

const StyledPrices = styled.div`
  list-style-type: none;
  display: inline;
  padding-left: 20px;
  text-decoration: none;
  text-align: left;
  justify-content: center;
  justify-self: center;
`;

const StockModal = ({ data, removeModal }) => {
  const dispatch = useDispatch();
  const clearStockPrice = () => dispatch(clearPrice());

  const stockPrice = useSelector((state) => state.price);

  const [companyData, setCompanyData] = useState([]);
  useEffect(() => {
    const getCompany = async () => {
      const companyData = await getCompanyData(data.code);
      setCompanyData(companyData);
    };
    getCompany();
  }, [data.code]);

  useEffect(() => {
    return () => {
      clearStockPrice();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <StyledOverlay />
      <StyledModal>
        <StyledInfo>
          <h2>Company Information</h2>
          <li>Company Name: {companyData.name}</li>
          <li>Base Country: {companyData.country}</li>
          <li>Currency: {companyData.currency}</li>
          <li>Exchange: {companyData.exchange}</li>
          <li>Industry: {companyData.finnhubIndustry}</li>
          <li>Website: {companyData.weburl}</li>
        </StyledInfo>
        <StyledX onClick={removeModal}>x</StyledX>
        <StyledPrices>
          <h2>Current Price</h2>
          <p>price: {stockPrice}</p>
          <li>Outstanding Shares in Market: {companyData.shareOutstanding}</li>
          <li>
            Market Cap (In Base Cur {companyData.currency}):
            {companyData.marketCapitalization}00
          </li>
        </StyledPrices>
      </StyledModal>
    </>
  );
};

export default StockModal;
