import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from '../styles/components/Post.module.css';
import { FormEvent, TextareaHTMLAttributes, useState } from 'react';

type PostProps = {
  author: {
    avatar_url: string;
    name: string;
    role: string;
  };
  publishedAt: Date;
  content: { type: 'paragraph' | 'link'; content: string }[];
};

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(['Post muito bacana!!!']);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateReativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setComments((prev) => [...prev, newCommentText]);

    setNewCommentText('');
  }

  function handleNewCommentChange(event: any) {
    event.target.setCustomValidity('');

    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: any) {
    event.target.setCustomValidity('Esse campo é obigatório!');
  }

  function removeComment(comment: string) {
    setComments((prev) => {
      return prev.filter((value) => value !== comment);
    });
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar_url} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateReativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleSubmit} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          required
          onInvalid={handleNewCommentInvalid}
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onRemoveComment={() => removeComment(comment)}
          />
        ))}
      </div>
    </article>
  );
}
