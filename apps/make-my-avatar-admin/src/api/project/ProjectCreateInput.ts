import { ImageCreateNestedManyWithoutProjectsInput } from "./ImageCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  name?: string | null;
  description?: string | null;
  owner?: string | null;
  images?: ImageCreateNestedManyWithoutProjectsInput;
};
