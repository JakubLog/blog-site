export interface article {
  title: string;
  id: string;
  content?: string;
  category: string;
  friendly?: string;
  sources?: {
    name: string;
    url: string;
  }[];
}