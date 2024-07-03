import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type RoleWhereInput = {
  description?: StringNullableFilter;
  employee?: StringNullableFilter;
  id?: StringFilter;
  manager?: StringNullableFilter;
  name?: StringNullableFilter;
  users?: UserListRelationFilter;
};
