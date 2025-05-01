const authenticateUser = (username, password) => {
  if (username === 'admin' && password === 'vitamins') {
    localStorage.setItem("_token", "_tkn123");
    return true;
   }
  return false;
}

const logout = () => {
  localStorage.clear();
}

export {authenticateUser, logout};