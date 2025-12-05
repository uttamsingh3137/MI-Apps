import { useState } from "react";
import styled from "styled-components";
import HeaderTabs from "./components/HeaderTabs";
import FilterBar from "./components/FilterBar";
import InvoiceTable from "./components/InvoiceTable";
import { dummyData } from "./data/dummyData";
import type { InvoiceData } from "./data/InvoiceData";
import "./App.css";
import InvoiceViewDrawer from "./components/InvoiceViewDrawer";
import EditInvoiceDrawer from "./components/EditInvoiceDrawer";
import type { FilterValues } from "./Constants/Interface/FilterBar.interface";

const AppWrapper = styled.div`
  padding: 20px;
`;

function App() {
  const [activeTab, setActiveTab] = useState("view");

  const [activeType, setActiveType] = useState<"sales" | "purchase">("sales");

  const [tableData, setTableData] = useState<InvoiceData[]>(dummyData);

  const [selectedInvoice, setSelectedInvoice] = useState<InvoiceData | null>(
    null
  );

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [editRecord, setEditRecord] = useState<InvoiceData | null>(null);
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);

  const handleView = (row: InvoiceData) => {
    setSelectedInvoice(row);
    setIsDrawerOpen(true);
  };

  const [tempFilters, setTempFilters] = useState<FilterValues>({
    search: "",
    businessUnit: null,
    returnPeriod: null,
    invoiceType: null,
  });

  const [activeFilters, setActiveFilters] = useState<FilterValues>({
    search: "",
    businessUnit: "",
    returnPeriod: "",
    invoiceType: "",
  });

  // const handleSearchChange = (value: string) => {
  //   setTempFilters({ ...tempFilters, search: value });
  //   setActiveFilters({ ...activeFilters, search: value });
  // };

  // const handleTempFilterChange = (
  //   field: keyof FilterValues,
  //   value: string | null
  // ) => {
  //   setTempFilters({
  //     ...tempFilters,
  //     [field]: value,
  //   });
  // };

  const applyFilters = () => {
    setActiveFilters(tempFilters);
  };

  const clearAll = () => {
    const empty: FilterValues = {
      search: "",
      businessUnit: null,
      returnPeriod: null,
      invoiceType: null,
    };

    setTempFilters(empty);
    setActiveFilters(empty);
  };

  const filteredData = tableData
    .filter((item) => item.type === activeType)
    .filter((item) =>
      item.invoiceNo.toLowerCase().includes(activeFilters.search.toLowerCase())
    )
    .filter(
      (item) =>
        !activeFilters.businessUnit ||
        item.businessUnit === activeFilters.businessUnit
    )
    .filter(
      (item) =>
        !activeFilters.returnPeriod ||
        item.returnPeriod === activeFilters.returnPeriod
    )
    .filter(
      (item) =>
        !activeFilters.invoiceType ||
        item.invoiceType === activeFilters.invoiceType
    );

  const handleEdit = (row: InvoiceData) => {
    setEditRecord(row);
    setIsEditDrawerOpen(true);
  };
  const handleDelete = (row: InvoiceData) => {
    setTableData((prev) => prev.filter((item) => item.id !== row.id));
  };

  return (
    <AppWrapper>
      <HeaderTabs
        activeType={activeType}
        setActiveType={setActiveType}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "view" && (
        <>
          <FilterBar
            filters={tempFilters}
            onFilterChange={setTempFilters}
            onApply={applyFilters}
            onClear={clearAll}
            activeType={activeType}
          />

          <InvoiceTable
            data={filteredData}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onView={handleView}
          />

          <InvoiceViewDrawer
            open={isDrawerOpen}
            data={selectedInvoice}
            onClose={() => setIsDrawerOpen(false)}
          />

          <EditInvoiceDrawer
            open={isEditDrawerOpen}
            record={editRecord}
            onClose={() => setIsEditDrawerOpen(false)}
            onSave={(updated) => {
              setTableData((prev) =>
                prev.map((item) => (item.id === updated.id ? updated : item))
              );
              setIsEditDrawerOpen(false);
            }}
          />
        </>
      )}

      {activeTab === "import" && <h2>Import Data Page</h2>}
      {activeTab === "download" && <h2>Download Data Page</h2>}
    </AppWrapper>
  );
}

export default App;
