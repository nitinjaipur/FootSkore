// import { MMKV } from 'react-native-mmkv'

// // mmky object for storage
// const storage = new MMKV();

// function for Email regex varificarion
const isValidEmail = (text) => {
  let re = /^[a-zA-Z]+\w*[_|.]*[@]{1}\w+[.]{1}\w+/;
  return re.test(text);
}

// function for Password regex varificarion
const isValidPassword = (text) => {
  let reNonAlpha = /\W+/;
  let reAlpha = /[a-zA-Z]+/;
  let reNum = /[0-9]+/;
  return (reNonAlpha.test(text) && reAlpha.test(text) && reNum.test(text) && (text.length > 7));
}


export { isValidEmail, isValidPassword };