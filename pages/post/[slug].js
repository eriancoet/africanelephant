import ReadersNav from '/components/ReadersNav.js';
import Recommendations from '/components/Recommendations';
import ArticleMain from '/components/ArticleMain';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MyBlogContext } from '../../context/myBlogContext';

const styles = {
  content: `flex`,
}
// Guard Clause
//Jes. 45:17,the soul of the new machine, Code structure is the Bleach Machine.
const Post = () => {
  const { posts, users } = useContext(MyBlogContext);
  const router = useRouter()
  const [post, setPost] = useState([])
  const [author, setAuthor] = useState([])

  useEffect(() => {
    // guard clause
    if (posts.length === 0) {
      return
    }

    setPost(posts.find (post => post.id === router.query.slug));

    setAuthor(users.find(user => user.id === post.data?.author));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post])

  return (
    <div className={styles.content}>
    <ReadersNav/>
    <ArticleMain  post={post} author={author}/>
    <Recommendations/>
    </div>
   
  )
}

export default Post;