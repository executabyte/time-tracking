import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VacationPolicyCreateInput = {
  description?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
