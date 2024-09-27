export interface AnnouncementType {
  boardId: number;
  writer: string;
  title: string;
  content: string;
  category: string | null;
  important: boolean;
  insertDate: string;
  insertId: string;
  updateDate: string | null;
  updateId: string | null;
}
