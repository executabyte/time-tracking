import { User } from "../user/User";

export type Timesheet = {
  createdAt: Date;
  date: Date | null;
  hoursWorked: number | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
