import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Contact = {
  __typename?: 'Contact';
  name: Scalars['String'];
  address: Scalars['String'];
  phone: Scalars['String'];
  email: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  contacts: Array<Contact>;
  name: Scalars['String'];
};


export type QueryContactsArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type ContactsQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type ContactsQuery = (
  { __typename?: 'Query' }
  & { contacts: Array<(
    { __typename?: 'Contact' }
    & Pick<Contact, 'name' | 'phone' | 'address' | 'email'>
  )> }
);

export type NameQueryVariables = Exact<{ [key: string]: never; }>;


export type NameQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'name'>
);


export const ContactsDocument = gql`
    query Contacts($limit: Int!, $offset: Int!) {
  contacts(limit: $limit, offset: $offset) {
    name
    phone
    address
    email
  }
}
    `;

/**
 * __useContactsQuery__
 *
 * To run a query within a React component, call `useContactsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useContactsQuery(baseOptions: Apollo.QueryHookOptions<ContactsQuery, ContactsQueryVariables>) {
        return Apollo.useQuery<ContactsQuery, ContactsQueryVariables>(ContactsDocument, baseOptions);
      }
export function useContactsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContactsQuery, ContactsQueryVariables>) {
          return Apollo.useLazyQuery<ContactsQuery, ContactsQueryVariables>(ContactsDocument, baseOptions);
        }
export type ContactsQueryHookResult = ReturnType<typeof useContactsQuery>;
export type ContactsLazyQueryHookResult = ReturnType<typeof useContactsLazyQuery>;
export type ContactsQueryResult = Apollo.QueryResult<ContactsQuery, ContactsQueryVariables>;
export const NameDocument = gql`
    query Name {
  name
}
    `;

/**
 * __useNameQuery__
 *
 * To run a query within a React component, call `useNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNameQuery({
 *   variables: {
 *   },
 * });
 */
export function useNameQuery(baseOptions?: Apollo.QueryHookOptions<NameQuery, NameQueryVariables>) {
        return Apollo.useQuery<NameQuery, NameQueryVariables>(NameDocument, baseOptions);
      }
export function useNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NameQuery, NameQueryVariables>) {
          return Apollo.useLazyQuery<NameQuery, NameQueryVariables>(NameDocument, baseOptions);
        }
export type NameQueryHookResult = ReturnType<typeof useNameQuery>;
export type NameLazyQueryHookResult = ReturnType<typeof useNameLazyQuery>;
export type NameQueryResult = Apollo.QueryResult<NameQuery, NameQueryVariables>;