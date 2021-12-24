import React, { useState } from "react";
import { Badge, Button, Space, Table, Modal } from "antd";
import useSWR from "swr";
import { toast } from "react-toastify";
import axios from "axios";
import classNames from "classnames";
import styles from "./films.module.css";
import ChangeFilmDataModal from "./ChangeFilmData";

const FilmsListAdminComponent = () => {
  const [pageSize, setPageSize] = useState(10);
  const [activePage, setActivePage] = useState(1);
  const [count, setCount] = useState(0);
  const [tableData, setTableData] = useState();

  const { error } = useSWR("/api/admin/films", (url) =>
    axios
      .get(url, { params: { pageSize, page: activePage } })
      .then((res) => {
          console.log(res.data)
        setTableData(res.data.films);
        setCount(res.data.count);
      })
      .catch((err) => toast.error("دریافت اطلاعات با مشکل مواجه شده است!"))
  );

  const handlePaginationChange = ({ page, pageSize }) => {
    axios
      .get("/api/admin/films", { params: { pageSize, page } })
      .then((res) => {
        setTableData(res.data.films);
        setCount(res.data.count);
      })
      .catch((err) => toast.error("دریافت اطلاعات با مشکل مواجه شده است!"));
  };

  const columns = [
    {
      title: "نام فیلم",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "سال ساخت",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "امتیاز",
      dataIndex: "score",
      key: "score",
    },
    
    {
      title: "",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="text"
            onClick={() =>
              Modal.info({
                title: `تغییر اطلاعات ${record.name}`,
                content: <ChangeFilmDataModal filmData={record}/>,
                style: { direction: "rtl" },
                className:"w-75",
                okText: "لغو",
                okType: "danger",
              })
            }
          >
            تغییر
          </Button>
        </Space>
      ),
    },
  ];

  if (error) {
    toast.error("دریافت اطلاعات با مشکل مواجه شد!");
    return <div>مشکلی رخ داده است!</div>;
  }
  if (!tableData) {
    return <div>درحال بارگذاری...</div>;
  }
  console.log(tableData);
  return (
    <div className={classNames(styles.main_table, "w-100")}>
      <Table
        pagination={{
          pageSize: pageSize,
          onChange: (page, pageSize) => {
            setActivePage(page);
            setPageSize(pageSize);
            handlePaginationChange({ page, pageSize });
          },
          total: count,
        }}
        rowKey={(record) => record._id}
        columns={columns}
        dataSource={tableData}
      />
    </div>
  );
};

export default FilmsListAdminComponent;
