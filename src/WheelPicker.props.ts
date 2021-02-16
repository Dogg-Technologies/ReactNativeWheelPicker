export interface IProps {
  data: Array<string>;
  isCyclic?: boolean;
  selectedItemTextColor?: string;
  selectedItemTextSize?: number;
  indicatorWidth?: number;
  hideIndicator?: boolean;
  indicatorColor?: string;
  itemTextColor?: string;
  itemTextSize?: number;
  selectedItem?: number;
  backgroundColor?: string;
  onItemSelected?: (index: number) => void;
  disabled?: boolean;
}
