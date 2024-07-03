import { Module } from "@nestjs/common";
import { VacationPolicyModule } from "./vacationPolicy/vacationPolicy.module";
import { VacationRuleModule } from "./vacationRule/vacationRule.module";
import { UserModule } from "./user/user.module";
import { CompanyModule } from "./company/company.module";
import { GroupModule } from "./group/group.module";
import { RoleModule } from "./role/role.module";
import { VacationRequestModule } from "./vacationRequest/vacationRequest.module";
import { TimesheetModule } from "./timesheet/timesheet.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { LoggerModule } from "./logger/logger.module";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    LoggerModule,
    VacationPolicyModule,
    VacationRuleModule,
    UserModule,
    CompanyModule,
    GroupModule,
    RoleModule,
    VacationRequestModule,
    TimesheetModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
