import {
    Login,
    PersonAdd,
    DarkModeOutlined,
    Flaky,
    Logout,
    ManageAccounts,
    FormatListBulleted,
  } from "@mui/icons-material";
import { useContext } from "react";
import { AuthContext } from "../auth-context/auth-context";

export const obj = {
    Login: <Login />,
    Logout : <Logout/>,
    "Create User": <PersonAdd />,
    "Dark Mode": <DarkModeOutlined />,
    'Bank Account Approval': <Flaky/>,
    'Manage Account': <ManageAccounts/>,
    'Users Data': <FormatListBulleted/>,
    'Dummy Page': <FormatListBulleted/>
  };

  export const links = {
    Login: '/tabs/login',
    "Create User": '/tabs/signup',
    'Bank Account Approval': '/tabs/BankAccountApproval',
    'Manage Account': '/tabs/manageAccount',
    'Users Data': '/tabs/usersData',
    'Dummy Page': '/tabs/dummyPage'
  };    

  export const navHome = (role) =>{ 
    const roles = role?.toLowerCase()
    const linkHome = roles === "admin"
    ? "/tabs/signup"
    : roles === "operations"
    ? "/tabs/BankAccountApproval"
    : roles === "customer service"
    ? "/tabs/dummyPage"
    : "/tabs/login";

    return linkHome
  }

  const TabNames = () => {
    const auth = useContext(AuthContext);
    let option= {
      options1: [],
      options2 : ['Login', 'Dark Mode']
      }

    const allTabs = () => {
      option.options2.shift(0)
      option.options2.unshift('Manage Account')
      option.options2.push('Logout')
    }

    const adminTabs = () => {
      option.options1= ['Create User']
    }

    const operationsTabs = () => {
      option.options1= ['Bank Account Approval']
    }

    const csTabs = () => {
      option.options1= ['Dummy Page']
    }

    const role = auth.userRole?.toLowerCase()
    if (role === 'admin'){
      allTabs();
      adminTabs();
    } else if (role === 'operations'){
      allTabs();
      operationsTabs();
    } 
    else if (role === 'customer service'){
      allTabs();
      csTabs();
    }
  
    return option
  }
  
  export default TabNames

