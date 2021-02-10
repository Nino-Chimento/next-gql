import React from "react";
import styles from "../styles/Home.module.css";

const Card = ({ launch }) => {
  console.log(launch);
  return (
    <a key={launch.id} href={launch.links.video_link} className={styles.card}>
      <h3>{launch.mission_name}</h3>
      <p>
        <strong>Launch Date:</strong>{" "}
        {new Date(launch.launch_date_local).toLocaleDateString("en-US")}
      </p>
    </a>
  );
};

export default Card;
