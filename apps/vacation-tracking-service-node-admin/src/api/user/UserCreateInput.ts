import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TimesheetCreateNestedManyWithoutUsersInput } from "./TimesheetCreateNestedManyWithoutUsersInput";
import { VacationPolicyCreateNestedManyWithoutUsersInput } from "./VacationPolicyCreateNestedManyWithoutUsersInput";
import { VacationRequestCreateNestedManyWithoutUsersInput } from "./VacationRequestCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  role?: RoleWhereUniqueInput | null;
  roles: InputJsonValue;
  timesheets?: TimesheetCreateNestedManyWithoutUsersInput;
  username: string;
  vacationPolicies?: VacationPolicyCreateNestedManyWithoutUsersInput;
  vacationRequests?: VacationRequestCreateNestedManyWithoutUsersInput;
};
