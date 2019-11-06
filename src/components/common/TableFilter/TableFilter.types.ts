export type filterOption = {
  label: string;
  isActive: boolean;
  value: string;
}

export type TableFilterProps = {
  filterOptions: filterOption[];
  onClick: (value: string) => void
}