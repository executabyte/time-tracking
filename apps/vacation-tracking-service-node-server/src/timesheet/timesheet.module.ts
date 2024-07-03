import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TimesheetModuleBase } from "./base/timesheet.module.base";
import { TimesheetService } from "./timesheet.service";
import { TimesheetController } from "./timesheet.controller";
import { TimesheetResolver } from "./timesheet.resolver";

@Module({
  imports: [TimesheetModuleBase, forwardRef(() => AuthModule)],
  controllers: [TimesheetController],
  providers: [TimesheetService, TimesheetResolver],
  exports: [TimesheetService],
})
export class TimesheetModule {}
