export type NetPostListData = {
  data: PostList;
  meta: {
    pagination: {
      total: number;
    }
  };
}
export type PostList = {
  created_at: string;
  title: string;
  content: string;
  favourited: boolean;
}
