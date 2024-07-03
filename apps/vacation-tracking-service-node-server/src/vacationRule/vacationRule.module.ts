import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VacationRuleModuleBase } from "./base/vacationRule.module.base";
import { VacationRuleService } from "./vacationRule.service";
import { VacationRuleController } from "./vacationRule.controller";
import { VacationRuleResolver } from "./vacationRule.resolver";

@Module({
  imports: [VacationRuleModuleBase, forwardRef(() => AuthModule)],
  controllers: [VacationRuleController],
  providers: [VacationRuleService, VacationRuleResolver],
  exports: [VacationRuleService],
})
export class VacationRuleModule {}
