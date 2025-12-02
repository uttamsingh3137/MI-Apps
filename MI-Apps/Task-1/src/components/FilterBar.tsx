import { Row, Col, Input, Select, Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useMemo, useState } from "react";

export interface FilterValues {
  search: string;
  businessUnit: string | null;
  returnPeriod: string | null;
  invoiceType: string | null;
}

interface FilterBarProps {
  filters: FilterValues;
  onFilterChange: (filters: FilterValues) => void;
  onClear: () => void;
  onApply?: () => void;       
  activeType: "sales" | "purchase";
}

const Wrapper = styled.div`
  width: 100%;
  padding: 16px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  margin-bottom: 20px;
  background: #fff;
`;

const ToggleButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const IconWrapper = styled.span`
  font-size: 12px;
  opacity: 0.7;
`;

const StyledInput = styled(Input)`
  height: 38px;
  border-radius: 6px;
`;

const StyledSelect = styled(Select)`
  width: 100%;
  height: 38px;
`;

const SpacedRow = styled(Row)`
  margin-top: 20px;
`;

const FilterBar = ({
  filters,
  onFilterChange,
  onClear,
  onApply,           
  activeType,
}: FilterBarProps) => {
  const [showFilters, setShowFilters] = useState(true);

  const updateField = (field: keyof FilterValues, value: string | null | undefined) => {
    onFilterChange({
      ...filters,
      [field]: value ?? null,
    });
  };

  const businessUnitOptions = useMemo(
    () =>
      activeType === "sales"
        ? [
            { label: "Sales - BU 1", value: "sales-bu1" },
            { label: "Sales - BU 2", value: "sales-bu2" },
          ]
        : [
            { label: "Purchase - BU A", value: "purchase-bua" },
            { label: "Purchase - BU B", value: "purchase-bub" },
          ],
    [activeType]
  );

  const returnPeriodOptions = [
    { label: "Jan 2025", value: "2025-01" },
    { label: "Feb 2025", value: "2025-02" },
    { label: "Mar 2025", value: "2025-03" },
  ];

  const invoiceTypeOptions = useMemo(
    () =>
      activeType === "sales"
        ? [
            { label: "B2B", value: "B2B" },
            { label: "B2C", value: "B2C" },
            { label: "Export", value: "EXPORT" },
          ]
        : [
            { label: "CDNR", value: "CDNR" },
            { label: "Debit Note", value: "DEBIT" },
            { label: "Import", value: "IMPORT" },
          ],
    [activeType]
  );

  return (
    <Wrapper>

      <Row gutter={16} align="middle">
        <Col>
          <ToggleButton onClick={() => setShowFilters(!showFilters)}>
            Filter
            {showFilters ? (
              <IconWrapper><UpOutlined /></IconWrapper>
            ) : (
              <IconWrapper><DownOutlined /></IconWrapper>
            )}
          </ToggleButton>
        </Col>

        <Col flex="300px">
          <StyledInput
            placeholder="Search..."
            value={filters.search}
            onChange={(e) => updateField("search", e.target.value)}
            allowClear
          />
        </Col>
      </Row>

      {showFilters && (
        <>
          <SpacedRow gutter={16}>
            <Col flex="200px">
              <StyledSelect<string>
                placeholder="Business Unit"
                value={filters.businessUnit ?? undefined}
                allowClear
                options={businessUnitOptions}
                onChange={(v) => updateField("businessUnit", v)}
              />
            </Col>

            <Col flex="200px">
              <StyledSelect<string>
                placeholder="Return Period"
                value={filters.returnPeriod ?? undefined}
                allowClear
                options={returnPeriodOptions}
                onChange={(v) => updateField("returnPeriod", v)}
              />
            </Col>

            <Col flex="200px">
              <StyledSelect<string>
                placeholder="Invoice Type"
                value={filters.invoiceType ?? undefined}
                allowClear
                options={invoiceTypeOptions}
                onChange={(v) => updateField("invoiceType", v)}
              />
            </Col>
          </SpacedRow>

          <SpacedRow>
            <Col>
              
              {onApply && (
                <Button type="primary" onClick={onApply}>
                  Apply Filter
                </Button>
              )}

              <Button onClick={onClear} style={{ marginLeft: 8 }}>
                Clear All
              </Button>
            </Col>
          </SpacedRow>
        </>
      )}
    </Wrapper>
  );
};

export default FilterBar;
