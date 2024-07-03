import { Role } from "../role/Role";
import { JsonValue } from "type-fest";
import { Timesheet } from "../timesheet/Timesheet";
import { VacationPolicy } from "../vacationPolicy/VacationPolicy";
import { VacationRequest } from "../vacationRequest/VacationRequest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  role?: Role | null;
  roles: JsonValue;
  timesheets?: Array<Timesheet>;
  updatedAt: Date;
  username: string;
  vacationPolicies?: Array<VacationPolicy>;
  vacationRequests?: Array<VacationRequest>;
};
