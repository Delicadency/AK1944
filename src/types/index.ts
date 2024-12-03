export interface PostResponse {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

export interface Post {
  id: number;
  title: string;
  content: string;
}