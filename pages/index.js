import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Full Stack Web Developer ➝ JavaScript : ✓, React: ✓, Redux : ✓, NodeJS: ✓, Express: ✓, PostgreSQL: ✓, Sequelize: ✓, MongoDB: ✓, <strong>NextJS: ✓</strong><br />
        Follow me on{''} <a href="https://twitter.com/jgxdev">Twitter</a>
        </p>
        <p>
          (This web site is a part of my work on front-end development, here the repositorie{' '}
          <a href="https://github.com/jgxdev">on GitHub</a>.)
        </p>
      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}