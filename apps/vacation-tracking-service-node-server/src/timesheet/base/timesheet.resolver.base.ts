/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Timesheet } from "./Timesheet";
import { TimesheetCountArgs } from "./TimesheetCountArgs";
import { TimesheetFindManyArgs } from "./TimesheetFindManyArgs";
import { TimesheetFindUniqueArgs } from "./TimesheetFindUniqueArgs";
import { CreateTimesheetArgs } from "./CreateTimesheetArgs";
import { UpdateTimesheetArgs } from "./UpdateTimesheetArgs";
import { DeleteTimesheetArgs } from "./DeleteTimesheetArgs";
import { User } from "../../user/base/User";
import { TimesheetService } from "../timesheet.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Timesheet)
export class TimesheetResolverBase {
  constructor(
    protected readonly service: TimesheetService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Timesheet",
    action: "read",
    possession: "any",
  })
  async _timesheetsMeta(
    @graphql.Args() args: TimesheetCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Timesheet])
  @nestAccessControl.UseRoles({
    resource: "Timesheet",
    action: "read",
    possession: "any",
  })
  async timesheets(
    @graphql.Args() args: TimesheetFindManyArgs
  ): Promise<Timesheet[]> {
    return this.service.timesheets(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Timesheet, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Timesheet",
    action: "read",
    possession: "own",
  })
  async timesheet(
    @graphql.Args() args: TimesheetFindUniqueArgs
  ): Promise<Timesheet | null> {
    const result = await this.service.timesheet(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Timesheet)
  @nestAccessControl.UseRoles({
    resource: "Timesheet",
    action: "create",
    possession: "any",
  })
  async createTimesheet(
    @graphql.Args() args: CreateTimesheetArgs
  ): Promise<Timesheet> {
    return await this.service.createTimesheet({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Timesheet)
  @nestAccessControl.UseRoles({
    resource: "Timesheet",
    action: "update",
    possession: "any",
  })
  async updateTimesheet(
    @graphql.Args() args: UpdateTimesheetArgs
  ): Promise<Timesheet | null> {
    try {
      return await this.service.updateTimesheet({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Timesheet)
  @nestAccessControl.UseRoles({
    resource: "Timesheet",
    action: "delete",
    possession: "any",
  })
  async deleteTimesheet(
    @graphql.Args() args: DeleteTimesheetArgs
  ): Promise<Timesheet | null> {
    try {
      return await this.service.deleteTimesheet(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Timesheet): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Timesheet)
  async ApproveTimesheet(
    @graphql.Args()
    args: Timesheet
  ): Promise<Timesheet> {
    return this.service.ApproveTimesheet(args);
  }

  @graphql.Mutation(() => Timesheet)
  async RejectTimesheet(
    @graphql.Args()
    args: Timesheet
  ): Promise<Timesheet> {
    return this.service.RejectTimesheet(args);
  }
}
