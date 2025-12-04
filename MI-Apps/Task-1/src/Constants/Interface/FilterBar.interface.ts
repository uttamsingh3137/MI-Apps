export interface FilterValues {
  search: string;
  businessUnit: string | null;
  returnPeriod: string | null;
  invoiceType: string | null;
}

export interface FilterBarProps {
  filters: FilterValues;
  onFilterChange: (filters: FilterValues) => void;
  onClear: () => void;
  onApply?: () => void;       
  activeType: "sales" | "purchase";
}