import { Suspense } from "react";
import { News } from "../News/News";
import { Loader } from "../shared/Loader";
export const NewsSkeleton = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <News url="https://wordpressapi.eu/wp-json/wp/v2/posts/" />
      </Suspense>
    </>
  );
};
