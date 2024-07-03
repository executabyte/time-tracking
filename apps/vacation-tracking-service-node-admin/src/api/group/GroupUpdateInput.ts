import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type GroupUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
};
