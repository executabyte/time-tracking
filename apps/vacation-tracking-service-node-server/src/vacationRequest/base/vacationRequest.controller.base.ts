/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { VacationRequestService } from "../vacationRequest.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { VacationRequestCreateInput } from "./VacationRequestCreateInput";
import { VacationRequest } from "./VacationRequest";
import { VacationRequestFindManyArgs } from "./VacationRequestFindManyArgs";
import { VacationRequestWhereUniqueInput } from "./VacationRequestWhereUniqueInput";
import { VacationRequestUpdateInput } from "./VacationRequestUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class VacationRequestControllerBase {
  constructor(
    protected readonly service: VacationRequestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: VacationRequest })
  @nestAccessControl.UseRoles({
    resource: "VacationRequest",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createVacationRequest(
    @common.Body() data: VacationRequestCreateInput
  ): Promise<VacationRequest> {
    return await this.service.createVacationRequest({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        endDate: true,
        id: true,
        reason: true,
        startDate: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [VacationRequest] })
  @ApiNestedQuery(VacationRequestFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "VacationRequest",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async vacationRequests(
    @common.Req() request: Request
  ): Promise<VacationRequest[]> {
    const args = plainToClass(VacationRequestFindManyArgs, request.query);
    return this.service.vacationRequests({
      ...args,
      select: {
        createdAt: true,
        endDate: true,
        id: true,
        reason: true,
        startDate: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: VacationRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "VacationRequest",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async vacationRequest(
    @common.Param() params: VacationRequestWhereUniqueInput
  ): Promise<VacationRequest | null> {
    const result = await this.service.vacationRequest({
      where: params,
      select: {
        createdAt: true,
        endDate: true,
        id: true,
        reason: true,
        startDate: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: VacationRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "VacationRequest",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateVacationRequest(
    @common.Param() params: VacationRequestWhereUniqueInput,
    @common.Body() data: VacationRequestUpdateInput
  ): Promise<VacationRequest | null> {
    try {
      return await this.service.updateVacationRequest({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          endDate: true,
          id: true,
          reason: true,
          startDate: true,
          status: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: VacationRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "VacationRequest",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteVacationRequest(
    @common.Param() params: VacationRequestWhereUniqueInput
  ): Promise<VacationRequest | null> {
    try {
      return await this.service.deleteVacationRequest({
        where: params,
        select: {
          createdAt: true,
          endDate: true,
          id: true,
          reason: true,
          startDate: true,
          status: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Post("/vacation-request/:id/approve")
  @swagger.ApiOkResponse({
    type: VacationRequest,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ApproveVacationRequest(
    @common.Body()
    body: VacationRequest
  ): Promise<VacationRequest> {
    return this.service.ApproveVacationRequest(body);
  }

  @common.Post("/vacation-request/:id/reject")
  @swagger.ApiOkResponse({
    type: VacationRequest,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async RejectVacationRequest(
    @common.Body()
    body: VacationRequest
  ): Promise<VacationRequest> {
    return this.service.RejectVacationRequest(body);
  }
}
