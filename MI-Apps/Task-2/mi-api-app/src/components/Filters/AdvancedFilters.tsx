import React from "react";
import { Input, Button, Space, Select } from "antd";
import { FilterOutlined, ReloadOutlined } from "@ant-design/icons";
import styled from "styled-components";
import type { FilterValues } from "../../pages/Dashboard";


const FilterBox = styled.div`
  padding: 16px;
  background: #fff;
  margin-bottom: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const TitleInput = styled(Input)`
  width: 220px;
`;

const UserSelect = styled(Select)`
  width: 150px;
`;

const BodyInput = styled(Input)`
  width: 240px;
`;


interface Props {
  filters: FilterValues;
  setFilters: (obj: FilterValues) => void;
  onApply: () => void;
  onClear: () => void;
}


const AdvancedFilters: React.FC<Props> = ({
  filters,
  setFilters,
  onApply,
  onClear,
}) => {
  const update = (field: keyof FilterValues, value: string | number | null) => {
    setFilters({
      ...filters,
      [field]: value,
    });
  };

  return (
    <FilterBox>
      <Space wrap size="middle">

       
        <TitleInput
          placeholder="Search title..."
          value={filters.title}
          onChange={(e) => update("title", e.target.value)}
        />


        <UserSelect
          placeholder="User ID"
          allowClear
          value={filters.userId ?? undefined}
          onChange={(v) => update("userId", v ?? null)}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((u) => (
            <Select.Option key={u} value={u}>
              {u}
            </Select.Option>
          ))}
        </UserSelect>


        <BodyInput
          placeholder="Search in body..."
          value={filters.body}
          onChange={(e) => update("body", e.target.value)}
        />


        <Button type="primary" icon={<FilterOutlined />} onClick={onApply}>
          Apply
        </Button>


        <Button icon={<ReloadOutlined />} onClick={onClear}>
          Reset
        </Button>
      </Space>
    </FilterBox>
  );
};

export default AdvancedFilters;
