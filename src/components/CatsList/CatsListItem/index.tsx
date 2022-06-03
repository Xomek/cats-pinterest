import { FC, HTMLAttributes, useState } from "react";
import { filterStyles } from "../../../helpers/filterStyles";
import { ICat } from "../../../interfaces/cat.interface";
import { useAppDispatch } from "../../../store/hooks";
import { toggleLike } from "../../../store/slices/catsSlice";
import styles from "./CatsListItem.module.scss";

interface ICatsListProps extends HTMLAttributes<HTMLDivElement> {
  cat: ICat;
}

const CatsListItem: FC<ICatsListProps> = ({ className, cat, ...props }) => {
  const CatsListItemStyles = filterStyles([className, styles.catsListItem]);
  const dispatch = useAppDispatch();
  const [isHover, setHover] = useState<boolean>(false);

  function toggleLikeOnIcon() {
    dispatch(toggleLike(cat.id));
  }

  return (
    <div
      className={CatsListItemStyles}
      {...props}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img className={styles.img} src={cat.url} alt="catImage" />
      {isHover &&
        (cat.isFavorite ? (
          <img
            className={styles.icon}
            src={"./assets/image/favorite.svg"}
            alt="icon"
            onClick={toggleLikeOnIcon}
          />
        ) : (
          <img
            className={styles.icon}
            src={"./assets/image/favorite-border.svg"}
            alt="icon"
            onClick={toggleLikeOnIcon}
          />
        ))}
    </div>
  );
};

export default CatsListItem;
