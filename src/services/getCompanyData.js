async function getCompanyData(code) {
  const dataRaw = await fetch(
    `https://finnhub.io/api/v1/stock/profile2?symbol=${code}&token=bukp1in48v6qi7366f9g`,
    { json: true }
  );
  const data = await dataRaw.json();
  return data;
}

export default getCompanyData;
