/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($slug: String!) {
    getProject(slug: $slug) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $slug: String
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProjects(
      slug: $slug
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        projects {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProjectCategories = /* GraphQL */ `
  query GetProjectCategories($id: ID!) {
    getProjectCategories(id: $id) {
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
export const listProjectCategories = /* GraphQL */ `
  query ListProjectCategories(
    $filter: ModelProjectCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectSlug
        categoryId
        project {
          slug
          name
          bio
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const projectCategoriesByProjectSlug = /* GraphQL */ `
  query ProjectCategoriesByProjectSlug(
    $projectSlug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectCategoriesByProjectSlug(
      projectSlug: $projectSlug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectSlug
        categoryId
        project {
          slug
          name
          bio
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const projectCategoriesByCategoryId = /* GraphQL */ `
  query ProjectCategoriesByCategoryId(
    $categoryId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectCategoriesByCategoryId(
      categoryId: $categoryId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectSlug
        categoryId
        project {
          slug
          name
          bio
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
