export interface Collection {
  id: number;
  brand: string;
  image: string;
  category: string;
  title: string;
  description: string;
}

export interface TimeLine {
  time: string;
  title: string;
  description: string;
  image?: string;
}
