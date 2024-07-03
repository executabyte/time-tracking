import { SortOrder } from "../../util/SortOrder";

export type RoleOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  employee?: SortOrder;
  id?: SortOrder;
  manager?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
