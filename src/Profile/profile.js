import { useSelector } from "react-redux";
import "./profile.css";

const Profile = () => {
  const email = useSelector((state) => {
    return state.user.email;
  });

  const isLight = useSelector((state) => state.theme);

  return (
    <div className={`profile ${isLight ? "lightProfile" : ""}`}>
      <h1 className="profileTitle">Hi {email}!</h1>
    </div>
  );
};
export default Profile;
