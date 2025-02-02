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
import { Group } from "./Group";
import { GroupCountArgs } from "./GroupCountArgs";
import { GroupFindManyArgs } from "./GroupFindManyArgs";
import { GroupFindUniqueArgs } from "./GroupFindUniqueArgs";
import { CreateGroupArgs } from "./CreateGroupArgs";
import { UpdateGroupArgs } from "./UpdateGroupArgs";
import { DeleteGroupArgs } from "./DeleteGroupArgs";
import { Company } from "../../company/base/Company";
import { GroupService } from "../group.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Group)
export class GroupResolverBase {
  constructor(
    protected readonly service: GroupService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "read",
    possession: "any",
  })
  async _groupsMeta(
    @graphql.Args() args: GroupCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Group])
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "read",
    possession: "any",
  })
  async groups(@graphql.Args() args: GroupFindManyArgs): Promise<Group[]> {
    return this.service.groups(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Group, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "read",
    possession: "own",
  })
  async group(
    @graphql.Args() args: GroupFindUniqueArgs
  ): Promise<Group | null> {
    const result = await this.service.group(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Group)
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "create",
    possession: "any",
  })
  async createGroup(@graphql.Args() args: CreateGroupArgs): Promise<Group> {
    return await this.service.createGroup({
      ...args,
      data: {
        ...args.data,

        company: args.data.company
          ? {
              connect: args.data.company,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Group)
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "update",
    possession: "any",
  })
  async updateGroup(
    @graphql.Args() args: UpdateGroupArgs
  ): Promise<Group | null> {
    try {
      return await this.service.updateGroup({
        ...args,
        data: {
          ...args.data,

          company: args.data.company
            ? {
                connect: args.data.company,
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

  @graphql.Mutation(() => Group)
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "delete",
    possession: "any",
  })
  async deleteGroup(
    @graphql.Args() args: DeleteGroupArgs
  ): Promise<Group | null> {
    try {
      return await this.service.deleteGroup(args);
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
  @graphql.ResolveField(() => Company, {
    nullable: true,
    name: "company",
  })
  @nestAccessControl.UseRoles({
    resource: "Company",
    action: "read",
    possession: "any",
  })
  async getCompany(@graphql.Parent() parent: Group): Promise<Company | null> {
    const result = await this.service.getCompany(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
