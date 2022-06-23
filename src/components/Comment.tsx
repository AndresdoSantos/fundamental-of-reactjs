import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from './Avatar';
import styles from '../styles/components/Comment.module.css';

type CommentProps = {
  content: string;
  onRemoveComment(e: string): void;
};

function Comment({ content, onRemoveComment }: CommentProps) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/AndresdoSantos.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Andres doSantos</strong>

              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:11:36">
                Cerca de 1h atrás
              </time>
            </div>

            <button
              onClick={() => onRemoveComment(content)}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

export { Comment };
