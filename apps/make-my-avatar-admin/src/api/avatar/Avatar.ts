import { JsonValue } from "type-fest";
import { Image } from "../image/Image";

export type Avatar = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  image: JsonValue;
  images?: Array<Image>;
};
