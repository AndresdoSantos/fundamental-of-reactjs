import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

import styles from '../styles/pages/App.module.css';
import './global.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>{/** Posts here */}</main>
      </div>
    </>
  );
}