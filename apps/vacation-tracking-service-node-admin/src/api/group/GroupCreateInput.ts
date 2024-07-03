import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type GroupCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
};
