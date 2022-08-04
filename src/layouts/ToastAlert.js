import React, { useContext, useEffect } from "react";
import { Toast } from "../App";
import tailwind from "../assets/tailwind";

const ToastAlert = () => {
  const { data, setData } = useContext(Toast);

  useEffect(() => {
    data.show &&
      setTimeout(() => {
        setData({ ...data, show: false });
      }, 1500);
  }, [data]);

  return (
    <section className={tailwind.toast(data.show)}>{data.message}</section>
  );
};

export default ToastAlert;
