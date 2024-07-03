import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VacationRequestResolverBase } from "./base/vacationRequest.resolver.base";
import { VacationRequest } from "./base/VacationRequest";
import { VacationRequestService } from "./vacationRequest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VacationRequest)
export class VacationRequestResolver extends VacationRequestResolverBase {
  constructor(
    protected readonly service: VacationRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
