import React from "react";
import styles from "./film-card.module.css";
import { Card } from "react-bootstrap";
import Link from "next/link";

const FilmCard = () => {
  return (
    <div className="text-center">
      <Link href={"/films/[slug]"} as={"/films/film1"}>
        <div className={styles.card_font_hover}>
          <Card className={styles.card}>
            <Card.Img
              className={styles.img_shadow}
              src={"/assets/films/film1.jpg"}
              alt="image 1"
            />
            <p>نام فیلم</p>
          </Card>
        </div>
      </Link>
    </div>
  );
};

export default FilmCard;
