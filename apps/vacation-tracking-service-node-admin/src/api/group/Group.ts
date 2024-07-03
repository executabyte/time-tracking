import { Company } from "../company/Company";

export type Group = {
  company?: Company | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
