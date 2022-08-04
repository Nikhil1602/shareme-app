import { useState } from "react";

const useMail = () => {
  const [mail, setMail] = useState({
    sender: "",
    receiver: "",
  });

  const setSender = (e) => {
    setMail({ ...mail, sender: e.target.value });
  };

  const setReceiver = (e) => {
    setMail({ ...mail, receiver: e.target.value });
  };

  const setClearMail = () => {
    setMail({ sender: "", receiver: "" });
  };

  return [mail, setSender, setReceiver, setClearMail];
};

export default useMail;
