import React, { useContext } from "react";
import { Toast } from "../App";
import tailwind from "../assets/tailwind";
import { useMail } from "../hooks";

const ShareViaMail = ({ link, disable, setDisable, postData }) => {
  const { mail_outer, mail_inner, mail_input } = tailwind.main_body;
  const { mail_label, mail_text, buttons, button } = tailwind.main_body;
  const [mail, setSender, setReceiver, setClearMail] = useMail();
  const { setData } = useContext(Toast);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      uuid: link.split("/").splice(-1, 1)[0],
      emailTo: mail.receiver,
      emailFrom: mail.sender,
    };
    setData({ show: true, message: "Mail sent successfully" });
    postData(formData);
    setClearMail();
    setDisable(true);
  };

  return (
    <section style={{ display: link === "" ? "none" : "block" }}>
      <p className={mail_text}>Or send via Email</p>
      <div className={mail_outer}>
        <form>
          <div className={mail_inner}>
            <label className={mail_label} for="sender">
              Your email
            </label>
            <input
              className={mail_input}
              type="email"
              placeholder="Your mail"
              required
              name="from"
              id="sender"
              value={mail.sender}
              onChange={setSender}
            />
          </div>
          <div className={mail_inner}>
            <label className={mail_label} for="receiver">
              Receiver's email
            </label>
            <input
              className={mail_input}
              type="email"
              placeholder="Receiver's mail"
              required
              name="to"
              id="receiver"
              value={mail.receiver}
              onChange={setReceiver}
            />
          </div>
          <div className={buttons}>
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={disable}
              className={button}>
              Send
            </button>
            <button type="reset" onClick={setClearMail} className={button}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ShareViaMail;
