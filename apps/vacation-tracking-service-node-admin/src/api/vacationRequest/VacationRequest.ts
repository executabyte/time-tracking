import { User } from "../user/User";

export type VacationRequest = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  reason: string | null;
  startDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
