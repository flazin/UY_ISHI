export default price => {
  const kurs = 12000;
  const sum = kurs * price;
  const qimmat = sum * 2;

  return {
    sum,
    qimmat,
  };
};
