import { FC, useEffect } from "react";
import { CatsList } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getCats } from "../../store/thunks/catsThunks";

const AllCats: FC = () => {
  const { cats } = useAppSelector((state) => state.cats);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCats(25));
  }, []);

  return (
    <div>
      <CatsList cats={cats} />
    </div>
  );
};

export default AllCats;
