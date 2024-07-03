import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VacationPolicyResolverBase } from "./base/vacationPolicy.resolver.base";
import { VacationPolicy } from "./base/VacationPolicy";
import { VacationPolicyService } from "./vacationPolicy.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VacationPolicy)
export class VacationPolicyResolver extends VacationPolicyResolverBase {
  constructor(
    protected readonly service: VacationPolicyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
