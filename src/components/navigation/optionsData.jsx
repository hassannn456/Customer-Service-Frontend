import {
    Login,
    PersonAdd,
    QuestionMark,
    DarkModeOutlined,
    HardwareSharp,
    Flaky,
    Logout,
  } from "@mui/icons-material";
import { useContext } from "react";
import { AuthContext } from "../auth-context/auth-context";

export const obj = {
    "Show Tutorial": <HardwareSharp />,
    Support: <QuestionMark />,
    Login: <Login />,
    Logout : <Logout/>,
    "Create User": <PersonAdd />,
    "Dark Mode": <DarkModeOutlined />,
    'Bank Account Approval': <Flaky/>,
  };

  export const links = {
    "Show Tutorial": '/tabs/tutorial',
    Support: '/tabs/support',
    Login: '/tabs/login',
    "Create User": '/tabs/signup',
    'Bank Account Approval': '/tabs/BankAccountApproval'
  };    

  export const navHome = (role) =>{ 
    const linkHome = role === "admin"
    ? "/tabs/signup"
    : role === "Operations"
    ? "/tabs/BankAccountApproval"
    : role === "Customer Service"
    ? '/'
    : "/tabs/login";

    return linkHome
  }

  const TabNames = () => {
    const auth = useContext(AuthContext);
    let option= {
      options1: [],
      options2 : ['Login', 'Support', 'Dark Mode'],
      options3: ['Show Tutorial']
      }

    const allTabs = () => {
      option.options2.shift(0)
      option.options2.push('Logout')
    }

    const adminTabs = () => {
      option.options1.splice(0, 0, 'Create User')
    }

    const operationsTabs = () => {
      option.options1.splice(0, 0, 'Bank Account Approval')
    }

    const csTabs = () => {
      option.options1.splice(0, 0, 'Future Tab')
    }

    if (auth.userRole === 'admin'){
      allTabs();
      adminTabs();
    } else if (auth.userRole === 'Operations'){
      allTabs();
      operationsTabs();
    } 
    else if (auth.userRole === 'Customer Service'){
      csTabs();
    }
  
    return option
  }
  
  export default TabNames

