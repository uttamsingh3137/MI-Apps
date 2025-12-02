import React, { useState } from "react";
import FilterBar, { type FilterValues } from "../components/FilterBar";

function ViewDataPage() {

  const [filters, setFilters] = useState<FilterValues>({
    search: "",
    businessUnit: "",
    returnPeriod: "",
    invoiceType: "",
  });

  

  const [activeType, setActiveType] = useState<"sales" | "purchase">("sales");


  const handleClear = () => {
    setFilters({
      search: "",
      businessUnit: "",
      returnPeriod: "",
      invoiceType: "",
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>View Data</h2>

      <FilterBar
        filters={filters}
        onFilterChange={setFilters}
        onClear={handleClear}
        activeType={activeType}
      />
    </div>
  );
}

export default ViewDataPage;
