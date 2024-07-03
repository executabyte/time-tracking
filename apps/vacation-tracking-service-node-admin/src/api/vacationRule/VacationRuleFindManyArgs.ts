import { VacationRuleWhereInput } from "./VacationRuleWhereInput";
import { VacationRuleOrderByInput } from "./VacationRuleOrderByInput";

export type VacationRuleFindManyArgs = {
  where?: VacationRuleWhereInput;
  orderBy?: Array<VacationRuleOrderByInput>;
  skip?: number;
  take?: number;
};
