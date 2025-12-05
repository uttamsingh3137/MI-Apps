import { useState } from "react";
import FilterBar from "../components/FilterBar";
import { PageWrapper } from "../Styled/ViewDataPage.styled";
import type { FilterValues } from "../Constants/Interface/FilterBar.interface";


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
