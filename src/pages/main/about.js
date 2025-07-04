import User from "../../components/user";

function AboutPage() {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="header">
            <h1>درباره تتاتیم</h1>
            <div className="about-box">
              <div className="right">
                <p>
                  سلام! ما یک تیم سه‌نفره‌ از عاشقان دنیای وب هستیم که از سال‌ها
                  پیش دور هم جمع شدیم تا با ترکیب تخصص و تجربه‌مون، به
                  کسب‌وکارها کمک کنیم بهتر دیده بشن.
                  <br />
                  ما توی این ۶ سال گذشته، روی طراحی، توسعه و سئوی سایت‌های
                  مختلفی کار کردیم؛ از سایت‌های وردپرسی ساده گرفته تا پروژه‌های
                  کدنویسی‌شده اختصاصی. باور ما اینه که هر وب‌سایت یه داستان خاص
                  خودش رو داره، و ما اینجاییم تا اون داستان رو به بهترین شکل
                  بسازیم و نشون بدیم.
                  <br />
                  اگه دنبال یه سایت زیبا، سریع، و سئو شده هستی که هم کاربرات
                  عاشقش بشن هم گوگل، ما کنارت هستیم. از همون مرحله ایده‌پردازی
                  تا طراحی و پیاده‌سازی و حتی بعد از اون، ما همیشه همراهتیم.
                  <br />
                  ما فقط کد نمی‌زنیم؛ سعی می‌کنیم برای هر پروژه وقت بذاریم،
                  نیازهاشو بشناسیم و یه راه‌حل واقعی براش پیدا کنیم درست مثل
                  اینکه داریم روی سایت خودمون کار می‌کنیم.
                  <br />
                  خوشحال می‌شیم اگه فرصتی داشته باشیم تا با هم همکاری کنیم و به
                  رشد آنلاین کسب‌وکارت کمک کنیم.
                </p>
              </div>
              <div className="left">
                <img src="./assets/images/logo512.png" alt="لوگو تتا تیم" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="users">
        <div className="container">
          <h2>افراد تتاتیم</h2>
          <div className="users-info">
            <User
              image={`${process.env.PUBLIC_URL}/assets/images/payiz.jpg`}
              name="علی اسدی"
              skills={[93, 90, 58, 23, 48, 68, 68, 72]}
            />
            <User
              image={`${process.env.PUBLIC_URL}/assets/images/payiz.jpg`}
              name="رضا اسدی"
              skills={[95, 90, 56, 20, 43, 62, 72, 70]}
            />
            <User
              image={`${process.env.PUBLIC_URL}/assets/images/amir.jpg`}
              name="امیرحسین شریفی"
              skills={[97, 95, 87, 74, 81, 76, 82, 84]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
