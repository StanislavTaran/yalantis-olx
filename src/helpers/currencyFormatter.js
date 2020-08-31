export default value => {
  if (!value) return '';
  value = value.toString();
  return value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};
