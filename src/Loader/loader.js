import { useSelector } from "react-redux";
import "./loader.css";

const Loader = () => {
  const isLight = useSelector((state) => state.theme);

  return (
    <div className={`loader ${isLight ? "lightLoader" : ""}`}>
      <div>
        <div className="loadingio-spinner-double-ring-2u2oii1cr7i">
          <div className="ldio-tkuchhxylxc">
            <div></div>
            <div></div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loader;
