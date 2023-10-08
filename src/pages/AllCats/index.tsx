import { FC, useEffect, useState } from "react";
import { CatsList } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getCats } from "../../store/thunks/catsThunks";
import styles from "./AllCats.module.scss";

const AllCats: FC = () => {
  const { cats, isLoading } = useAppSelector((state) => state.cats);
  const [fetching, setFetching] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!cats.length) dispatch(getCats(10));
  }, []);

  useEffect(() => {
    if (fetching) {
      dispatch(getCats(10));
      setFetching(false);
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  function scrollHandler(e: any) {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  }

  return (
    <div>
      <CatsList cats={cats} />
      {isLoading && <div className={styles.loading}>Загружаем котиков</div>}
    </div>
  );
};

export default AllCats;
