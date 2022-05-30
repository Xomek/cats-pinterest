import { FC, HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { filterStyles } from "../../helpers/filterStyles";
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
          <Link to={"/"}>
            <Button className={styles.button}>Все котики</Button>
          </Link>
          <Link to={"/likedCats"}>
            <Button className={styles.button}>Любимые котики</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
