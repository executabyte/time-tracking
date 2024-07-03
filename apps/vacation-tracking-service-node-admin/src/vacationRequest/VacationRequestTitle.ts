import { VacationRequest as TVacationRequest } from "../api/vacationRequest/VacationRequest";

export const VACATIONREQUEST_TITLE_FIELD = "id";

export const VacationRequestTitle = (record: TVacationRequest): string => {
  return record.id?.toString() || String(record.id);
};
