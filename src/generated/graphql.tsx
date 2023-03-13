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

export type Customer = {
  __typename?: 'Customer';
  id?: Maybe<Scalars['ID']>;
  internalNote?: Maybe<Scalars['String']>;
  invoices?: Maybe<Array<Maybe<Invoice>>>;
  name?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type Invoice = {
  __typename?: 'Invoice';
  amount: Scalars['Float'];
  customerId: Scalars['ID'];
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  approveBankBook?: Maybe<BoolResponse>;
  deleteUser?: Maybe<Scalars['String']>;
  findById?: Maybe<Users>;
  findByUsername?: Maybe<Users>;
  getBankBookImage?: Maybe<StringResponse>;
  login: AccessToken;
  rejectBankBook?: Maybe<BoolResponse>;
  signUp: Users;
  updatePassword?: Maybe<UpdatePassword>;
};


export type MutationApproveBankBookArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserArgs = {
  recordId: Scalars['String'];
};


export type MutationFindByIdArgs = {
  recordId: Scalars['String'];
};


export type MutationFindByUsernameArgs = {
  username: Scalars['String'];
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

export type Query = {
  __typename?: 'Query';
  getNewBankBooks?: Maybe<Array<Maybe<Payees>>>;
  getUsers?: Maybe<Array<Maybe<Users>>>;
  health?: Maybe<Scalars['String']>;
  me?: Maybe<Customer>;
};

export type Users = {
  __typename?: 'Users';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  roles: Scalars['String'];
  username: Scalars['String'];
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

export type UpdatePassword = {
  __typename?: 'updatePassword';
  update?: Maybe<Scalars['String']>;
};

export type ApproveBankBookMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ApproveBankBookMutation = { __typename?: 'Mutation', approveBankBook?: { __typename?: 'boolResponse', response?: boolean | null } | null };

export type GetBankBookImageMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetBankBookImageMutation = { __typename?: 'Mutation', getBankBookImage?: { __typename?: 'stringResponse', response?: string | null } | null };

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


export type UpdatePasswordMutation = { __typename?: 'Mutation', updatePassword?: { __typename?: 'updatePassword', update?: string | null } | null };


export const ApproveBankBookDocument = gql`
    mutation approveBankBook($id: Int!) {
  approveBankBook(id: $id) {
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
    mutation rejectBankBook($id: Int!) {
  rejectBankBook(id: $id) {
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