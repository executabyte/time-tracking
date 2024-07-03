import { TimesheetWhereInput } from "./TimesheetWhereInput";
import { TimesheetOrderByInput } from "./TimesheetOrderByInput";

export type TimesheetFindManyArgs = {
  where?: TimesheetWhereInput;
  orderBy?: Array<TimesheetOrderByInput>;
  skip?: number;
  take?: number;
};
