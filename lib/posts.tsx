import fs from 'fs';
import matter from 'gray-matter';

export function getAllPostIds() {
	const files = fs.readdirSync('posts');

  return files.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getPosts() {
	const files = fs.readdirSync('posts');

	const posts = files.map((fileName) => {
		return getPost(fileName);
	});
	return posts;
}

export function getPost(fileName: string) {
	const id = fileName.replace(/\.md$/, '');
	const file = fs.readFileSync(`posts/${fileName}`, 'utf-8');
	const post = matter(file);
	const title = post.data.title;
	const date = post.data.date;
  const content = post.content

	return {
		id,
		title,
		date,
    content
	};
}