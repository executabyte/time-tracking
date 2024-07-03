import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GroupListRelationFilter } from "../group/GroupListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CompanyWhereInput = {
  description?: StringNullableFilter;
  groups?: GroupListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
