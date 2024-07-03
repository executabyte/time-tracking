import { VacationPolicyWhereInput } from "./VacationPolicyWhereInput";
import { VacationPolicyOrderByInput } from "./VacationPolicyOrderByInput";

export type VacationPolicyFindManyArgs = {
  where?: VacationPolicyWhereInput;
  orderBy?: Array<VacationPolicyOrderByInput>;
  skip?: number;
  take?: number;
};
