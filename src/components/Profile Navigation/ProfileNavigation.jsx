import "./ProfileNavigation.css";

const ProfileNavigation = ({ tab, setTab }) => {
  return (
    <ul className="display-flex width-100 justify-content-between">
      <li
        className={`txt-semibold btn-profile-nav py-9 px-13 ${
          tab === "Profile" ? "tab-profile-active" : ""
        }`}
        onClick={() => setTab("Profile")}>
        Profile
      </li>
      <li
        className={`txt-semibold btn-profile-nav py-9 px-13 ${
          tab === "Address" ? "tab-profile-active" : ""
        }`}
        onClick={() => setTab("Address")}>
        Address
      </li>
      <li
        className={`txt-semibold btn-profile-nav py-9 px-13 ${
          tab === "Orders" ? "tab-profile-active" : ""
        }`}
        onClick={() => setTab("Orders")}>
        Orders
      </li>
    </ul>
  );
};

export { ProfileNavigation };
