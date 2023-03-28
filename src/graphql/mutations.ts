/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      slug
      name
      bio
      categories {
        items {
          id
          projectSlug
          categoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      socials
      description
      githubRepoUrl
      tokenSymbol
      openJobs
      team
      faq
      createdAt
      updatedAt
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      slug
      name
      bio
      categories {
        items {
          id
          projectSlug
          categoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      socials
      description
      githubRepoUrl
      tokenSymbol
      openJobs
      team
      faq
      createdAt
      updatedAt
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      slug
      name
      bio
      categories {
        items {
          id
          projectSlug
          categoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      socials
      description
      githubRepoUrl
      tokenSymbol
      openJobs
      team
      faq
      createdAt
      updatedAt
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      description
      projects {
        items {
          id
          projectSlug
          categoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      description
      projects {
        items {
          id
          projectSlug
          categoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      description
      projects {
        items {
          id
          projectSlug
          categoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createProjectCategories = /* GraphQL */ `
  mutation CreateProjectCategories(
    $input: CreateProjectCategoriesInput!
    $condition: ModelProjectCategoriesConditionInput
  ) {
    createProjectCategories(input: $input, condition: $condition) {
      id
      projectSlug
      categoryId
      project {
        slug
        name
        bio
        categories {
          nextToken
        }
        socials
        description
        githubRepoUrl
        tokenSymbol
        openJobs
        team
        faq
        createdAt
        updatedAt
      }
      category {
        id
        name
        description
        projects {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateProjectCategories = /* GraphQL */ `
  mutation UpdateProjectCategories(
    $input: UpdateProjectCategoriesInput!
    $condition: ModelProjectCategoriesConditionInput
  ) {
    updateProjectCategories(input: $input, condition: $condition) {
      id
      projectSlug
      categoryId
      project {
        slug
        name
        bio
        categories {
          nextToken
        }
        socials
        description
        githubRepoUrl
        tokenSymbol
        openJobs
        team
        faq
        createdAt
        updatedAt
      }
      category {
        id
        name
        description
        projects {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteProjectCategories = /* GraphQL */ `
  mutation DeleteProjectCategories(
    $input: DeleteProjectCategoriesInput!
    $condition: ModelProjectCategoriesConditionInput
  ) {
    deleteProjectCategories(input: $input, condition: $condition) {
      id
      projectSlug
      categoryId
      project {
        slug
        name
        bio
        categories {
          nextToken
        }
        socials
        description
        githubRepoUrl
        tokenSymbol
        openJobs
        team
        faq
        createdAt
        updatedAt
      }
      category {
        id
        name
        description
        projects {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
