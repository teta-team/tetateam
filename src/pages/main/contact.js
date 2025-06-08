function ContactPage() {
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
            <form>
              <input type="text" placeholder="نام و نام خانوادگی" />
              <input type="number" placeholder="شماره موبایل" />
              <input type="email" placeholder="ایمیل" />
              <textarea></textarea>
              <label>
                <input type="checkbox" />
                با <a href="" download>قوانین ثبت درخواست</a> موافقم.
              </label>
              <button>ثبت درخواست</button>
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

export default ContactPage