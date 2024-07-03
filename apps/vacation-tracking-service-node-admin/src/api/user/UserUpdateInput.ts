import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TimesheetUpdateManyWithoutUsersInput } from "./TimesheetUpdateManyWithoutUsersInput";
import { VacationPolicyUpdateManyWithoutUsersInput } from "./VacationPolicyUpdateManyWithoutUsersInput";
import { VacationRequestUpdateManyWithoutUsersInput } from "./VacationRequestUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  role?: RoleWhereUniqueInput | null;
  roles?: InputJsonValue;
  timesheets?: TimesheetUpdateManyWithoutUsersInput;
  username?: string;
  vacationPolicies?: VacationPolicyUpdateManyWithoutUsersInput;
  vacationRequests?: VacationRequestUpdateManyWithoutUsersInput;
};
