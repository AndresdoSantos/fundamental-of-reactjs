import { Header } from './components/Header';
import { Post } from './Post';

import './styles.css';

export function App() {
  return (
    <>
      <Header />

      <Post
        author="Andres"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure culpa fugit eaque! Eos tempora maiores praesentium magnam iure quisquam, non cum error. Repellendus sapiente a temporibus doloribus eaque, aliquid tempore."
      />
    </>
  );
}
