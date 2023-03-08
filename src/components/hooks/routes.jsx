import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Auth from "../helpers/roleAccess";
import BankAccounts from "../pages/BankAccounts";
import AccountDetails from "../pages/AccountDetails";
import TabNames, { links } from "../navigation/optionsData";
import ManageAccounts from "../pages/ManageAccounts";
import DummyPage from "../pages/DummyPage";
import UsersData from "../pages/UsersData";

 const useRoutes = () => {
  const logged = localStorage.getItem('userData')
  const tabs = TabNames();
  const linkHome= logged ? links[tabs.options1[0]] : '/tabs/login'

  return (
    <Routes>
      <Route path="/" element={<Navigate to={linkHome}/>} />
      <Route path="/tabs/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />

      <Route element={<Auth allowedRoles={["admin", "operations", "customer service"]} />}>
      <Route path="/tabs/manageAccount" element={<ManageAccounts />} />
      </Route>

      <Route element={<Auth allowedRoles={["admin"]} />}>
      <Route path="/tabs/signup" element={<SignUp />} />
      <Route path="/tabs/usersData" element={<UsersData />} />
      </Route>

      <Route element={<Auth allowedRoles={["operations"]} />}>
      <Route path="/tabs/BankAccountApproval" element={<BankAccounts />} />
      <Route path="/tabs/BankAccountApproval/:id" element={<AccountDetails  />} />
      </Route>

      <Route element={<Auth allowedRoles={["customer service"]} />}>
      <Route path="/tabs/dummyPage" element={<DummyPage />} />
      </Route>
    </Routes>
    )
  }

  export default useRoutes