/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VacationRuleWhereInput } from "./VacationRuleWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class VacationRuleCountArgs {
  @ApiProperty({
    required: false,
    type: () => VacationRuleWhereInput,
  })
  @Field(() => VacationRuleWhereInput, { nullable: true })
  @Type(() => VacationRuleWhereInput)
  where?: VacationRuleWhereInput;
}

export { VacationRuleCountArgs as VacationRuleCountArgs };
