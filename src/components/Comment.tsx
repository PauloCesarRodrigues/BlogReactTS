import { Avatar } from './Avatar';
import { useState } from 'react';
import { Trash, ThumbsUp } from "phosphor-react";
import styles from "./Comment.module.css";

interface CommentProps{
  content: string;
  onDeleteComment: (comment: string)=> void;
}


export function Comment({content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment(){
    setLikeCount((state)=>{
      return state +1
    });
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/paulocesarrodrigues.png" alt=""/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Paulo Cesar Rodrigues</strong>
              <time title="02 de Outubro ás 11:22h" dateTime="2024-10-02 11:22:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Like <span>{likeCount}</span>
          </button>
        </footer>
      </div>


    </div>
  )
}