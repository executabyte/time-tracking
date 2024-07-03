import { GroupUpdateManyWithoutCompaniesInput } from "./GroupUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  description?: string | null;
  groups?: GroupUpdateManyWithoutCompaniesInput;
  name?: string | null;
};
