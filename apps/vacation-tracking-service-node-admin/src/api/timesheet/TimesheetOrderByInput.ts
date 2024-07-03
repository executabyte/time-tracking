import { SortOrder } from "../../util/SortOrder";

export type TimesheetOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  hoursWorked?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
