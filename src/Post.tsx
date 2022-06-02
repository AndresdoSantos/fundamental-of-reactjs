interface PostProps {
  author: string;
  content: string;
}

export function Post({ author, content }: PostProps) {
  return (
    <>
      <h3>{author}</h3>
      <p>{content}</p>
    </>
  );
}
