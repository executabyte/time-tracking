/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  VacationRequest as PrismaVacationRequest,
  User as PrismaUser,
} from "@prisma/client";
import { VacationRequest } from "./VacationRequest";

export class VacationRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.VacationRequestCountArgs, "select">
  ): Promise<number> {
    return this.prisma.vacationRequest.count(args);
  }

  async vacationRequests(
    args: Prisma.VacationRequestFindManyArgs
  ): Promise<PrismaVacationRequest[]> {
    return this.prisma.vacationRequest.findMany(args);
  }
  async vacationRequest(
    args: Prisma.VacationRequestFindUniqueArgs
  ): Promise<PrismaVacationRequest | null> {
    return this.prisma.vacationRequest.findUnique(args);
  }
  async createVacationRequest(
    args: Prisma.VacationRequestCreateArgs
  ): Promise<PrismaVacationRequest> {
    return this.prisma.vacationRequest.create(args);
  }
  async updateVacationRequest(
    args: Prisma.VacationRequestUpdateArgs
  ): Promise<PrismaVacationRequest> {
    return this.prisma.vacationRequest.update(args);
  }
  async deleteVacationRequest(
    args: Prisma.VacationRequestDeleteArgs
  ): Promise<PrismaVacationRequest> {
    return this.prisma.vacationRequest.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.vacationRequest
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
  async ApproveVacationRequest(
    args: VacationRequest
  ): Promise<VacationRequest> {
    throw new Error("Not implemented");
  }
  async RejectVacationRequest(args: VacationRequest): Promise<VacationRequest> {
    throw new Error("Not implemented");
  }
}
