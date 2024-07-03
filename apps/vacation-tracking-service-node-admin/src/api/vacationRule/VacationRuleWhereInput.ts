import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type VacationRuleWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  policy?: StringNullableFilter;
  title?: StringNullableFilter;
};
