import '../styles/Home.module.css'
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getPosts } from '../lib/posts'

export const getStaticProps: GetStaticProps = async () => {
	const posts = getPosts();

	return {
		props: {
			posts,
		},
	};
}

export default function Posts({ posts }: {
	posts: {
		post: string
		title: string
		date: string
	}[]
}) {
	return (
		<>
			{posts.map(({ post, title, date }) => (
				<div>
					<Link href={`/posts/${post}`}>
						<a>
							{title} {date}
						</a>
					</Link>
				</div>
			))}
		</>
	)
}


