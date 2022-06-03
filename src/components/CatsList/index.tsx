import { FC, HTMLAttributes } from "react";
import { filterStyles } from "../../helpers/filterStyles";
import { ICat } from "../../interfaces/cat.interface";
import styles from "./CatsList.module.scss";
import CatsListItem from "./CatsListItem";

interface ICatsListProps extends HTMLAttributes<HTMLDivElement> {
  cats: ICat[];
}

const CatsList: FC<ICatsListProps> = ({ className, cats, ...props }) => {
  const CatsListStyles = filterStyles([className, styles.catsList]);

  return (
    <div className={CatsListStyles} {...props}>
      {cats.map((cat, index) => (
        <CatsListItem cat={cat} key={`${cat.id}_${cat.url}_${index}`} />
      ))}
    </div>
  );
};

export default CatsList;
