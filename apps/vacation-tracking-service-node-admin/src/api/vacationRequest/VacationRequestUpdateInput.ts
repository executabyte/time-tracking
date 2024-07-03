import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VacationRequestUpdateInput = {
  endDate?: Date | null;
  reason?: string | null;
  startDate?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
