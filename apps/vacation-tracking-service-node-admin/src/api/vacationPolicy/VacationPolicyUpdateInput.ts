import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VacationPolicyUpdateInput = {
  description?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
