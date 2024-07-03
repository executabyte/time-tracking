import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VacationPolicyModuleBase } from "./base/vacationPolicy.module.base";
import { VacationPolicyService } from "./vacationPolicy.service";
import { VacationPolicyController } from "./vacationPolicy.controller";
import { VacationPolicyResolver } from "./vacationPolicy.resolver";

@Module({
  imports: [VacationPolicyModuleBase, forwardRef(() => AuthModule)],
  controllers: [VacationPolicyController],
  providers: [VacationPolicyService, VacationPolicyResolver],
  exports: [VacationPolicyService],
})
export class VacationPolicyModule {}
