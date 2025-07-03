import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Pagination, Space } from "antd";

const Users = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const pageSize = 3;

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${pageSize}`
      )
      .then((res) => {
        setUser(res.data);
        setHasNext(res.data.length === pageSize);
      });
  }, [page]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "City",
      dataIndex: ["address", "city"],
      key: "city",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "website",
    },
    {
      title: "Company",
      dataIndex: ["company", "name"],
      key: "company",
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Table
        dataSource={user}
        columns={columns}
        rowKey="id"
        pagination={false}
        bordered
      />

      <Space
        style={{ marginTop: 20, display: "flex", justifyContent: "center" }}
      >
        <Button
          onClick={() => setPage((prev) =>  rev - 1)}
          disabled={page === 1}
        >
          Prev
        </Button>
        <span style={{ fontWeight: "bold", fontSize: 16 }}>{page}</span>
        <Button onClick={() => setPage((prev) => prev + 1)} disabled={!hasNext}>
          Next
        </Button>
      </Space>
    </div>
  );
};

export default Users;
