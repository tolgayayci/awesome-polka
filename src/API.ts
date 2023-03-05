/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  status: UserStatus,
};

export enum UserStatus {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  PROJECT_OWNER = "PROJECT_OWNER",
}


export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  status?: ModelUserStatusInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelUserStatusInput = {
  eq?: UserStatus | null,
  ne?: UserStatus | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  email: string,
  status: UserStatus,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  status?: UserStatus | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateProjectInput = {
  id?: string | null,
  slug: string,
  logo: string,
  name: string,
  shortDesc: string,
  detailedDesc?: string | null,
  socials?: Array< string | null > | null,
  team?: Array< string | null > | null,
  tokenName?: string | null,
  repositoryLink?: string | null,
  faq?: Array< string | null > | null,
  articles?: Array< string | null > | null,
  jobOpenings?: Array< string | null > | null,
  rootCategories?: Array< string > | null,
  subCategories?: Array< string > | null,
  status: ProjectStatus,
};

export enum ProjectStatus {
  APPROVED = "APPROVED",
  NOT_APPROVED = "NOT_APPROVED",
  MODIFIED = "MODIFIED",
}


export type ModelProjectConditionInput = {
  slug?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  name?: ModelStringInput | null,
  shortDesc?: ModelStringInput | null,
  detailedDesc?: ModelStringInput | null,
  socials?: ModelStringInput | null,
  team?: ModelStringInput | null,
  tokenName?: ModelStringInput | null,
  repositoryLink?: ModelStringInput | null,
  faq?: ModelStringInput | null,
  articles?: ModelStringInput | null,
  jobOpenings?: ModelStringInput | null,
  rootCategories?: ModelStringInput | null,
  subCategories?: ModelStringInput | null,
  status?: ModelProjectStatusInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
};

export type ModelProjectStatusInput = {
  eq?: ProjectStatus | null,
  ne?: ProjectStatus | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  slug: string,
  logo: string,
  name: string,
  shortDesc: string,
  detailedDesc?: string | null,
  socials?: Array< string | null > | null,
  team?: Array< string | null > | null,
  tokenName?: string | null,
  repositoryLink?: string | null,
  faq?: Array< string | null > | null,
  articles?: Array< string | null > | null,
  jobOpenings?: Array< string | null > | null,
  rootCategories?: Array< string > | null,
  subCategories?: Array< string > | null,
  status: ProjectStatus,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProjectInput = {
  id: string,
  slug?: string | null,
  logo?: string | null,
  name?: string | null,
  shortDesc?: string | null,
  detailedDesc?: string | null,
  socials?: Array< string | null > | null,
  team?: Array< string | null > | null,
  tokenName?: string | null,
  repositoryLink?: string | null,
  faq?: Array< string | null > | null,
  articles?: Array< string | null > | null,
  jobOpenings?: Array< string | null > | null,
  rootCategories?: Array< string > | null,
  subCategories?: Array< string > | null,
  status?: ProjectStatus | null,
};

export type DeleteProjectInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  status?: ModelUserStatusInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  slug?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  name?: ModelStringInput | null,
  shortDesc?: ModelStringInput | null,
  detailedDesc?: ModelStringInput | null,
  socials?: ModelStringInput | null,
  team?: ModelStringInput | null,
  tokenName?: ModelStringInput | null,
  repositoryLink?: ModelStringInput | null,
  faq?: ModelStringInput | null,
  articles?: ModelStringInput | null,
  jobOpenings?: ModelStringInput | null,
  rootCategories?: ModelStringInput | null,
  subCategories?: ModelStringInput | null,
  status?: ModelProjectStatusInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionProjectFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  slug?: ModelSubscriptionStringInput | null,
  logo?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  shortDesc?: ModelSubscriptionStringInput | null,
  detailedDesc?: ModelSubscriptionStringInput | null,
  socials?: ModelSubscriptionStringInput | null,
  team?: ModelSubscriptionStringInput | null,
  tokenName?: ModelSubscriptionStringInput | null,
  repositoryLink?: ModelSubscriptionStringInput | null,
  faq?: ModelSubscriptionStringInput | null,
  articles?: ModelSubscriptionStringInput | null,
  jobOpenings?: ModelSubscriptionStringInput | null,
  rootCategories?: ModelSubscriptionStringInput | null,
  subCategories?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProjectFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    status: UserStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    status: UserStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    status: UserStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    slug: string,
    logo: string,
    name: string,
    shortDesc: string,
    detailedDesc?: string | null,
    socials?: Array< string | null > | null,
    team?: Array< string | null > | null,
    tokenName?: string | null,
    repositoryLink?: string | null,
    faq?: Array< string | null > | null,
    articles?: Array< string | null > | null,
    jobOpenings?: Array< string | null > | null,
    rootCategories?: Array< string > | null,
    subCategories?: Array< string > | null,
    status: ProjectStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    slug: string,
    logo: string,
    name: string,
    shortDesc: string,
    detailedDesc?: string | null,
    socials?: Array< string | null > | null,
    team?: Array< string | null > | null,
    tokenName?: string | null,
    repositoryLink?: string | null,
    faq?: Array< string | null > | null,
    articles?: Array< string | null > | null,
    jobOpenings?: Array< string | null > | null,
    rootCategories?: Array< string > | null,
    subCategories?: Array< string > | null,
    status: ProjectStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    slug: string,
    logo: string,
    name: string,
    shortDesc: string,
    detailedDesc?: string | null,
    socials?: Array< string | null > | null,
    team?: Array< string | null > | null,
    tokenName?: string | null,
    repositoryLink?: string | null,
    faq?: Array< string | null > | null,
    articles?: Array< string | null > | null,
    jobOpenings?: Array< string | null > | null,
    rootCategories?: Array< string > | null,
    subCategories?: Array< string > | null,
    status: ProjectStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    status: UserStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  id?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      status: UserStatus,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    slug: string,
    logo: string,
    name: string,
    shortDesc: string,
    detailedDesc?: string | null,
    socials?: Array< string | null > | null,
    team?: Array< string | null > | null,
    tokenName?: string | null,
    repositoryLink?: string | null,
    faq?: Array< string | null > | null,
    articles?: Array< string | null > | null,
    jobOpenings?: Array< string | null > | null,
    rootCategories?: Array< string > | null,
    subCategories?: Array< string > | null,
    status: ProjectStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProjectsQueryVariables = {
  id?: string | null,
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      slug: string,
      logo: string,
      name: string,
      shortDesc: string,
      detailedDesc?: string | null,
      socials?: Array< string | null > | null,
      team?: Array< string | null > | null,
      tokenName?: string | null,
      repositoryLink?: string | null,
      faq?: Array< string | null > | null,
      articles?: Array< string | null > | null,
      jobOpenings?: Array< string | null > | null,
      rootCategories?: Array< string > | null,
      subCategories?: Array< string > | null,
      status: ProjectStatus,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    status: UserStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    status: UserStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    status: UserStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    slug: string,
    logo: string,
    name: string,
    shortDesc: string,
    detailedDesc?: string | null,
    socials?: Array< string | null > | null,
    team?: Array< string | null > | null,
    tokenName?: string | null,
    repositoryLink?: string | null,
    faq?: Array< string | null > | null,
    articles?: Array< string | null > | null,
    jobOpenings?: Array< string | null > | null,
    rootCategories?: Array< string > | null,
    subCategories?: Array< string > | null,
    status: ProjectStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    slug: string,
    logo: string,
    name: string,
    shortDesc: string,
    detailedDesc?: string | null,
    socials?: Array< string | null > | null,
    team?: Array< string | null > | null,
    tokenName?: string | null,
    repositoryLink?: string | null,
    faq?: Array< string | null > | null,
    articles?: Array< string | null > | null,
    jobOpenings?: Array< string | null > | null,
    rootCategories?: Array< string > | null,
    subCategories?: Array< string > | null,
    status: ProjectStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    slug: string,
    logo: string,
    name: string,
    shortDesc: string,
    detailedDesc?: string | null,
    socials?: Array< string | null > | null,
    team?: Array< string | null > | null,
    tokenName?: string | null,
    repositoryLink?: string | null,
    faq?: Array< string | null > | null,
    articles?: Array< string | null > | null,
    jobOpenings?: Array< string | null > | null,
    rootCategories?: Array< string > | null,
    subCategories?: Array< string > | null,
    status: ProjectStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};
