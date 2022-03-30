export type SinglePost = {
  id: number;
  created_at: string;
  created_at_formatted?: string;
  title: string;
  content: string;
  favourited: boolean;
  favourite_count: number;
}

export type NetDetailInfoResponse = {
  data: SinglePost;
}
