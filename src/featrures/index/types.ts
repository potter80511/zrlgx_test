export type NetPostListData = {
  data: PostList;
  meta: {
    pagination: {
      total: number;
    }
  };
}
export type PostList = {
  id: number;
  created_at: string;
  title: string;
  content: string;
  favourited: boolean;
}
