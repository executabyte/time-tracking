import { VacationRule as TVacationRule } from "../api/vacationRule/VacationRule";

export const VACATIONRULE_TITLE_FIELD = "title";

export const VacationRuleTitle = (record: TVacationRule): string => {
  return record.title?.toString() || String(record.id);
};
