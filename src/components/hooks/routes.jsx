import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Support from "../pages/Support";
import SignUp from "../pages/SignUp";
import Tutorial from "../pages/Tutorial";
import Auth from "../helpers/roleAccess";
import BankAccounts from "../pages/BankAccounts";
import AccountDetails from "../pages/AccountDetails";
import TabNames, { links } from "../navigation/optionsData";

 const useRoutes = () => {
  const logged = localStorage.getItem('userData')
  const tabs = TabNames();
  const linkHome= logged ? links[tabs.options1[0]] : '/tabs/login'

  return (
    <Routes>
      <Route path="/" element={<Navigate to={linkHome}/>} />
      <Route path="/tabs/login" element={<Login />} />
      <Route path="/tabs/support" element={<Support />} />
      <Route path="/tabs/tutorial" element={<Tutorial />} />
      <Route path="*" element={<Navigate to="/" />} />

      <Route element={<Auth allowedRoles={["admin"]} />}>
      <Route path="/tabs/signup" element={<SignUp />} />
      </Route>

      <Route element={<Auth allowedRoles={["Operations"]} />}>
      <Route path="/tabs/BankAccountApproval" element={<BankAccounts />} />
      <Route path="/tabs/BankAccountApproval/:id" element={<AccountDetails  />} />
      </Route>
    </Routes>
    )
  }

  export default useRoutes