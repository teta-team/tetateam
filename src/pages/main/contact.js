import { useState } from "react";
import axios from "axios";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    text: "",
  });
  const [isAgreed, setIsAgreed] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAgreed) {
      alert("لطفاً با قوانین موافقت کنید!");
      return;
    }

    try {
      await axios.post("http://5.57.35.227:5000/api/request", formData);
      alert("درخواست با موفقیت ارسال شد!");
      setFormData({ name: "", mobile: "", email: "", text: "" });
      setIsAgreed(false);
    } catch (err) {
      console.error(err);
      alert("خطا در ارسال درخواست");
    }
  };
  return (
    <>
      <div className="contact">
        <div className="container">
          <h1>ارتباط با تتاتیم</h1>
          <div className="contact-boxs">
            <div className="box">
              <i class="bi bi-envelope-at"></i>
              <h2>ایمیل تتاتیم</h2>
              <p>info@teta-team.com</p>
            </div>
            <div className="box">
              <i class="bi bi-telegram"></i>
              <h2>ربات تتاتیم</h2>
              <p>@tetateam_bot</p>
            </div>
            <div className="box">
              <i class="bi bi-telephone"></i>
              <h2>تلفن تتاتیم</h2>
              <p>041-12345678</p>
            </div>
          </div>
        </div>
      </div>

      <div className="form">
        <div className="container">
          <h2>ثبت درخواست پروژه</h2>
          <div className="form-box">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="شماره موبایل"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="ایمیل"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="text"
                placeholder="توضیحات پروژه"
                value={formData.text}
                onChange={handleChange}
              ></textarea>
              <label>
                <input
                  type="checkbox"
                  checked={isAgreed}
                  onChange={handleCheckboxChange}
                />
                با{" "}
                <a href="" download>
                  قوانین ثبت درخواست
                </a>{" "}
                موافقم.
              </label>
              <button type="submit">ثبت درخواست</button>
            </form>

            <div className="left">
              <img src="./assets/images/contact.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
