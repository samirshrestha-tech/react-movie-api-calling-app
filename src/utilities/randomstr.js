const randomGenerator = () => {
  const str = "qwertyuiopasdfghjjklzxcvbnm";
  const num = Math.floor(Math.random() * str.length);

  return str[num];
};
export default randomGenerator;
