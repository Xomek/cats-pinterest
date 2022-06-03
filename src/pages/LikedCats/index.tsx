import { FC } from "react";
import { CatsList } from "../../components";
import { useAppSelector } from "../../store/hooks";

const LikedCats: FC = () => {
  const { cats } = useAppSelector((state) => state.cats);
  const likedCatsArr = cats.filter((cat) => cat.isFavorite);

  return (
    <div>
      <CatsList cats={likedCatsArr} />
    </div>
  );
};

export default LikedCats;
