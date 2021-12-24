import React, { useState } from "react";
import styles from "./film-comment.module.css";
import { Comment, Avatar, Form, Button, List, Input, Divider } from "antd";
import { Card, Row } from "react-bootstrap";
import moment from "moment";
moment.locale("fa");

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    className="w-100 text-right rtl"
    dataSource={comments}
    header={`${comments.length} پاسخ`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment className="w-100" {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <React.Fragment>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item className="text-right">
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        اضافه کردن نظر
      </Button>
    </Form.Item>
  </React.Fragment>
);

const FilmComment = () => {
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value) {
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      setComments([
        ...comments,
        {
          author: "کاربر شماره 1",
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content: <p>{value}</p>,
          datetime: moment().fromNow(),
        },
      ]);
    }, 1000);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Card className="rtl mt-5">
    <Card.Body>
    <Divider>نظرات فیلم</Divider>
        <Row className="w-100 p-5 rtl">
          <div className="w-100">
            {comments.length > 0 && <CommentList comments={comments} />}
          </div>
          <Comment
            className="w-100 rtl"
            content={
              <Editor
                onChange={handleChange}
                onSubmit={handleSubmit}
                submitting={submitting}
                value={value}
              />
            }
          />
        </Row>
      </Card.Body>
    </Card>
  );
};

export default FilmComment;
