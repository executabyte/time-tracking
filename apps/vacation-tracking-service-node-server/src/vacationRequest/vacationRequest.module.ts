import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VacationRequestModuleBase } from "./base/vacationRequest.module.base";
import { VacationRequestService } from "./vacationRequest.service";
import { VacationRequestController } from "./vacationRequest.controller";
import { VacationRequestResolver } from "./vacationRequest.resolver";

@Module({
  imports: [VacationRequestModuleBase, forwardRef(() => AuthModule)],
  controllers: [VacationRequestController],
  providers: [VacationRequestService, VacationRequestResolver],
  exports: [VacationRequestService],
})
export class VacationRequestModule {}
