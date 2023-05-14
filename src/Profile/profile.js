import { useSelector } from "react-redux";
import "./profile.css";

const Profile = () => {
  const email = useSelector((state) => {
    return state.user.email;
  });

  return (
    <div className="profile">
      <h1 className="profileTitle">Hi {email}!</h1>
    </div>
  );
};
export default Profile;
