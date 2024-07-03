import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { TimesheetListRelationFilter } from "../timesheet/TimesheetListRelationFilter";
import { VacationPolicyListRelationFilter } from "../vacationPolicy/VacationPolicyListRelationFilter";
import { VacationRequestListRelationFilter } from "../vacationRequest/VacationRequestListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  role?: RoleWhereUniqueInput;
  timesheets?: TimesheetListRelationFilter;
  username?: StringFilter;
  vacationPolicies?: VacationPolicyListRelationFilter;
  vacationRequests?: VacationRequestListRelationFilter;
};
