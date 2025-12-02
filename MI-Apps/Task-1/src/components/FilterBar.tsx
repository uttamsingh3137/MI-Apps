import { useMemo, useState } from "react";
import { Row, Col, Input, Select, Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

export interface FilterValues {
  search: string;
  businessUnit: string | null;
  returnPeriod: string | null;
  invoiceType: string | null;
}

const FilterBar = ({
  tempFilters,
  onTempFilterChange,
  onSearchChange,
  onApply,
  onClear,
  activeType,
}: {
  tempFilters: FilterValues;
  onTempFilterChange: (f: keyof FilterValues, value: string) => void;
  onSearchChange: (v: string) => void;
  onApply: () => void;
  onClear: () => void;
  activeType: "sales" | "purchase";
}) => {
  const [showFilters, setShowFilters] = useState(true);

  const businessUnitOptions = useMemo(() => {
    return activeType === "sales"
      ? [
          { label: "Sales - BU 1", value: "sales-bu1" },
          { label: "Sales - BU 2", value: "sales-bu2" },
        ]
      : [
          { label: "Purchase - BU A", value: "purchase-bua" },
          { label: "Purchase - BU B", value: "purchase-bub" },
        ];
  }, [activeType]);

  const returnPeriodOptions = [
    { label: "Jan 2025", value: "2025-01" },
    { label: "Feb 2025", value: "2025-02" },
    { label: "Mar 2025", value: "2025-03" },
  ];

  const invoiceTypeOptions = useMemo(() => {
    return activeType === "sales"
      ? [
          { label: "B2B", value: "B2B" },
          { label: "B2C", value: "B2C" },
          { label: "Export", value: "EXPORT" },
        ]
      : [
          { label: "CDNR", value: "CDNR" },
          { label: "Debit Note", value: "DEBIT" },
          { label: "Import", value: "IMPORT" },
        ];
  }, [activeType]);

  return (
    <div
      style={{
        width: "100%",
        padding: 16,
        border: "1px solid #e5e5e5",
        borderRadius: 10,
        marginBottom: 20,
        background: "#fff",
      }}
    >

      <Row gutter={16} align="middle">
        <Col>
          <Button
            onClick={() => setShowFilters(!showFilters)}
            style={{ display: "flex", alignItems: "center", gap: 6 }}
          >
            Filter
            {showFilters ? (
              <UpOutlined style={{ fontSize: 12, opacity: 0.7 }} />
            ) : (
              <DownOutlined style={{ fontSize: 12, opacity: 0.7 }} />
            )}
          </Button>
        </Col>

        <Col flex="300px">
          <Input
            placeholder="Search by Invoice Number..."
            allowClear
            value={tempFilters.search}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{ height: 38, borderRadius: 6 }}
          />
        </Col>
      </Row>

      {showFilters && (
        <div style={{ marginTop: 20 }}>
          <Row gutter={16}>
            <Col flex="200px">
              <Select
                placeholder="Business Unit"
                value={tempFilters.businessUnit ?? undefined}
                onChange={(v) => onTempFilterChange("businessUnit", v)}
                allowClear
                style={{ width: "100%", height: 38 }}
                options={businessUnitOptions}
              />
            </Col>

            <Col flex="200px">
              <Select
                placeholder="Return Period"
                value={tempFilters.returnPeriod ?? undefined}
                onChange={(v) => onTempFilterChange("returnPeriod", v)}
                allowClear
                style={{ width: "100%", height: 38 }}
                options={returnPeriodOptions}
              />
            </Col>

            <Col flex="200px">
              <Select
                placeholder="Invoice Type"
                value={tempFilters.invoiceType ?? undefined}
                onChange={(v) => onTempFilterChange("invoiceType", v)}
                allowClear
                style={{ width: "100%", height: 38 }}
                options={invoiceTypeOptions}
              />
            </Col>
          </Row>

          <Row style={{ marginTop: 20 }}>
            <Col>
              <Button
                type="primary"
                onClick={onApply}
                style={{ marginRight: 10 }}
              >
                Apply Filter
              </Button>
              <Button onClick={onClear}>Clear All</Button>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
