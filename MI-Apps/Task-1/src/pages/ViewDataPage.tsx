import { useState } from "react";
import styled from "styled-components";
import FilterBar, { type FilterValues } from "../components/FilterBar";

const PageWrapper = styled.div`
  padding: 20px;
`;

function ViewDataPage() {
  const [filters, setFilters] = useState<FilterValues>({
    search: "",
    businessUnit: "",
    returnPeriod: "",
    invoiceType: "",
  });

  const handleClear = () => {
    setFilters({
      search: "",
      businessUnit: "",
      returnPeriod: "",
      invoiceType: "",
    });
  };

  return (
    <PageWrapper>
      <h2>View Data</h2>

      <FilterBar
        filters={filters}
        onFilterChange={setFilters}
        onClear={handleClear}
        activeType="sales"
      />
    </PageWrapper>
  );
}

export default ViewDataPage;
