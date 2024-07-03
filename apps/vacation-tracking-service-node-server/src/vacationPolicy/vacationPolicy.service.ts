import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VacationPolicyServiceBase } from "./base/vacationPolicy.service.base";

@Injectable()
export class VacationPolicyService extends VacationPolicyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
