import React from "react";
import { Card, Divider } from "antd";
import { Button } from "react-bootstrap";
import styles from "./film-content.module.css";
import classnames from "classnames";
import Link from "next/link";

const FilmContent = ({ filmName }) => {
  return (
    <div>
      <Card
        cover={
          <React.Fragment>
            <img height={200} src={`/assets/slider/slide1.jpg`} style={{filter:"blur(1.5px)"}}/>
            <div className={classnames(styles.text_img_slider, "text-right")}>
              <h2 className={styles.white_text}>عنوان فیلم</h2>
              <div className="mb-2 rtl">
                <span><img src={"/imdb.svg"} width={32}/> 4.3</span>
                <Divider style={{backgroundColor:"white"}} type="vertical" />
                <span><img src={"/clock.svg"} width={20}/> 67 دقیقه</span>
                <Divider style={{backgroundColor:"white"}} type="vertical" />
                <span><img src={"/calendar.svg"} width={20}/> 1400</span>
              </div>
              <Link href={"/films/player/[id]"} as={"/films/player/film1"}>
                <Button variant="success">تماشای فیلم</Button>
              </Link>
            </div>
          </React.Fragment>
        }
      >
        <Card.Meta
          title={<h2 className="text-center">{filmName}</h2>}
          description={
            <p className="text-right">
              {" "}
              این فیلم مربوط به سایت تاپپ فیلم است که یکی از سایت های بزرگ در
              این زمینه است.
            </p>
          }
        />
      </Card>
    </div>
  );
};

export default FilmContent;
