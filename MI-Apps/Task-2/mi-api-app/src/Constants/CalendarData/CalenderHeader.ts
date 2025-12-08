export interface Props {
  month: Date;
  onPrev: () => void;
  onNext: () => void;
  onRefresh: () => void;
}