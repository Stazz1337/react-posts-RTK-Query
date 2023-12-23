import { Link } from 'react-router-dom';
import styles from './PostItem.module.css';

const PostItem = ({ post }) => {
  return (
    <div className={styles.root}>
      <p>№ {post.id}</p>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.body}>
        {post.body.length > 30 ? post.body.substring(0, 30) + '...' : post.body}
      </p>
      <Link to={`/posts/${post.id}`}>Просмотр</Link>
    </div>
  );
};

export default PostItem;
