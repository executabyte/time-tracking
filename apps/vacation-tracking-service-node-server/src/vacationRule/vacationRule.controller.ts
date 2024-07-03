import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VacationRuleService } from "./vacationRule.service";
import { VacationRuleControllerBase } from "./base/vacationRule.controller.base";

@swagger.ApiTags("vacationRules")
@common.Controller("vacationRules")
export class VacationRuleController extends VacationRuleControllerBase {
  constructor(
    protected readonly service: VacationRuleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
