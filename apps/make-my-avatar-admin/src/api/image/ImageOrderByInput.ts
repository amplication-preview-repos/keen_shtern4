import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  prompt?: SortOrder;
  generatedImage?: SortOrder;
  projectId?: SortOrder;
  avatarId?: SortOrder;
};
