import React from "react";
import { Table, Button, Dropdown, Tag } from "antd";
import {
  MoreOutlined,
  EyeOutlined,
  CopyOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import type { PostItem } from "../../api/posts";
import { TableWrapper } from "../../Styled/AdvancedPostTable.styled";
import type { Props } from "../../Constants/Interfaces/AdvancedPostsTable.interface";

const AdvancedPostsTable: React.FC<Props> = ({
  data,
  loading,
  onView,
  onOpenDashboard,
}) => {
  const columns: ColumnsType<PostItem> = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      width: 80,
      fixed: "left",
    },
    {
      title: "User",
      dataIndex: "userId",
      width: 100,
      sorter: (a, b) => a.userId - b.userId,
    },
    {
      title: "Title",
      dataIndex: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
      ellipsis: true,
    },
    {
      title: "Status",
      render: (_, record) =>
        record.id % 2 === 0 ? (
          <Tag color="green">Published</Tag>
        ) : (
          <Tag color="orange">Draft</Tag>
        ),
    },
    {
      title: "Actions",
      width: 130,
      render: (_, record) => {
        const menuItems = [
          {
            key: "view",
            label: (
              <>
                <EyeOutlined /> View
              </>
            ),
            onClick: () => onView(record),
          },
          record.id % 2 === 0
            ? {
                key: "dashboard",
                label: (
                  <>
                    <BarChartOutlined /> Dashboard
                  </>
                ),
                onClick: () => onOpenDashboard(record),
              }
            : null,
          {
            key: "copy",
            label: (
              <>
                <CopyOutlined /> Copy ID
              </>
            ),
            onClick: () => navigator.clipboard.writeText(record.id.toString()),
          },
        ].filter(Boolean);

        return (
          <Dropdown
            menu={{ items: menuItems }}
            trigger={["click"]}
            placement="bottomLeft"
          >
            <Button icon={<MoreOutlined />} />
          </Dropdown>
        );
      },
    },
  ];

  return (
    <TableWrapper>
      <Table<PostItem>
        rowKey="id"
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "50"],
          position: ["bottomCenter"],
          showTotal: (total) => `Total ${total} items`,
          // align: "center", - not working
        }}
        scroll={{ y: 450 }}
      />
    </TableWrapper>
  );
};

export default AdvancedPostsTable;
