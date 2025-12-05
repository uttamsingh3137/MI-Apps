import type { FilterValues } from "./PostPage.interface";

export interface Props {
  filters: FilterValues;
  setFilters: (obj: FilterValues) => void;
  onApply: () => void;
  onClear: () => void;
}