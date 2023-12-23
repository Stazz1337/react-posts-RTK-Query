import React, { useEffect, useState } from 'react';
import PostItem from '../PostItem/PostItem';
import { postApi } from '../../redux/PostApi';
import styles from './PostContainer.module.css';

const PostContainer = () => {
  const [currentPostStart, setCurrentPostStart] = useState(0);
  const { data: posts, isLoading } = postApi.useFetchAllPostsQuery({
    limit: 6,
    start: currentPostStart,
  });
  const [isMyFetching, setIsFetchingDown] = useState(false);
  const [isMyFetchingUp, setIsMyFetchingUp] = useState(false);
  useEffect(() => {
    if (isMyFetching) {
      setCurrentPostStart((prev) => {
        return prev < 93 ? prev + 1 : prev;
      });
      setIsFetchingDown(false);
    }
  }, [isMyFetching]);
  useEffect(() => {
    if (isMyFetchingUp) {
      setCurrentPostStart((prev) => {
        return prev > 0 ? prev - 1 : prev;
      });
      setIsMyFetchingUp(false);
    }
  }, [isMyFetchingUp]);
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollTop < 50) {
      setIsMyFetchingUp(true);
    }
    if (
      e.target.documentElement.scrollHeight -
        e.target.documentElement.scrollTop -
        window.innerHeight <
      50
    ) {
      setIsFetchingDown(true);
      window.scrollTo(
        0,
        e.target.documentElement.scrollHeight + e.target.documentElement.scrollTop,
      );
    }
  };
  return (
    <div>
      <div className={styles.root}>
        {posts?.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
      {isLoading && <p>Загрузка постов</p>}
    </div>
  );
};

export default PostContainer;
