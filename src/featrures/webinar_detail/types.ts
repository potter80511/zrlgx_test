export type SinglePost = {
  id: number;
  created_at: string;
  created_at_formatted?: string;
  title: string;
  content: string;
  favourited: boolean;
}

export type NetDetailInfoResponse = {
  data: SinglePost;
}
