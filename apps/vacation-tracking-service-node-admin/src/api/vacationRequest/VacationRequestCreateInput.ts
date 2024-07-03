import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VacationRequestCreateInput = {
  endDate?: Date | null;
  reason?: string | null;
  startDate?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
