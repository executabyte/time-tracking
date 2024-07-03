import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VacationRequestWhereInput = {
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  reason?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
