/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($walletAddress: String!) {
    getUser(walletAddress: $walletAddress) {
      walletAddress
      nonce
      username
      type
      status
      project {
        items {
          slug
          name
          bio
          image
          socials
          description
          githubRepoUrl
          tokenSymbol
          openJobs
          team
          faq
          userWalletAddress
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $walletAddress: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      walletAddress: $walletAddress
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        walletAddress
        nonce
        username
        type
        status
        project {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      id
      title
      description
      body
      image
      isExternal
      externalUrl
      project {
        slug
        name
        bio
        image
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
        articles {
          nextToken
        }
        user {
          walletAddress
          nonce
          username
          type
          status
          createdAt
          updatedAt
        }
        userWalletAddress
        createdAt
        updatedAt
      }
      projectSlug
      createdAt
      updatedAt
    }
  }
`;
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        body
        image
        isExternal
        externalUrl
        project {
          slug
          name
          bio
          image
          socials
          description
          githubRepoUrl
          tokenSymbol
          openJobs
          team
          faq
          userWalletAddress
          createdAt
          updatedAt
        }
        projectSlug
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
export const articlesByProjectSlug = /* GraphQL */ `
  query ArticlesByProjectSlug(
    $projectSlug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    articlesByProjectSlug(
      projectSlug: $projectSlug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        body
        image
        isExternal
        externalUrl
        project {
          slug
          name
          bio
          image
          socials
          description
          githubRepoUrl
          tokenSymbol
          openJobs
          team
          faq
          userWalletAddress
          createdAt
          updatedAt
        }
        projectSlug
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($slug: String!) {
    getProject(slug: $slug) {
      slug
      name
      bio
      image
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
      articles {
        items {
          id
          title
          description
          body
          image
          isExternal
          externalUrl
          projectSlug
          createdAt
          updatedAt
        }
        nextToken
      }
      user {
        walletAddress
        nonce
        username
        type
        status
        project {
          nextToken
        }
        createdAt
        updatedAt
      }
      userWalletAddress
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
        image
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
        articles {
          nextToken
        }
        user {
          walletAddress
          nonce
          username
          type
          status
          createdAt
          updatedAt
        }
        userWalletAddress
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const projectsByUserWalletAddress = /* GraphQL */ `
  query ProjectsByUserWalletAddress(
    $userWalletAddress: String!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectsByUserWalletAddress(
      userWalletAddress: $userWalletAddress
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        slug
        name
        bio
        image
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
        articles {
          nextToken
        }
        user {
          walletAddress
          nonce
          username
          type
          status
          createdAt
          updatedAt
        }
        userWalletAddress
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
        image
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
        articles {
          nextToken
        }
        user {
          walletAddress
          nonce
          username
          type
          status
          createdAt
          updatedAt
        }
        userWalletAddress
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
          image
          socials
          description
          githubRepoUrl
          tokenSymbol
          openJobs
          team
          faq
          userWalletAddress
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
          image
          socials
          description
          githubRepoUrl
          tokenSymbol
          openJobs
          team
          faq
          userWalletAddress
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
          image
          socials
          description
          githubRepoUrl
          tokenSymbol
          openJobs
          team
          faq
          userWalletAddress
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
