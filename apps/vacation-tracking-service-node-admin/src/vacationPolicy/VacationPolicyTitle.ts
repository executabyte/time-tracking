import { VacationPolicy as TVacationPolicy } from "../api/vacationPolicy/VacationPolicy";

export const VACATIONPOLICY_TITLE_FIELD = "name";

export const VacationPolicyTitle = (record: TVacationPolicy): string => {
  return record.name?.toString() || String(record.id);
};
