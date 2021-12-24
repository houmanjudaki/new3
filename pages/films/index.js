import React from "react";
import FilmCard from "../../components/films/film-card";
import { Row, Col } from "react-bootstrap";
import { Radio, Divider, Pagination } from "antd";

const FilmsListPage = () => {
  return (
    <div>
      <div className="w-100 p-3 text-center rtl">
        <Radio.Group defaultValue="a" buttonStyle="solid">
          <Radio.Button value="a">علمی تخیلی</Radio.Button>
          <Radio.Button value="b">مستند</Radio.Button>
          <Radio.Button value="c">انیمیشن</Radio.Button>
          <Radio.Button value="d">اکشن</Radio.Button>
        </Radio.Group>
        <p className="mt-3">
          شما می توانید بر اساس ژانر مورد نظر خود فیلم ها را دسته بندی کنید.
        </p>
      </div>
      <Divider />
      <Row className="w-100 p-3 text-center rtl">
        <Col xl={2} lg={2} md={3} sm={4} xs={6}>
          <FilmCard />
        </Col>
      </Row>
      <div className="text-center">
        <Pagination size="small" total={50} pageSize={5}/>
      </div>
    </div>
  );
};

export default FilmsListPage;
