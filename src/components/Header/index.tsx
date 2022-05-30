import { FC, HTMLAttributes } from "react";
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
          <Button className={styles.button}>Все котики</Button>
          <Button className={styles.button}>Любимые котики</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
