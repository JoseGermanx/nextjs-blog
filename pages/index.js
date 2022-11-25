import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { useState } from "react";
import axios from "axios";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const [email, setEmail] = useState("");
  const SendMail = async (e) => {
    e.preventDefault();
    console.log("call");
    axios.post('http://localhost:3000/api/email',{email})
   .then(
   (res)=>{
     alert('Mensaje enviado')
     setEmail('')
   }
   ).catch(
     (e)=>console.log(e)
   )
  };
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main className={utilStyles.headingMd}>
        <p>Ingresa tu email y me pongo en contacto contigo</p>
       <form>
      <input type="email" placeholder="Ingresa tu email" required value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      <button onClick={SendMail}>Send</button>
        </form>
     </main>
      <section className={utilStyles.headingMd}>
        <p>
          Full Stack Web Developer ➝ JavaScript : ✓, React: ✓, Redux : ✓,
          NodeJS: ✓, Express: ✓, PostgreSQL: ✓, Sequelize: ✓, MongoDB: ✓,{" "}
          <strong>NextJS: ✓</strong>
          <br />
          Follow me on{""} <a href="https://twitter.com/jgxdev">Twitter</a>
        </p>
        <p>
          (This web site is a part of my work on front-end development, here is
          the repositorie{" "}
          <a href="https://github.com/jgxdev/nextjs-blog">on GitHub</a>.)
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
