/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateProjectCategories = /* GraphQL */ `
  subscription OnCreateProjectCategories(
    $filter: ModelSubscriptionProjectCategoriesFilterInput
  ) {
    onCreateProjectCategories(filter: $filter) {
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
export const onUpdateProjectCategories = /* GraphQL */ `
  subscription OnUpdateProjectCategories(
    $filter: ModelSubscriptionProjectCategoriesFilterInput
  ) {
    onUpdateProjectCategories(filter: $filter) {
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
export const onDeleteProjectCategories = /* GraphQL */ `
  subscription OnDeleteProjectCategories(
    $filter: ModelSubscriptionProjectCategoriesFilterInput
  ) {
    onDeleteProjectCategories(filter: $filter) {
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
