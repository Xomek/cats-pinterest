import { FC, HTMLAttributes } from "react";
import { NavLink } from "react-router-dom";
import { filterStyles } from "../../helpers/filterStyles";
import { ROUTES } from "../../routes/routes";
import { Button } from "../UI";
import styles from "./Header.module.scss";

const Header: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const HeaderStyles = filterStyles([className, styles.header]);

  return (
    <header className={HeaderStyles} {...props}>
      <div className="container">
        <nav className={styles.menu}>
          <NavLink
            to={ROUTES.ROOT}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <Button className={styles.button}>Все котики</Button>
          </NavLink>

          <NavLink
            to={ROUTES.LIKED}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <Button className={styles.button}>Любимые котики</Button>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
