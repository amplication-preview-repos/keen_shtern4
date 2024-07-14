import { InputJsonValue } from "../../types";
import { ImageCreateNestedManyWithoutAvatarsInput } from "./ImageCreateNestedManyWithoutAvatarsInput";

export type AvatarCreateInput = {
  name?: string | null;
  description?: string | null;
  image?: InputJsonValue;
  images?: ImageCreateNestedManyWithoutAvatarsInput;
};
