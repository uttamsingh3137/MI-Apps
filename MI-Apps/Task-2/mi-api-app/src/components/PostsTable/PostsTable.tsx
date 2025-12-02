import React from "react";
import { Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { type PostItem } from "../../api/posts";

interface Props {
  data: PostItem[];
  loading: boolean;
  onView: (item: PostItem) => void;
}

const PostsTable: React.FC<Props> = ({ data, loading, onView }) => {

  const columns: ColumnsType<PostItem> = [
    { title: "ID", dataIndex: "id", width: 70 },
    { title: "User ID", dataIndex: "userId", width: 90 },
    { title: "Title", dataIndex: "title" },
    {
      title: "View",
      render: (_, record) => (
        <Button type="link" onClick={() => onView(record)}>
          View
        </Button>
      )
    }
  ];

  return (
    <Table<PostItem>
      rowKey="id"
      columns={columns}
      dataSource={data}
      loading={loading}
      pagination={{
        defaultPageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: ["10", "20", "50"]
      }}
    />
  );
};

export default PostsTable;
