import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TimesheetCreateInput = {
  date?: Date | null;
  hoursWorked?: number | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
