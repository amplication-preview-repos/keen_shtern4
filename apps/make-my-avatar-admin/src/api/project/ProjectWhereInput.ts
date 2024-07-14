import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  owner?: StringNullableFilter;
  images?: ImageListRelationFilter;
};
