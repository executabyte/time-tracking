import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VacationRuleServiceBase } from "./base/vacationRule.service.base";

@Injectable()
export class VacationRuleService extends VacationRuleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
