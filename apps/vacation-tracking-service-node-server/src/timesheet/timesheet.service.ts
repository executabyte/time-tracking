import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimesheetServiceBase } from "./base/timesheet.service.base";

@Injectable()
export class TimesheetService extends TimesheetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
