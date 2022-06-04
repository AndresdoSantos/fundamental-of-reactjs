import { PencilLine } from 'phosphor-react';

import styles from '../../styles/components/Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src={`https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40`}
        className={styles.cover}
      />

      <div className={styles.profile}>
        {/** Quando a imagem vem de um input do usuário, não se coloca "alt" */}
        <img
          className={styles.avatar}
          src="https://github.com/AndresdoSantos.png"
        />

        <strong>Andres dos Santos</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
