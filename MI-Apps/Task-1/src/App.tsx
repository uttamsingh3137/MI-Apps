import { useState } from "react";
import HeaderTabs from "./components/HeaderTabs";
import FilterBar, { type FilterValues } from "./components/FilterBar";
import InvoiceTable from "./components/InvoiceTable";
import { dummyData } from "./data/dummyData";
import type { InvoiceData } from "./data/InvoiceData";
import "./App.css";
import InvoiceViewDrawer from "./components/InvoiceViewDrawer";

function App() {
  const [activeTab, setActiveTab] = useState("view");

  //sale/purchase ka toggle
  const [activeType, setActiveType] = useState<"sales" | "purchase">("sales");
  const [tableData, setTableData] = useState(dummyData);
  const [selectedInvoice, setSelectedInvoice] = useState<InvoiceData | null>(
    null
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleView = (row: InvoiceData) => {
    setSelectedInvoice(row);
    setIsDrawerOpen(true);
  };

  // 3 dropdown  FILTERS
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

  // search ka live update
  const handleSearchChange = (value: string) => {
    setTempFilters({ ...tempFilters, search: value });
    setActiveFilters({ ...activeFilters, search: value });
  };

  //dropdowns ka handle change
  const handleTempFilterChange = (field: keyof FilterValues, value: string) => {
    setTempFilters({
      ...tempFilters,
      [field]: value,
    });
  };

  const applyFilters = () => {
    setActiveFilters(tempFilters);
  };

  const clearAll = () => {
    const empty = {
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

  const handleDelete = (row: any) => {
    setTableData((prev) => prev.filter((item) => item.id !== row.id));
  };
  const handleEdit = (row: any) => {
    const newName = prompt("Enter new customer name:", row.customerName);

    if (!newName) return;

    setTableData((prev) =>
      prev.map((item) =>
        item.id === row.id ? { ...item, customerName: newName } : item
      )
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <HeaderTabs
        activeType={activeType}
        setActiveType={setActiveType}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "view" && (
        <>
          <FilterBar
            tempFilters={tempFilters}
            onTempFilterChange={handleTempFilterChange}
            onSearchChange={handleSearchChange}
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
        </>
      )}

      {activeTab === "import" && <h2>Import Data Page</h2>}
      {activeTab === "download" && <h2>Download Data Page</h2>}
    </div>
  );
}

export default App;
