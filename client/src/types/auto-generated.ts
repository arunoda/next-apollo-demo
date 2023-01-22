export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  __typename?: 'Query'
  name?: Maybe<Scalars['String']>
  users?: Maybe<Array<Maybe<User>>>
}

export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type User = {
  __typename?: 'User'
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  phoneNumber?: Maybe<Scalars['String']>
  address?: Maybe<Address>
}

export type Address = {
  __typename?: 'Address'
  street?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  zipCode?: Maybe<Scalars['String']>
}
