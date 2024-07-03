import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VacationPolicyService } from "./vacationPolicy.service";
import { VacationPolicyControllerBase } from "./base/vacationPolicy.controller.base";

@swagger.ApiTags("vacationPolicies")
@common.Controller("vacationPolicies")
export class VacationPolicyController extends VacationPolicyControllerBase {
  constructor(
    protected readonly service: VacationPolicyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
