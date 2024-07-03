import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TimesheetWhereInput = {
  date?: DateTimeNullableFilter;
  hoursWorked?: IntNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
