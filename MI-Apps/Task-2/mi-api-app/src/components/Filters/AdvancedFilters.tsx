import React from "react";
import { Input, Button, Space, Select } from "antd";
import { FilterOutlined, ReloadOutlined } from "@ant-design/icons";

interface Props {
  filters: any;
  setFilters: (obj: any) => void;
  onApply: () => void;
  onClear: () => void;
}

const AdvancedFilters: React.FC<Props> = ({ filters, setFilters, onApply, onClear }) => {
  return (
    <div
      style={{
        padding: 16,
        background: "#fff",
        marginBottom: 12,
        borderRadius: 8,
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
      }}
    >
      <Space wrap>

        <Input
          placeholder="Search title..."
          value={filters.title}
          onChange={(e) => setFilters({ ...filters, title: e.target.value })}
          style={{ width: 220 }}
        />

        <Select
          placeholder="User ID"
          allowClear
          style={{ width: 150 }}
          value={filters.userId}
          onChange={(v) => setFilters({ ...filters, userId: v })}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((u) => (
            <Select.Option key={u} value={u}>
              {u}
            </Select.Option>
          ))}
        </Select>

        <Input
          placeholder="Search in body..."
          value={filters.body}
          onChange={(e) => setFilters({ ...filters, body: e.target.value })}
          style={{ width: 240 }}
        />

        <Button type="primary" icon={<FilterOutlined />} onClick={onApply}>
          Apply
        </Button>

        <Button icon={<ReloadOutlined />} onClick={onClear}>
          Reset
        </Button>
      </Space>
    </div>
  );
};

export default AdvancedFilters;
