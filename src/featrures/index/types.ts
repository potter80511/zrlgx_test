import { SinglePost } from "../webinar_detail/types";

export type NetPostListData = {
  data: SinglePost[];
  meta: {
    pagination: {
      total: number;
    }
  };
}
