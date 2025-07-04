import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectProgress from "../../components/projectProgress";
import ProjectCard from "../../components/projectCard";
import axios from "axios";

function HomePage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://5.57.35.227:5000/api/lastProjects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Error fetching data:", error));

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
          <h1>تتاتیم</h1>
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
            <h2>درباره تتاتیم</h2>
            <p>
              سلام! ما یک تیم سه‌نفره‌ از عاشقان دنیای وب هستیم که از سال‌ها پیش
              دور هم جمع شدیم تا با ترکیب تخصص و تجربه‌مون، به کسب‌وکارها کمک
              کنیم بهتر دیده بشن.
              <br />
              ما توی این ۶ سال گذشته، روی طراحی، توسعه و سئوی سایت‌های مختلفی
              کار کردیم؛ از سایت‌های وردپرسی ساده گرفته تا پروژه‌های کدنویسی‌شده
              اختصاصی. باور ما اینه که هر وب‌سایت یه داستان خاص خودش رو داره، و
              ما اینجاییم تا اون داستان رو به بهترین شکل بسازیم و نشون بدیم.
              <br />
              اگه دنبال یه سایت زیبا، سریع، و سئو شده هستی که هم کاربرات عاشقش
              بشن هم گوگل، ما کنارت هستیم. از همون مرحله ایده‌پردازی تا طراحی و
              پیاده‌سازی و حتی بعد از اون، ما همیشه همراهتیم.
              <br />
              ما فقط کد نمی‌زنیم؛ سعی می‌کنیم برای هر پروژه وقت بذاریم، نیازهاشو
              بشناسیم و یه راه‌حل واقعی براش پیدا کنیم درست مثل اینکه داریم روی
              سایت خودمون کار می‌کنیم.
              <br />
              خوشحال می‌شیم اگه فرصتی داشته باشیم تا با هم همکاری کنیم و به رشد
              آنلاین کسب‌وکارت کمک کنیم.
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
          <h2>آخرین پروژه های تتاتیم</h2>
          <div className="projects-row">
            <ul>
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  id={project.id}
                  image={project.banner}
                  name={project.title}
                />
              ))}
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
