import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchSinglePost } from '../../hooks/post/useFetchServicePost';
// import { getImagesUrlFromStripe } from '../../utils/getImages';
import Author from './components/Author';
import Content from './components/Content';
import PostBanner from './components/PostBanner';
import Title from './components/Title';
import { Layout } from './layout';

/**
 *
 * @returns {JSX} LandingPage
 */
const PostPage = () => {
  const params = useParams();
  const url = 'http://localhost:1337';

  const { data } = useFetchSinglePost(params.id);

  // if (isLoading) return <div>Loading..</div>;
  // if (isError) return <div>Error..</div>;
  const postContent = data?.data.content;

  const postAuthor = data?.data.author;
  const postTitle = data?.data.title;

  const getPostImageUrl = data?.data.coverImage.map((item) => item.url);
  const postCreatedAt = data?.data.created_at;

  return (
    <React.Fragment>
      <Layout>
        <PostBanner image={`${url}${getPostImageUrl}`} />
        <Title title={postTitle} />
        <Author author={postAuthor} created={postCreatedAt} />
        <Content content={postContent} />
      </Layout>
    </React.Fragment>
  );
};

export default PostPage;
