import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VacationRuleResolverBase } from "./base/vacationRule.resolver.base";
import { VacationRule } from "./base/VacationRule";
import { VacationRuleService } from "./vacationRule.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VacationRule)
export class VacationRuleResolver extends VacationRuleResolverBase {
  constructor(
    protected readonly service: VacationRuleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
