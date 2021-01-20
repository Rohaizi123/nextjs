import Head from 'next/head'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  let peopleIds = [1, 2, 3];
  let randomPeopleId = peopleIds[Math.floor(Math.random() * peopleIds.length)]
  const res = await fetch(`https://swapi.dev/api/people/${randomPeopleId}`);
  const data = await res.json();

  let hello = 'world';

  return {
    props: {
      hero: data,
      hello
    }
  }
}

export default function Home({hero}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {hero.name}
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
