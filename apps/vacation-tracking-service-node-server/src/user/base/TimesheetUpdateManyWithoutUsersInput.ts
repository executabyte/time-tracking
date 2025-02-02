/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TimesheetWhereUniqueInput } from "../../timesheet/base/TimesheetWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TimesheetUpdateManyWithoutUsersInput {
  @Field(() => [TimesheetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TimesheetWhereUniqueInput],
  })
  connect?: Array<TimesheetWhereUniqueInput>;

  @Field(() => [TimesheetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TimesheetWhereUniqueInput],
  })
  disconnect?: Array<TimesheetWhereUniqueInput>;

  @Field(() => [TimesheetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TimesheetWhereUniqueInput],
  })
  set?: Array<TimesheetWhereUniqueInput>;
}

export { TimesheetUpdateManyWithoutUsersInput as TimesheetUpdateManyWithoutUsersInput };
