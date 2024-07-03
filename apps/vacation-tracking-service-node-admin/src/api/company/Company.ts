import { Group } from "../group/Group";

export type Company = {
  createdAt: Date;
  description: string | null;
  groups?: Array<Group>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
