import { Row, Col, Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useMemo, useState } from "react";
import { IconWrapper, SpacedRow, StyledInput, StyledSelect, ToggleButton, Wrapper } from "../Styled/FilterBar.styled";
import type { FilterBarProps, FilterValues } from "../Constants/Interface/FilterBar.interface";




const FilterBar = ({
  filters,
  onFilterChange,
  onClear,
  onApply,           
  activeType,
}: FilterBarProps) => {
  const [showFilters, setShowFilters] = useState(true);

  const updateField = (field: keyof FilterValues, value: unknown ) => {
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
                onChange={(v) => updateField("businessUnit", v )}
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
