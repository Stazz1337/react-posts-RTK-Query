import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { postApi } from '../../redux/PostApi';
import styles from './PostItemDetail.module.css';

const PostItemDetail = () => {
  const { id } = useParams();
  const { data: postDetail, isLoading } = postApi.useFetchPostByIdQuery(id);

  return (
    <section className={styles.root}>
      <Link to={'/'}>Назад</Link>
      <p> Post № {id}</p>
      <h2 className={styles.title}>{postDetail?.title}</h2>
      <p className={styles.text}>{postDetail?.body}</p>
      {isLoading && <p>Загрузка поста</p>}
    </section>
  );
};

export default PostItemDetail;
