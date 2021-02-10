import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import { client } from "../apollo/ApolloClient";
import Card from "./card";

export default function Home({ launches }) {
  return (
    <div className={styles.container}>
      <h1>SpaceX launches</h1>
      <div className={styles.grid}>
        {launches.map((launch) => {
          return <Card launch={launch} />;
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query GetLaunches {
        launchesPast(limit: 10) {
          id
          mission_name
          launch_date_local
          launch_site {
            site_name_long
          }
          links {
            article_link
            video_link
            mission_patch
          }
          rocket {
            rocket_name
          }
        }
      }
    `,
  });
  return {
    props: {
      launches: data.launchesPast,
    },
  };
}
