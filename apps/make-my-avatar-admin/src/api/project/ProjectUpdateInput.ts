import { ImageUpdateManyWithoutProjectsInput } from "./ImageUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  name?: string | null;
  description?: string | null;
  owner?: string | null;
  images?: ImageUpdateManyWithoutProjectsInput;
};
