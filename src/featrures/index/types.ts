export type NetPostListData = {
  data: PostList;
}
export type PostList = {
  created_at: string;
  title: string;
  content: string;
  favourited: boolean;
}
