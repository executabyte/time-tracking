import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VacationRequestServiceBase } from "./base/vacationRequest.service.base";

@Injectable()
export class VacationRequestService extends VacationRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
