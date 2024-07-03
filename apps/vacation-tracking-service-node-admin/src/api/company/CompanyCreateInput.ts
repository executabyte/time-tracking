import { GroupCreateNestedManyWithoutCompaniesInput } from "./GroupCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  description?: string | null;
  groups?: GroupCreateNestedManyWithoutCompaniesInput;
  name?: string | null;
};
