import { VacationRequestWhereInput } from "./VacationRequestWhereInput";
import { VacationRequestOrderByInput } from "./VacationRequestOrderByInput";

export type VacationRequestFindManyArgs = {
  where?: VacationRequestWhereInput;
  orderBy?: Array<VacationRequestOrderByInput>;
  skip?: number;
  take?: number;
};
