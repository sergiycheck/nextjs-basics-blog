export interface PostData {
  id: string;
  title: string;
  date: string;
}

export interface PostDataWithContent extends PostData {
  contentHtml: string;
}
