import { UserCreateNestedManyWithoutRolesInput } from "./UserCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  description?: string | null;
  employee?: string | null;
  manager?: string | null;
  name?: string | null;
  users?: UserCreateNestedManyWithoutRolesInput;
};
