import { Link } from "react-router-dom";
import error from "../../assets/img/err.gif"

function NotFound() {
  return (
    <div className="not-found">
      <div className="container">
        <img src={error} alt="404 Error - Broken Robot" />
        <h1>متاسفانه صفحه موردنظر شما پیدا نشد!</h1>
        <Link to="">بازگشت به سایت</Link>
      </div>
    </div>
  );
}

export default NotFound;
