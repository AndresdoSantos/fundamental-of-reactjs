import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Post } from '../components/Post';

import styles from '../styles/pages/App.module.css';
import '../styles/global.css';

type Post = {
  id: number;
  author: {
    avatar_url: string;
    name: string;
    role: string;
  };
  publishedAt: Date;
  content: { type: 'paragraph' | 'link'; content: string }[];
};

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatar_url: 'https://github.com/AndresdoSantos.png',
      name: 'Andres',
      role: 'Web Developer at Zaal',
    },
    publishedAt: new Date('2022-05-03 20:00:00'),
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
  },
  {
    id: 2,
    author: {
      avatar_url: 'https://github.com/diego3g.png',
      name: 'Diego',
      role: 'Web Developer at Rocketseat',
    },
    publishedAt: new Date('2022-05-01 16:48:10'),
    content: [
      { type: 'paragraph', content: 'Fala devs' },
      {
        type: 'paragraph',
        content: 'Nessa semana tem Ignite Lab.',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </main>
      </div>
    </>
  );
}
