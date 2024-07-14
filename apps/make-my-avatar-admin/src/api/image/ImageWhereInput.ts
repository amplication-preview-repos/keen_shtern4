import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { AvatarWhereUniqueInput } from "../avatar/AvatarWhereUniqueInput";

export type ImageWhereInput = {
  id?: StringFilter;
  prompt?: StringNullableFilter;
  generatedImage?: JsonFilter;
  project?: ProjectWhereUniqueInput;
  avatar?: AvatarWhereUniqueInput;
};
