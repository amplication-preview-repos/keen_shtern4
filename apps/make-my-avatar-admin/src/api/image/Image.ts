import { JsonValue } from "type-fest";
import { Project } from "../project/Project";
import { Avatar } from "../avatar/Avatar";

export type Image = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  prompt: string | null;
  generatedImage: JsonValue;
  project?: Project | null;
  avatar?: Avatar | null;
};
