import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type AccessToken = {
  __typename?: 'AccessToken';
  id?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type Address = {
  __typename?: 'Address';
  address_line1?: Maybe<Scalars['String']>;
  address_line2?: Maybe<Scalars['String']>;
  address_type?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  customer_id?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_approved?: Maybe<Scalars['Boolean']>;
  postcode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  sub_district?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type Customer = {
  __typename?: 'Customer';
  company_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  customer_id?: Maybe<Scalars['String']>;
  device_id?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['String']>;
  dopa?: Maybe<Scalars['String']>;
  expire_date?: Maybe<Scalars['String']>;
  fname_en?: Maybe<Scalars['String']>;
  fname_th?: Maybe<Scalars['String']>;
  fullname_en?: Maybe<Scalars['String']>;
  fullname_th?: Maybe<Scalars['String']>;
  image_card?: Maybe<Scalars['String']>;
  image_face?: Maybe<Scalars['String']>;
  is_approved?: Maybe<Scalars['Boolean']>;
  issue_date?: Maybe<Scalars['String']>;
  laser_code?: Maybe<Scalars['String']>;
  lname_en?: Maybe<Scalars['String']>;
  lname_th?: Maybe<Scalars['String']>;
  mname_en?: Maybe<Scalars['String']>;
  mname_th?: Maybe<Scalars['String']>;
  national_id?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  passport?: Maybe<Scalars['String']>;
  pin?: Maybe<Scalars['String']>;
  pin_attempts?: Maybe<Scalars['Int']>;
  risk_factor?: Maybe<Scalars['Int']>;
  risk_reason?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
  wallet?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  approveBankBook?: Maybe<BoolResponse>;
  customerAddress?: Maybe<Address>;
  customerUsers?: Maybe<UserTable>;
  customerWorkDetails?: Maybe<WorkDetails>;
  deleteUser?: Maybe<UpdateResult>;
  findById?: Maybe<Users>;
  findByUsername?: Maybe<Users>;
  getBank?: Maybe<StringResponse>;
  getBankBookImage?: Maybe<StringResponse>;
  login: AccessToken;
  rejectBankBook?: Maybe<BoolResponse>;
  signUp: Users;
  updatePassword?: Maybe<UpdateResult>;
  updateRole?: Maybe<UpdateResult>;
};


export type MutationApproveBankBookArgs = {
  id: Scalars['Int'];
  remark?: InputMaybe<Scalars['String']>;
};


export type MutationCustomerAddressArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationCustomerUsersArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationCustomerWorkDetailsArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationFindByIdArgs = {
  recordId: Scalars['String'];
};


export type MutationFindByUsernameArgs = {
  username: Scalars['String'];
};


export type MutationGetBankArgs = {
  routing_number: Scalars['String'];
};


export type MutationGetBankBookImageArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRejectBankBookArgs = {
  id: Scalars['Int'];
  remark?: InputMaybe<Scalars['String']>;
};


export type MutationSignUpArgs = {
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  roles: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUpdatePasswordArgs = {
  newPassword: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateRoleArgs = {
  id: Scalars['String'];
  role: Scalars['String'];
};

export type Nationalities = {
  __typename?: 'Nationalities';
  country?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  id: Scalars['Int'];
  un_code?: Maybe<Scalars['String']>;
};

export type Payees = {
  __typename?: 'Payees';
  account_name?: Maybe<Scalars['String']>;
  account_number?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  book_image?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  customer_id: Scalars['String'];
  display_name?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  routing_number?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
};

export type Products = {
  __typename?: 'Products';
  active?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['String']>;
  subscription_id?: Maybe<Scalars['Int']>;
  unit_data?: Maybe<Scalars['String']>;
  unit_ids?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  getCustomers?: Maybe<Array<Maybe<Customer>>>;
  getNationalities?: Maybe<Array<Maybe<Nationalities>>>;
  getNewBankBooks?: Maybe<Array<Maybe<Payees>>>;
  getUsers?: Maybe<Array<Maybe<Users>>>;
  health?: Maybe<Scalars['String']>;
  me?: Maybe<Customer>;
};

export type Users = {
  __typename?: 'Users';
  created_at?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  roles: Scalars['String'];
  updated_at?: Maybe<Scalars['Date']>;
  username: Scalars['String'];
};

export type WorkDetails = {
  __typename?: 'WorkDetails';
  address_id?: Maybe<Scalars['Int']>;
  business_type?: Maybe<Scalars['String']>;
  business_type_id?: Maybe<Scalars['Int']>;
  company_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  current_work_period?: Maybe<Scalars['String']>;
  customer_id?: Maybe<Scalars['String']>;
  employment_type?: Maybe<Scalars['String']>;
  occupation?: Maybe<Scalars['String']>;
  occupation_id?: Maybe<Scalars['Int']>;
  payroll_date?: Maybe<Scalars['Int']>;
  payroll_date_2?: Maybe<Scalars['Int']>;
  payroll_type?: Maybe<Scalars['String']>;
  total_salary_per_month_thb?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
  work_information_id?: Maybe<Scalars['Int']>;
};

export type BoolResponse = {
  __typename?: 'boolResponse';
  response?: Maybe<Scalars['Boolean']>;
};

export type DeleteResult = {
  __typename?: 'deleteResult';
  affected?: Maybe<Scalars['Int']>;
};

export type StringResponse = {
  __typename?: 'stringResponse';
  response?: Maybe<Scalars['String']>;
};

export type UpdateResult = {
  __typename?: 'updateResult';
  update?: Maybe<Scalars['String']>;
};

export type UserTable = {
  __typename?: 'userTable';
  alias?: Maybe<Scalars['String']>;
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Date']>;
  deleted_at?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lang?: Maybe<Scalars['String']>;
  last_otp_at?: Maybe<Scalars['Date']>;
  locale?: Maybe<Scalars['String']>;
  locked_at?: Maybe<Scalars['Date']>;
  login_attempts?: Maybe<Scalars['Int']>;
  otp_secret?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['Int']>;
  shopname?: Maybe<Scalars['String']>;
  sso_expiry?: Maybe<Scalars['Date']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

export type ApproveBankBookMutationVariables = Exact<{
  id: Scalars['Int'];
  remark?: InputMaybe<Scalars['String']>;
}>;


export type ApproveBankBookMutation = { __typename?: 'Mutation', approveBankBook?: { __typename?: 'boolResponse', response?: boolean | null } | null };

export type CustomerAddressMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type CustomerAddressMutation = { __typename?: 'Mutation', customerAddress?: { __typename?: 'Address', id?: number | null, customer_id?: string | null, address_type?: string | null, province?: string | null, district?: string | null, sub_district?: string | null, postcode?: string | null, address_line1?: string | null, address_line2?: string | null, created_at?: number | null, updated_at?: number | null, is_approved?: boolean | null, country_code?: string | null } | null };

export type CustomerUsersMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type CustomerUsersMutation = { __typename?: 'Mutation', customerUsers?: { __typename?: 'userTable', id?: number | null, uuid?: string | null, phone?: string | null, otp_secret?: string | null, last_otp_at?: any | null, created_at?: any | null, updated_at?: any | null, email?: string | null, company_id?: number | null, role?: number | null, state?: string | null, deleted_at?: any | null, username?: string | null, shopname?: string | null, locked_at?: any | null, login_attempts?: number | null, locale?: string | null, lang?: string | null, alias?: string | null, sso_expiry?: any | null, full_name?: string | null } | null };

export type CustomerWorkDetailsMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type CustomerWorkDetailsMutation = { __typename?: 'Mutation', customerWorkDetails?: { __typename?: 'WorkDetails', work_information_id?: number | null, customer_id?: string | null, company_name?: string | null, business_type_id?: number | null, business_type?: string | null, occupation_id?: number | null, occupation?: string | null, employment_type?: string | null, current_work_period?: string | null, total_salary_per_month_thb?: string | null, payroll_type?: string | null, payroll_date?: number | null, payroll_date_2?: number | null, created_at?: number | null, updated_at?: number | null, address_id?: number | null } | null };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'updateResult', update?: string | null } | null };

export type GetBankMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetBankMutation = { __typename?: 'Mutation', getBank?: { __typename?: 'stringResponse', response?: string | null } | null };

export type GetBankBookImageMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetBankBookImageMutation = { __typename?: 'Mutation', getBankBookImage?: { __typename?: 'stringResponse', response?: string | null } | null };

export type GetCustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomersQuery = { __typename?: 'Query', getCustomers?: Array<{ __typename?: 'Customer', customer_id?: string | null, company_id?: string | null, user_id?: string | null, device_id?: string | null, fname_th?: string | null, mname_th?: string | null, lname_th?: string | null, fullname_th?: string | null, fname_en?: string | null, mname_en?: string | null, lname_en?: string | null, fullname_en?: string | null, national_id?: string | null, passport?: string | null, laser_code?: string | null, dob?: string | null, issue_date?: string | null, expire_date?: string | null, image_card?: string | null, image_face?: string | null, dopa?: string | null, pin?: string | null, risk_factor?: number | null, risk_reason?: string | null, created_at?: number | null, updated_at?: number | null, wallet?: string | null, is_approved?: boolean | null, pin_attempts?: number | null, nationality?: string | null } | null> | null };

export type GetNationalitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNationalitiesQuery = { __typename?: 'Query', getNationalities?: Array<{ __typename?: 'Nationalities', country?: string | null, country_code?: string | null, created_at?: any | null, id: number, un_code?: string | null } | null> | null };

export type GetNewBankBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNewBankBooksQuery = { __typename?: 'Query', getNewBankBooks?: Array<{ __typename?: 'Payees', account_name?: string | null, account_number?: string | null, active?: boolean | null, book_image?: string | null, created_at?: any | null, customer_id: string, display_name?: string | null, id: number, routing_number?: string | null, updated_at?: any | null } | null> | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', getUsers?: Array<{ __typename?: 'Users', id?: string | null, name?: string | null, roles: string, username: string } | null> | null };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AccessToken', token?: string | null, role?: string | null, id?: string | null } };

export type RejectBankBookMutationVariables = Exact<{
  id: Scalars['Int'];
  remark?: InputMaybe<Scalars['String']>;
}>;


export type RejectBankBookMutation = { __typename?: 'Mutation', rejectBankBook?: { __typename?: 'boolResponse', response?: boolean | null } | null };

export type SignUpMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  roles: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'Users', id?: string | null, name?: string | null, roles: string, username: string } };

export type UpdatePasswordMutationVariables = Exact<{
  newPassword: Scalars['String'];
  password: Scalars['String'];
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', updatePassword?: { __typename?: 'updateResult', update?: string | null } | null };

export type UpdateRoleMutationVariables = Exact<{
  id: Scalars['String'];
  role: Scalars['String'];
}>;


export type UpdateRoleMutation = { __typename?: 'Mutation', updateRole?: { __typename?: 'updateResult', update?: string | null } | null };


export const ApproveBankBookDocument = gql`
    mutation approveBankBook($id: Int!, $remark: String) {
  approveBankBook(id: $id, remark: $remark) {
    response
  }
}
    `;
export type ApproveBankBookMutationFn = Apollo.MutationFunction<ApproveBankBookMutation, ApproveBankBookMutationVariables>;

/**
 * __useApproveBankBookMutation__
 *
 * To run a mutation, you first call `useApproveBankBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApproveBankBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [approveBankBookMutation, { data, loading, error }] = useApproveBankBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *      remark: // value for 'remark'
 *   },
 * });
 */
export function useApproveBankBookMutation(baseOptions?: Apollo.MutationHookOptions<ApproveBankBookMutation, ApproveBankBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ApproveBankBookMutation, ApproveBankBookMutationVariables>(ApproveBankBookDocument, options);
      }
export type ApproveBankBookMutationHookResult = ReturnType<typeof useApproveBankBookMutation>;
export type ApproveBankBookMutationResult = Apollo.MutationResult<ApproveBankBookMutation>;
export type ApproveBankBookMutationOptions = Apollo.BaseMutationOptions<ApproveBankBookMutation, ApproveBankBookMutationVariables>;
export const CustomerAddressDocument = gql`
    mutation customerAddress($id: String) {
  customerAddress(id: $id) {
    id
    customer_id
    address_type
    province
    district
    sub_district
    postcode
    address_line1
    address_line2
    created_at
    updated_at
    is_approved
    country_code
  }
}
    `;
export type CustomerAddressMutationFn = Apollo.MutationFunction<CustomerAddressMutation, CustomerAddressMutationVariables>;

/**
 * __useCustomerAddressMutation__
 *
 * To run a mutation, you first call `useCustomerAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomerAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customerAddressMutation, { data, loading, error }] = useCustomerAddressMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCustomerAddressMutation(baseOptions?: Apollo.MutationHookOptions<CustomerAddressMutation, CustomerAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CustomerAddressMutation, CustomerAddressMutationVariables>(CustomerAddressDocument, options);
      }
export type CustomerAddressMutationHookResult = ReturnType<typeof useCustomerAddressMutation>;
export type CustomerAddressMutationResult = Apollo.MutationResult<CustomerAddressMutation>;
export type CustomerAddressMutationOptions = Apollo.BaseMutationOptions<CustomerAddressMutation, CustomerAddressMutationVariables>;
export const CustomerUsersDocument = gql`
    mutation customerUsers($id: String) {
  customerUsers(id: $id) {
    id
    uuid
    phone
    otp_secret
    last_otp_at
    created_at
    updated_at
    email
    company_id
    role
    state
    deleted_at
    username
    shopname
    locked_at
    login_attempts
    locale
    lang
    alias
    sso_expiry
    full_name
  }
}
    `;
export type CustomerUsersMutationFn = Apollo.MutationFunction<CustomerUsersMutation, CustomerUsersMutationVariables>;

/**
 * __useCustomerUsersMutation__
 *
 * To run a mutation, you first call `useCustomerUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomerUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customerUsersMutation, { data, loading, error }] = useCustomerUsersMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCustomerUsersMutation(baseOptions?: Apollo.MutationHookOptions<CustomerUsersMutation, CustomerUsersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CustomerUsersMutation, CustomerUsersMutationVariables>(CustomerUsersDocument, options);
      }
export type CustomerUsersMutationHookResult = ReturnType<typeof useCustomerUsersMutation>;
export type CustomerUsersMutationResult = Apollo.MutationResult<CustomerUsersMutation>;
export type CustomerUsersMutationOptions = Apollo.BaseMutationOptions<CustomerUsersMutation, CustomerUsersMutationVariables>;
export const CustomerWorkDetailsDocument = gql`
    mutation customerWorkDetails($id: String) {
  customerWorkDetails(id: $id) {
    work_information_id
    customer_id
    company_name
    business_type_id
    business_type
    occupation_id
    occupation
    employment_type
    current_work_period
    total_salary_per_month_thb
    payroll_type
    payroll_date
    payroll_date_2
    created_at
    updated_at
    address_id
  }
}
    `;
export type CustomerWorkDetailsMutationFn = Apollo.MutationFunction<CustomerWorkDetailsMutation, CustomerWorkDetailsMutationVariables>;

/**
 * __useCustomerWorkDetailsMutation__
 *
 * To run a mutation, you first call `useCustomerWorkDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomerWorkDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customerWorkDetailsMutation, { data, loading, error }] = useCustomerWorkDetailsMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCustomerWorkDetailsMutation(baseOptions?: Apollo.MutationHookOptions<CustomerWorkDetailsMutation, CustomerWorkDetailsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CustomerWorkDetailsMutation, CustomerWorkDetailsMutationVariables>(CustomerWorkDetailsDocument, options);
      }
export type CustomerWorkDetailsMutationHookResult = ReturnType<typeof useCustomerWorkDetailsMutation>;
export type CustomerWorkDetailsMutationResult = Apollo.MutationResult<CustomerWorkDetailsMutation>;
export type CustomerWorkDetailsMutationOptions = Apollo.BaseMutationOptions<CustomerWorkDetailsMutation, CustomerWorkDetailsMutationVariables>;
export const DeleteUserDocument = gql`
    mutation deleteUser($id: String!) {
  deleteUser(id: $id) {
    update
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const GetBankDocument = gql`
    mutation getBank($id: String!) {
  getBank(routing_number: $id) {
    response
  }
}
    `;
export type GetBankMutationFn = Apollo.MutationFunction<GetBankMutation, GetBankMutationVariables>;

/**
 * __useGetBankMutation__
 *
 * To run a mutation, you first call `useGetBankMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetBankMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getBankMutation, { data, loading, error }] = useGetBankMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBankMutation(baseOptions?: Apollo.MutationHookOptions<GetBankMutation, GetBankMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetBankMutation, GetBankMutationVariables>(GetBankDocument, options);
      }
export type GetBankMutationHookResult = ReturnType<typeof useGetBankMutation>;
export type GetBankMutationResult = Apollo.MutationResult<GetBankMutation>;
export type GetBankMutationOptions = Apollo.BaseMutationOptions<GetBankMutation, GetBankMutationVariables>;
export const GetBankBookImageDocument = gql`
    mutation getBankBookImage($id: Int!) {
  getBankBookImage(id: $id) {
    response
  }
}
    `;
export type GetBankBookImageMutationFn = Apollo.MutationFunction<GetBankBookImageMutation, GetBankBookImageMutationVariables>;

/**
 * __useGetBankBookImageMutation__
 *
 * To run a mutation, you first call `useGetBankBookImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetBankBookImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getBankBookImageMutation, { data, loading, error }] = useGetBankBookImageMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBankBookImageMutation(baseOptions?: Apollo.MutationHookOptions<GetBankBookImageMutation, GetBankBookImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetBankBookImageMutation, GetBankBookImageMutationVariables>(GetBankBookImageDocument, options);
      }
export type GetBankBookImageMutationHookResult = ReturnType<typeof useGetBankBookImageMutation>;
export type GetBankBookImageMutationResult = Apollo.MutationResult<GetBankBookImageMutation>;
export type GetBankBookImageMutationOptions = Apollo.BaseMutationOptions<GetBankBookImageMutation, GetBankBookImageMutationVariables>;
export const GetCustomersDocument = gql`
    query GetCustomers {
  getCustomers {
    customer_id
    company_id
    user_id
    device_id
    fname_th
    mname_th
    lname_th
    fullname_th
    fname_en
    mname_en
    lname_en
    fullname_en
    national_id
    passport
    laser_code
    dob
    issue_date
    expire_date
    image_card
    image_face
    dopa
    pin
    risk_factor
    risk_reason
    created_at
    updated_at
    wallet
    is_approved
    pin_attempts
    nationality
  }
}
    `;

/**
 * __useGetCustomersQuery__
 *
 * To run a query within a React component, call `useGetCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCustomersQuery(baseOptions?: Apollo.QueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, options);
      }
export function useGetCustomersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, options);
        }
export type GetCustomersQueryHookResult = ReturnType<typeof useGetCustomersQuery>;
export type GetCustomersLazyQueryHookResult = ReturnType<typeof useGetCustomersLazyQuery>;
export type GetCustomersQueryResult = Apollo.QueryResult<GetCustomersQuery, GetCustomersQueryVariables>;
export const GetNationalitiesDocument = gql`
    query GetNationalities {
  getNationalities {
    country
    country_code
    created_at
    id
    un_code
  }
}
    `;

/**
 * __useGetNationalitiesQuery__
 *
 * To run a query within a React component, call `useGetNationalitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNationalitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNationalitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNationalitiesQuery(baseOptions?: Apollo.QueryHookOptions<GetNationalitiesQuery, GetNationalitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNationalitiesQuery, GetNationalitiesQueryVariables>(GetNationalitiesDocument, options);
      }
export function useGetNationalitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNationalitiesQuery, GetNationalitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNationalitiesQuery, GetNationalitiesQueryVariables>(GetNationalitiesDocument, options);
        }
export type GetNationalitiesQueryHookResult = ReturnType<typeof useGetNationalitiesQuery>;
export type GetNationalitiesLazyQueryHookResult = ReturnType<typeof useGetNationalitiesLazyQuery>;
export type GetNationalitiesQueryResult = Apollo.QueryResult<GetNationalitiesQuery, GetNationalitiesQueryVariables>;
export const GetNewBankBooksDocument = gql`
    query getNewBankBooks {
  getNewBankBooks {
    account_name
    account_number
    active
    book_image
    created_at
    customer_id
    display_name
    id
    routing_number
    updated_at
  }
}
    `;

/**
 * __useGetNewBankBooksQuery__
 *
 * To run a query within a React component, call `useGetNewBankBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewBankBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewBankBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNewBankBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetNewBankBooksQuery, GetNewBankBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNewBankBooksQuery, GetNewBankBooksQueryVariables>(GetNewBankBooksDocument, options);
      }
export function useGetNewBankBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNewBankBooksQuery, GetNewBankBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNewBankBooksQuery, GetNewBankBooksQueryVariables>(GetNewBankBooksDocument, options);
        }
export type GetNewBankBooksQueryHookResult = ReturnType<typeof useGetNewBankBooksQuery>;
export type GetNewBankBooksLazyQueryHookResult = ReturnType<typeof useGetNewBankBooksLazyQuery>;
export type GetNewBankBooksQueryResult = Apollo.QueryResult<GetNewBankBooksQuery, GetNewBankBooksQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  getUsers {
    id
    name
    roles
    username
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    role
    id
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RejectBankBookDocument = gql`
    mutation rejectBankBook($id: Int!, $remark: String) {
  rejectBankBook(id: $id, remark: $remark) {
    response
  }
}
    `;
export type RejectBankBookMutationFn = Apollo.MutationFunction<RejectBankBookMutation, RejectBankBookMutationVariables>;

/**
 * __useRejectBankBookMutation__
 *
 * To run a mutation, you first call `useRejectBankBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectBankBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectBankBookMutation, { data, loading, error }] = useRejectBankBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *      remark: // value for 'remark'
 *   },
 * });
 */
export function useRejectBankBookMutation(baseOptions?: Apollo.MutationHookOptions<RejectBankBookMutation, RejectBankBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectBankBookMutation, RejectBankBookMutationVariables>(RejectBankBookDocument, options);
      }
export type RejectBankBookMutationHookResult = ReturnType<typeof useRejectBankBookMutation>;
export type RejectBankBookMutationResult = Apollo.MutationResult<RejectBankBookMutation>;
export type RejectBankBookMutationOptions = Apollo.BaseMutationOptions<RejectBankBookMutation, RejectBankBookMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($username: String!, $password: String!, $roles: String!, $name: String) {
  signUp(username: $username, password: $password, roles: $roles, name: $name) {
    id
    name
    roles
    username
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      roles: // value for 'roles'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const UpdatePasswordDocument = gql`
    mutation UpdatePassword($newPassword: String!, $password: String!) {
  updatePassword(newPassword: $newPassword, password: $password) {
    update
  }
}
    `;
export type UpdatePasswordMutationFn = Apollo.MutationFunction<UpdatePasswordMutation, UpdatePasswordMutationVariables>;

/**
 * __useUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordMutation, { data, loading, error }] = useUpdatePasswordMutation({
 *   variables: {
 *      newPassword: // value for 'newPassword'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useUpdatePasswordMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePasswordMutation, UpdatePasswordMutationVariables>(UpdatePasswordDocument, options);
      }
export type UpdatePasswordMutationHookResult = ReturnType<typeof useUpdatePasswordMutation>;
export type UpdatePasswordMutationResult = Apollo.MutationResult<UpdatePasswordMutation>;
export type UpdatePasswordMutationOptions = Apollo.BaseMutationOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const UpdateRoleDocument = gql`
    mutation UpdateRole($id: String!, $role: String!) {
  updateRole(id: $id, role: $role) {
    update
  }
}
    `;
export type UpdateRoleMutationFn = Apollo.MutationFunction<UpdateRoleMutation, UpdateRoleMutationVariables>;

/**
 * __useUpdateRoleMutation__
 *
 * To run a mutation, you first call `useUpdateRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRoleMutation, { data, loading, error }] = useUpdateRoleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      role: // value for 'role'
 *   },
 * });
 */
export function useUpdateRoleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRoleMutation, UpdateRoleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRoleMutation, UpdateRoleMutationVariables>(UpdateRoleDocument, options);
      }
export type UpdateRoleMutationHookResult = ReturnType<typeof useUpdateRoleMutation>;
export type UpdateRoleMutationResult = Apollo.MutationResult<UpdateRoleMutation>;
export type UpdateRoleMutationOptions = Apollo.BaseMutationOptions<UpdateRoleMutation, UpdateRoleMutationVariables>;