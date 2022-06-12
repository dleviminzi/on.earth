import { getAllPostIds, getPost } from '../../lib/posts';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../components/layout'

export default function Post({ post }: {
  post: {
    path: string,
    title: any,
    date: any,
    content: string,
  }
}) {
  return <Layout>
    {post.title}
    <br />
    {post.date}
    <br />
    {post.content}
    <br />
  </Layout>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: {
  params: {
    id: string
  }
  }) {
  const id = params.id
  const post = getPost(id)

  return {
    props: {
      post,
    },
  };
}


