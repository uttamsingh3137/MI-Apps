import React from "react";
import { Button, Space, Select } from "antd";
import { FilterOutlined, ReloadOutlined } from "@ant-design/icons";
import { BodyInput, FilterBox, TitleInput, UserSelect } from "../../Styled/AdvancedFilters.styled";
import type { FilterValues } from "../../Constants/Interfaces/PostPage.interface";
import { USER_ID_OPTIONS } from "../../Constants/SelectOptionsArray/userIdOptions";




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
          {USER_ID_OPTIONS.map((u) => (
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
