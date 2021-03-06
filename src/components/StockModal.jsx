import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearPrice } from "../actions/stocks";
import getCompanyData from "../services/getCompanyData";
import { setShowModal } from "../actions/stocks";
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
  height: 400px;
  width: 470px;
  padding: 12px;
  background-color: orange;
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
  border: none;
  color: white;
  background-color: orange;
  font-weight: 500;
  font-size: 30px;
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

const StyledURL = styled.a`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: white;
`;

const StockModal = ({ unsub }) => {
  const dispatch = useDispatch();
  const clearStockPrice = () => dispatch(clearPrice());

  const stockPrice = useSelector((state) => state.price);
  const showModal = useSelector((state) => state.showModal);
  const data = useSelector((state) => state.modalData);

  const [companyData, setCompanyData] = useState([]);
  useEffect(() => {
    const getCompany = async () => {
      const companyData = await getCompanyData(data.code);
      setCompanyData(companyData);
    };
    if (data?.code) {
      getCompany();
    }
  }, [data?.code]);

  useEffect(() => {
    return () => {
      clearStockPrice();
    };
    // eslint-disable-next-line
  }, []);

  if (!showModal) {
    return null;
  }

  return (
    <>
      <StyledOverlay />
      <StyledModal>
        <StyledInfo>
          <h2>Company Information</h2>
          <li>Company Name:{companyData.name}</li>
          <li>Base Country:{companyData.country}</li>
          <li>Currency: {companyData.currency}</li>
          <li>Exchange: {companyData.exchange}</li>
          <li>Industry: {companyData.finnhubIndustry}</li>
          <li>
            Website:{" "}
            <StyledURL
              href={companyData.weburl}
              target="_blank"
              rel="noreferrer noopener"
            >
              {companyData.weburl}
            </StyledURL>
          </li>
        </StyledInfo>
        <StyledX
          onClick={() => {
            dispatch(setShowModal(null));
            unsub(data.code);
          }}
        >
          x
        </StyledX>
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
