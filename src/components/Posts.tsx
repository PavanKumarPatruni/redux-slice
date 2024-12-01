import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts, postsSelector } from "../slices/postsSlice";
import { AppDispatch } from "../store";

const Posts = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data, loading, error } = useSelector(postsSelector);

  const onFetchPostsClick = useCallback(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <button onClick={onFetchPostsClick}>Fetch Posts</button>

      {loading && <p>Loading</p>}

      {data.length > 0 && !loading && (
        <div>
          {data.map((item) => (
            <p key={item.id}>{item.title}</p>
          ))}
        </div>
      )}

      {error && !loading && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default Posts;
