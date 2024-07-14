import { InputJsonValue } from "../../types";
import { ImageUpdateManyWithoutAvatarsInput } from "./ImageUpdateManyWithoutAvatarsInput";

export type AvatarUpdateInput = {
  name?: string | null;
  description?: string | null;
  image?: InputJsonValue;
  images?: ImageUpdateManyWithoutAvatarsInput;
};
