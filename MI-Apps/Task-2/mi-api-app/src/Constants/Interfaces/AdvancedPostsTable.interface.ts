import type { PostItem } from "../../api/posts";

export interface Props {
  data: PostItem[];
  loading: boolean;
  onView: (item: PostItem) => void;
  onOpenDashboard: (item: PostItem) => void;
}