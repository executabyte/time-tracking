import { Timesheet as TTimesheet } from "../api/timesheet/Timesheet";

export const TIMESHEET_TITLE_FIELD = "id";

export const TimesheetTitle = (record: TTimesheet): string => {
  return record.id?.toString() || String(record.id);
};
