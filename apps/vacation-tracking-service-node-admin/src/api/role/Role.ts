import { User } from "../user/User";

export type Role = {
  createdAt: Date;
  description: string | null;
  employee: string | null;
  id: string;
  manager: string | null;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
