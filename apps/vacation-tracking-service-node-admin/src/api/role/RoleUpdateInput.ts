import { UserUpdateManyWithoutRolesInput } from "./UserUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  description?: string | null;
  employee?: string | null;
  manager?: string | null;
  name?: string | null;
  users?: UserUpdateManyWithoutRolesInput;
};
