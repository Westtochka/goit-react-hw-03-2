import clsx from "clsx";
import s from "./Header.module.css";
import { FcGlobe } from "react-icons/fc";

const Header = () => {
  return (
    <header className={s.header}>
      <div>Logo</div>
      <nav className={clsx(s.title, s.text)}>
        <ul>
          <li>
            <FcGlobe className={s.icon} />
            Home
          </li>
          <li>About</li>
          <li>Profile</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
