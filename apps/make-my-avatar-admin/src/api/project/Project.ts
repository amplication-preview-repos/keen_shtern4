import { Image } from "../image/Image";

export type Project = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  owner: string | null;
  images?: Array<Image>;
};
