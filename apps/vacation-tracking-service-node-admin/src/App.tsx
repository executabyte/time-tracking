import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VacationPolicyList } from "./vacationPolicy/VacationPolicyList";
import { VacationPolicyCreate } from "./vacationPolicy/VacationPolicyCreate";
import { VacationPolicyEdit } from "./vacationPolicy/VacationPolicyEdit";
import { VacationPolicyShow } from "./vacationPolicy/VacationPolicyShow";
import { VacationRuleList } from "./vacationRule/VacationRuleList";
import { VacationRuleCreate } from "./vacationRule/VacationRuleCreate";
import { VacationRuleEdit } from "./vacationRule/VacationRuleEdit";
import { VacationRuleShow } from "./vacationRule/VacationRuleShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CompanyList } from "./company/CompanyList";
import { CompanyCreate } from "./company/CompanyCreate";
import { CompanyEdit } from "./company/CompanyEdit";
import { CompanyShow } from "./company/CompanyShow";
import { GroupList } from "./group/GroupList";
import { GroupCreate } from "./group/GroupCreate";
import { GroupEdit } from "./group/GroupEdit";
import { GroupShow } from "./group/GroupShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { VacationRequestList } from "./vacationRequest/VacationRequestList";
import { VacationRequestCreate } from "./vacationRequest/VacationRequestCreate";
import { VacationRequestEdit } from "./vacationRequest/VacationRequestEdit";
import { VacationRequestShow } from "./vacationRequest/VacationRequestShow";
import { TimesheetList } from "./timesheet/TimesheetList";
import { TimesheetCreate } from "./timesheet/TimesheetCreate";
import { TimesheetEdit } from "./timesheet/TimesheetEdit";
import { TimesheetShow } from "./timesheet/TimesheetShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"VacationTrackingServiceNode"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="VacationPolicy"
          list={VacationPolicyList}
          edit={VacationPolicyEdit}
          create={VacationPolicyCreate}
          show={VacationPolicyShow}
        />
        <Resource
          name="VacationRule"
          list={VacationRuleList}
          edit={VacationRuleEdit}
          create={VacationRuleCreate}
          show={VacationRuleShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Company"
          list={CompanyList}
          edit={CompanyEdit}
          create={CompanyCreate}
          show={CompanyShow}
        />
        <Resource
          name="Group"
          list={GroupList}
          edit={GroupEdit}
          create={GroupCreate}
          show={GroupShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="VacationRequest"
          list={VacationRequestList}
          edit={VacationRequestEdit}
          create={VacationRequestCreate}
          show={VacationRequestShow}
        />
        <Resource
          name="Timesheet"
          list={TimesheetList}
          edit={TimesheetEdit}
          create={TimesheetCreate}
          show={TimesheetShow}
        />
      </Admin>
    </div>
  );
};

export default App;
