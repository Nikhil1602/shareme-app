import React, { useState } from "react";
import { Header, MainBody, ToastAlert } from "./layouts";
import { createContext } from "react";

const Toast = createContext();

const App = () => {
  const [data, setData] = useState({
    show: false,
    message: "",
  });
  const value = { data, setData };

  return (
    <Toast.Provider value={value}>
      <Header />
      <MainBody />
      <ToastAlert />
    </Toast.Provider>
  );
};

export default App;
export { Toast };
