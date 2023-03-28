/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProjectInput = {
  slug: string,
  name: string,
  bio: string,
  socials?: Array< string | null > | null,
  description?: string | null,
  githubRepoUrl?: string | null,
  tokenSymbol?: string | null,
  openJobs?: Array< string | null > | null,
  team?: Array< string | null > | null,
  faq?: Array< string | null > | null,
};

export type ModelProjectConditionInput = {
  name?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  socials?: ModelStringInput | null,
  description?: ModelStringInput | null,
  githubRepoUrl?: ModelStringInput | null,
  tokenSymbol?: ModelStringInput | null,
  openJobs?: ModelStringInput | null,
  team?: ModelStringInput | null,
  faq?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
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

export type Project = {
  __typename: "Project",
  slug: string,
  name: string,
  bio: string,
  categories?: ModelProjectCategoriesConnection | null,
  socials?: Array< string | null > | null,
  description?: string | null,
  githubRepoUrl?: string | null,
  tokenSymbol?: string | null,
  openJobs?: Array< string | null > | null,
  team?: Array< string | null > | null,
  faq?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProjectCategoriesConnection = {
  __typename: "ModelProjectCategoriesConnection",
  items:  Array<ProjectCategories | null >,
  nextToken?: string | null,
};

export type ProjectCategories = {
  __typename: "ProjectCategories",
  id: string,
  projectSlug: string,
  categoryId: string,
  project: Project,
  category: Category,
  createdAt: string,
  updatedAt: string,
};

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  description?: string | null,
  projects?: ModelProjectCategoriesConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProjectInput = {
  slug: string,
  name?: string | null,
  bio?: string | null,
  socials?: Array< string | null > | null,
  description?: string | null,
  githubRepoUrl?: string | null,
  tokenSymbol?: string | null,
  openJobs?: Array< string | null > | null,
  team?: Array< string | null > | null,
  faq?: Array< string | null > | null,
};

export type DeleteProjectInput = {
  slug: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateProjectCategoriesInput = {
  id?: string | null,
  projectSlug: string,
  categoryId: string,
};

export type ModelProjectCategoriesConditionInput = {
  projectSlug?: ModelStringInput | null,
  categoryId?: ModelIDInput | null,
  and?: Array< ModelProjectCategoriesConditionInput | null > | null,
  or?: Array< ModelProjectCategoriesConditionInput | null > | null,
  not?: ModelProjectCategoriesConditionInput | null,
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

export type UpdateProjectCategoriesInput = {
  id: string,
  projectSlug?: string | null,
  categoryId?: string | null,
};

export type DeleteProjectCategoriesInput = {
  id: string,
};

export type ModelProjectFilterInput = {
  slug?: ModelStringInput | null,
  name?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  socials?: ModelStringInput | null,
  description?: ModelStringInput | null,
  githubRepoUrl?: ModelStringInput | null,
  tokenSymbol?: ModelStringInput | null,
  openJobs?: ModelStringInput | null,
  team?: ModelStringInput | null,
  faq?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type ModelProjectCategoriesFilterInput = {
  id?: ModelIDInput | null,
  projectSlug?: ModelStringInput | null,
  categoryId?: ModelIDInput | null,
  and?: Array< ModelProjectCategoriesFilterInput | null > | null,
  or?: Array< ModelProjectCategoriesFilterInput | null > | null,
  not?: ModelProjectCategoriesFilterInput | null,
};

export type ModelSubscriptionProjectFilterInput = {
  slug?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  socials?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  githubRepoUrl?: ModelSubscriptionStringInput | null,
  tokenSymbol?: ModelSubscriptionStringInput | null,
  openJobs?: ModelSubscriptionStringInput | null,
  team?: ModelSubscriptionStringInput | null,
  faq?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProjectFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectFilterInput | null > | null,
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

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
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

export type ModelSubscriptionProjectCategoriesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  projectSlug?: ModelSubscriptionStringInput | null,
  categoryId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProjectCategoriesFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectCategoriesFilterInput | null > | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    slug: string,
    name: string,
    bio: string,
    categories?:  {
      __typename: "ModelProjectCategoriesConnection",
      items:  Array< {
        __typename: "ProjectCategories",
        id: string,
        projectSlug: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    socials?: Array< string | null > | null,
    description?: string | null,
    githubRepoUrl?: string | null,
    tokenSymbol?: string | null,
    openJobs?: Array< string | null > | null,
    team?: Array< string | null > | null,
    faq?: Array< string | null > | null,
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
    slug: string,
    name: string,
    bio: string,
    categories?:  {
      __typename: "ModelProjectCategoriesConnection",
      items:  Array< {
        __typename: "ProjectCategories",
        id: string,
        projectSlug: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    socials?: Array< string | null > | null,
    description?: string | null,
    githubRepoUrl?: string | null,
    tokenSymbol?: string | null,
    openJobs?: Array< string | null > | null,
    team?: Array< string | null > | null,
    faq?: Array< string | null > | null,
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
    slug: string,
    name: string,
    bio: string,
    categories?:  {
      __typename: "ModelProjectCategoriesConnection",
      items:  Array< {
        __typename: "ProjectCategories",
        id: string,
        projectSlug: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    socials?: Array< string | null > | null,
    description?: string | null,
    githubRepoUrl?: string | null,
    tokenSymbol?: string | null,
    openJobs?: Array< string | null > | null,
    team?: Array< string | null > | null,
    faq?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description?: string | null,
    projects?:  {
      __typename: "ModelProjectCategoriesConnection",
      items:  Array< {
        __typename: "ProjectCategories",
        id: string,
        projectSlug: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description?: string | null,
    projects?:  {
      __typename: "ModelProjectCategoriesConnection",
      items:  Array< {
        __typename: "ProjectCategories",
        id: string,
        projectSlug: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description?: string | null,
    projects?:  {
      __typename: "ModelProjectCategoriesConnection",
      items:  Array< {
        __typename: "ProjectCategories",
        id: string,
        projectSlug: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProjectCategoriesMutationVariables = {
  input: CreateProjectCategoriesInput,
  condition?: ModelProjectCategoriesConditionInput | null,
};

export type CreateProjectCategoriesMutation = {
  createProjectCategories?:  {
    __typename: "ProjectCategories",
    id: string,
    projectSlug: string,
    categoryId: string,
    project:  {
      __typename: "Project",
      slug: string,
      name: string,
      bio: string,
      categories?:  {
        __typename: "ModelProjectCategoriesConnection",
        nextToken?: string | null,
      } | null,
      socials?: Array< string | null > | null,
      description?: string | null,
      githubRepoUrl?: string | null,
      tokenSymbol?: string | null,
      openJobs?: Array< string | null > | null,
      team?: Array< string | null > | null,
      faq?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      description?: string | null,
      projects?:  {
        __typename: "ModelProjectCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProjectCategoriesMutationVariables = {
  input: UpdateProjectCategoriesInput,
  condition?: ModelProjectCategoriesConditionInput | null,
};

export type UpdateProjectCategoriesMutation = {
  updateProjectCategories?:  {
    __typename: "ProjectCategories",
    id: string,
    projectSlug: string,
    categoryId: string,
    project:  {
      __typename: "Project",
      slug: string,
      name: string,
      bio: string,
      categories?:  {
        __typename: "ModelProjectCategoriesConnection",
        nextToken?: string | null,
      } | null,
      socials?: Array< string | null > | null,
      description?: string | null,
      githubRepoUrl?: string | null,
      tokenSymbol?: string | null,
      openJobs?: Array< string | null > | null,
      team?: Array< string | null > | null,
      faq?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      description?: string | null,
      projects?:  {
        __typename: "ModelProjectCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProjectCategoriesMutationVariables = {
  input: DeleteProjectCategoriesInput,
  condition?: ModelProjectCategoriesConditionInput | null,
};

export type DeleteProjectCategoriesMutation = {
  deleteProjectCategories?:  {
    __typename: "ProjectCategories",
    id: string,
    projectSlug: string,
    categoryId: string,
    project:  {
      __typename: "Project",
      slug: string,
      name: string,
      bio: string,
      categories?:  {
        __typename: "ModelProjectCategoriesConnection",
        nextToken?: string | null,
      } | null,
      socials?: Array< string | null > | null,
      description?: string | null,
      githubRepoUrl?: string | null,
      tokenSymbol?: string | null,
      openJobs?: Array< string | null > | null,
      team?: Array< string | null > | null,
      faq?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      description?: string | null,
      projects?:  {
        __typename: "ModelProjectCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProjectQueryVariables = {
  slug: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    slug: string,
    name: string,
    bio: string,
    categories?:  {
      __typename: "ModelProjectCategoriesConnection",
      items:  Array< {
        __typename: "ProjectCategories",
        id: string,
        projectSlug: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    socials?: Array< string | null > | null,
    description?: string | null,
    githubRepoUrl?: string | null,
    tokenSymbol?: string | null,
    openJobs?: Array< string | null > | null,
    team?: Array< string | null > | null,
    faq?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProjectsQueryVariables = {
  slug?: string | null,
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
      slug: string,
      name: string,
      bio: string,
      categories?:  {
        __typename: "ModelProjectCategoriesConnection",
        nextToken?: string | null,
      } | null,
      socials?: Array< string | null > | null,
      description?: string | null,
      githubRepoUrl?: string | null,
      tokenSymbol?: string | null,
      openJobs?: Array< string | null > | null,
      team?: Array< string | null > | null,
      faq?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description?: string | null,
    projects?:  {
      __typename: "ModelProjectCategoriesConnection",
      items:  Array< {
        __typename: "ProjectCategories",
        id: string,
        projectSlug: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      description?: string | null,
      projects?:  {
        __typename: "ModelProjectCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectCategoriesQueryVariables = {
  id: string,
};

export type GetProjectCategoriesQuery = {
  getProjectCategories?:  {
    __typename: "ProjectCategories",
    id: string,
    projectSlug: string,
    categoryId: string,
    project:  {
      __typename: "Project",
      slug: string,
      name: string,
      bio: string,
      categories?:  {
        __typename: "ModelProjectCategoriesConnection",
        nextToken?: string | null,
      } | null,
      socials?: Array< string | null > | null,
      description?: string | null,
      githubRepoUrl?: string | null,
      tokenSymbol?: string | null,
      openJobs?: Array< string | null > | null,
      team?: Array< string | null > | null,
      faq?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      description?: string | null,
      projects?:  {
        __typename: "ModelProjectCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProjectCategoriesQueryVariables = {
  filter?: ModelProjectCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectCategoriesQuery = {
  listProjectCategories?:  {
    __typename: "ModelProjectCategoriesConnection",
    items:  Array< {
      __typename: "ProjectCategories",
      id: string,
      projectSlug: string,
      categoryId: string,
      project:  {
        __typename: "Project",
        slug: string,
        name: string,
        bio: string,
        socials?: Array< string | null > | null,
        description?: string | null,
        githubRepoUrl?: string | null,
        tokenSymbol?: string | null,
        openJobs?: Array< string | null > | null,
        team?: Array< string | null > | null,
        faq?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      },
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProjectCategoriesByProjectSlugQueryVariables = {
  projectSlug: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectCategoriesByProjectSlugQuery = {
  projectCategoriesByProjectSlug?:  {
    __typename: "ModelProjectCategoriesConnection",
    items:  Array< {
      __typename: "ProjectCategories",
      id: string,
      projectSlug: string,
      categoryId: string,
      project:  {
        __typename: "Project",
        slug: string,
        name: string,
        bio: string,
        socials?: Array< string | null > | null,
        description?: string | null,
        githubRepoUrl?: string | null,
        tokenSymbol?: string | null,
        openJobs?: Array< string | null > | null,
        team?: Array< string | null > | null,
        faq?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      },
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProjectCategoriesByCategoryIdQueryVariables = {
  categoryId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectCategoriesByCategoryIdQuery = {
  projectCategoriesByCategoryId?:  {
    __typename: "ModelProjectCategoriesConnection",
    items:  Array< {
      __typename: "ProjectCategories",
      id: string,
      projectSlug: string,
      categoryId: string,
      project:  {
        __typename: "Project",
        slug: string,
        name: string,
        bio: string,
        socials?: Array< string | null > | null,
        description?: string | null,
        githubRepoUrl?: string | null,
        tokenSymbol?: string | null,
        openJobs?: Array< string | null > | null,
        team?: Array< string | null > | null,
        faq?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      },
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    slug: string,
    name: string,
    bio: string,
    categories?:  {
      __typename: "ModelProjectCategoriesConnection",
      items:  Array< {
        __typename: "ProjectCategories",
        id: string,
        projectSlug: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    socials?: Array< string | null > | null,
    description?: string | null,
    githubRepoUrl?: string | null,
    tokenSymbol?: string | null,
    openJobs?: Array< string | null > | null,
    team?: Array< string | null > | null,
    faq?: Array< string | null > | null,
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
    slug: string,
    name: string,
    bio: string,
    categories?:  {
      __typename: "ModelProjectCategoriesConnection",
      items:  Array< {
        __typename: "ProjectCategories",
        id: string,
        projectSlug: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    socials?: Array< string | null > | null,
    description?: string | null,
    githubRepoUrl?: string | null,
    tokenSymbol?: string | null,
    openJobs?: Array< string | null > | null,
    team?: Array< string | null > | null,
    faq?: Array< string | null > | null,
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
    slug: string,
    name: string,
    bio: string,
    categories?:  {
      __typename: "ModelProjectCategoriesConnection",
      items:  Array< {
        __typename: "ProjectCategories",
        id: string,
        projectSlug: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    socials?: Array< string | null > | null,
    description?: string | null,
    githubRepoUrl?: string | null,
    tokenSymbol?: string | null,
    openJobs?: Array< string | null > | null,
    team?: Array< string | null > | null,
    faq?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description?: string | null,
    projects?:  {
      __typename: "ModelProjectCategoriesConnection",
      items:  Array< {
        __typename: "ProjectCategories",
        id: string,
        projectSlug: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description?: string | null,
    projects?:  {
      __typename: "ModelProjectCategoriesConnection",
      items:  Array< {
        __typename: "ProjectCategories",
        id: string,
        projectSlug: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description?: string | null,
    projects?:  {
      __typename: "ModelProjectCategoriesConnection",
      items:  Array< {
        __typename: "ProjectCategories",
        id: string,
        projectSlug: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProjectCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionProjectCategoriesFilterInput | null,
};

export type OnCreateProjectCategoriesSubscription = {
  onCreateProjectCategories?:  {
    __typename: "ProjectCategories",
    id: string,
    projectSlug: string,
    categoryId: string,
    project:  {
      __typename: "Project",
      slug: string,
      name: string,
      bio: string,
      categories?:  {
        __typename: "ModelProjectCategoriesConnection",
        nextToken?: string | null,
      } | null,
      socials?: Array< string | null > | null,
      description?: string | null,
      githubRepoUrl?: string | null,
      tokenSymbol?: string | null,
      openJobs?: Array< string | null > | null,
      team?: Array< string | null > | null,
      faq?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      description?: string | null,
      projects?:  {
        __typename: "ModelProjectCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProjectCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionProjectCategoriesFilterInput | null,
};

export type OnUpdateProjectCategoriesSubscription = {
  onUpdateProjectCategories?:  {
    __typename: "ProjectCategories",
    id: string,
    projectSlug: string,
    categoryId: string,
    project:  {
      __typename: "Project",
      slug: string,
      name: string,
      bio: string,
      categories?:  {
        __typename: "ModelProjectCategoriesConnection",
        nextToken?: string | null,
      } | null,
      socials?: Array< string | null > | null,
      description?: string | null,
      githubRepoUrl?: string | null,
      tokenSymbol?: string | null,
      openJobs?: Array< string | null > | null,
      team?: Array< string | null > | null,
      faq?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      description?: string | null,
      projects?:  {
        __typename: "ModelProjectCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProjectCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionProjectCategoriesFilterInput | null,
};

export type OnDeleteProjectCategoriesSubscription = {
  onDeleteProjectCategories?:  {
    __typename: "ProjectCategories",
    id: string,
    projectSlug: string,
    categoryId: string,
    project:  {
      __typename: "Project",
      slug: string,
      name: string,
      bio: string,
      categories?:  {
        __typename: "ModelProjectCategoriesConnection",
        nextToken?: string | null,
      } | null,
      socials?: Array< string | null > | null,
      description?: string | null,
      githubRepoUrl?: string | null,
      tokenSymbol?: string | null,
      openJobs?: Array< string | null > | null,
      team?: Array< string | null > | null,
      faq?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      description?: string | null,
      projects?:  {
        __typename: "ModelProjectCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
