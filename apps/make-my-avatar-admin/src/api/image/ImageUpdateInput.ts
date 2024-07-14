import { InputJsonValue } from "../../types";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { AvatarWhereUniqueInput } from "../avatar/AvatarWhereUniqueInput";

export type ImageUpdateInput = {
  prompt?: string | null;
  generatedImage?: InputJsonValue;
  project?: ProjectWhereUniqueInput | null;
  avatar?: AvatarWhereUniqueInput | null;
};
