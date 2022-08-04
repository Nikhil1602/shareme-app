import { useState } from "react";
import { useContext } from "react";
import { Toast } from "../App";

const useLink = (LinkRef) => {
  const [link, setLinkValue] = useState("");
  const { setData } = useContext(Toast);

  const setLink = (value) => {
    setLinkValue(value);
  };

  const copyLink = () => {
    setData({ show: true, message: "Copy to clipboard" });
    LinkRef.current.select();
    document.execCommand("copy");
  };

  return [link, setLink, copyLink];
};

export default useLink;
