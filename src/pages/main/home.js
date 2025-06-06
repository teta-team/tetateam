import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectProgress from "../../components/projectProgress";

function HomePage() {
  useEffect(() => {
    const paras = Array.from(document.querySelectorAll(".team-skills h4"));
    let currentIndex = 0;

    setInterval(() => {
      if (paras.length > 0) {
        paras[currentIndex].classList.remove("active");
        paras[currentIndex].classList.add("isHidden");
        currentIndex++;

        if (currentIndex >= paras.length) {
          currentIndex = 0;
        }
        paras[currentIndex].classList.remove("isHidden");
        paras[currentIndex].classList.add("active");
      }
    }, 1500);
  }, []);
  return (
    <>
      <div className="welcome">
        <div className="container">
          <img src="./assets/images/logo512.png" alt="تتا تیم" />
          <h1>تتا تیم</h1>
          <p>
            شرکت تتا تیم یک شرکت با سابقه 3 سال فعالیت در حوزه کدنویسی وبسایت می
            باشد
          </p>
          <div className="team-skills">
            <h4 className="active">طراحی سایت</h4>
            <h4 className="isHidden">وردپرس</h4>
            <h4 className="isHidden">سئو</h4>
          </div>
          <div className="socials">
            <Link
              to="https://github.com/teta-team"
              className="github"
              title="Github"
              target="_blank"
            >
              <i className="bi bi-github"></i>
            </Link>
            <Link
              to="https://t.me/tetateam_ir"
              className="telegram"
              title="Telegram"
              target="_blank"
            >
              <i className="bi bi-telegram"></i>
            </Link>
            <Link to="" className="email" title="Email" target="_blank">
              <i className="bi bi-envelope-at"></i>
            </Link>
            <Link to="" className="discord" title="Discord" target="_blank">
              <i className="bi bi-discord"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* درباره ما صفحه اصلی */}

      <div className="about-home">
        <div className="container">
          <div className="right">
            <h2>درباره تتا تیم</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
          <div className="left">
            <img
              src="https://www.mooc.org/hubfs/applications-of-computer-programming.jpg"
              alt=""
            />
            <img
              src="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg"
              alt=""
            />
            <img
              src="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* آخرین پروژه ها */}

      <div className="last-projects">
        <div className="container">
          <h2>آخرین پروژه های تتا تیم</h2>
          <div className="projects-row">
            <ul>
              <Link to="" className="box">
                <img src="./assets/images/tetalearn.png" alt="سایت تتالرن" />
                <h3>سایت تتالرن</h3>
              </Link>
              <Link to="" className="box">
                <img src="./assets/images/tetalearn.png" alt="سایت تتالرن" />
                <h3>سایت تتالرن</h3>
              </Link>
              <Link to="" className="box">
                <img src="./assets/images/tetalearn.png" alt="سایت تتالرن" />
                <h3>سایت تتالرن</h3>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {/*  نقشه مراحل انجام پروژه*/}

      <ProjectProgress />

      {/* مزایای تتاتیم */}
    </>
  );
}

export default HomePage;
