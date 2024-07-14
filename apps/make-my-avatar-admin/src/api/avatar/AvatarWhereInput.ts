import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";

export type AvatarWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  image?: JsonFilter;
  images?: ImageListRelationFilter;
};
