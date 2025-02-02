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
import { UserService } from "../user.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserCreateInput } from "./UserCreateInput";
import { User } from "./User";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateInput } from "./UserUpdateInput";
import { TimesheetFindManyArgs } from "../../timesheet/base/TimesheetFindManyArgs";
import { Timesheet } from "../../timesheet/base/Timesheet";
import { TimesheetWhereUniqueInput } from "../../timesheet/base/TimesheetWhereUniqueInput";
import { VacationPolicyFindManyArgs } from "../../vacationPolicy/base/VacationPolicyFindManyArgs";
import { VacationPolicy } from "../../vacationPolicy/base/VacationPolicy";
import { VacationPolicyWhereUniqueInput } from "../../vacationPolicy/base/VacationPolicyWhereUniqueInput";
import { VacationRequestFindManyArgs } from "../../vacationRequest/base/VacationRequestFindManyArgs";
import { VacationRequest } from "../../vacationRequest/base/VacationRequest";
import { VacationRequestWhereUniqueInput } from "../../vacationRequest/base/VacationRequestWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.createUser({
      data: {
        ...data,

        role: data.role
          ? {
              connect: data.role,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,

        role: {
          select: {
            id: true,
          },
        },

        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async users(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.users({
      ...args,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,

        role: {
          select: {
            id: true,
          },
        },

        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async user(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,

        role: {
          select: {
            id: true,
          },
        },

        roles: true,
        updatedAt: true,
        username: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.updateUser({
        where: params,
        data: {
          ...data,

          role: data.role
            ? {
                connect: data.role,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,

          role: {
            select: {
              id: true,
            },
          },

          roles: true,
          updatedAt: true,
          username: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUser(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.deleteUser({
        where: params,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,

          role: {
            select: {
              id: true,
            },
          },

          roles: true,
          updatedAt: true,
          username: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/timesheets")
  @ApiNestedQuery(TimesheetFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Timesheet",
    action: "read",
    possession: "any",
  })
  async findTimesheets(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Timesheet[]> {
    const query = plainToClass(TimesheetFindManyArgs, request.query);
    const results = await this.service.findTimesheets(params.id, {
      ...query,
      select: {
        createdAt: true,
        date: true,
        hoursWorked: true,
        id: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/timesheets")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectTimesheets(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: TimesheetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      timesheets: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/timesheets")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateTimesheets(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: TimesheetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      timesheets: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/timesheets")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectTimesheets(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: TimesheetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      timesheets: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/vacationPolicies")
  @ApiNestedQuery(VacationPolicyFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "VacationPolicy",
    action: "read",
    possession: "any",
  })
  async findVacationPolicies(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<VacationPolicy[]> {
    const query = plainToClass(VacationPolicyFindManyArgs, request.query);
    const results = await this.service.findVacationPolicies(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/vacationPolicies")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectVacationPolicies(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: VacationPolicyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      vacationPolicies: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/vacationPolicies")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateVacationPolicies(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: VacationPolicyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      vacationPolicies: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/vacationPolicies")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectVacationPolicies(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: VacationPolicyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      vacationPolicies: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/vacationRequests")
  @ApiNestedQuery(VacationRequestFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "VacationRequest",
    action: "read",
    possession: "any",
  })
  async findVacationRequests(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<VacationRequest[]> {
    const query = plainToClass(VacationRequestFindManyArgs, request.query);
    const results = await this.service.findVacationRequests(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/vacationRequests")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectVacationRequests(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: VacationRequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      vacationRequests: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/vacationRequests")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateVacationRequests(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: VacationRequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      vacationRequests: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/vacationRequests")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectVacationRequests(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: VacationRequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      vacationRequests: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}
