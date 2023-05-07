/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
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
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle($filter: ModelSubscriptionArticleFilterInput) {
    onCreateArticle(filter: $filter) {
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
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle($filter: ModelSubscriptionArticleFilterInput) {
    onUpdateArticle(filter: $filter) {
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
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle($filter: ModelSubscriptionArticleFilterInput) {
    onDeleteArticle(filter: $filter) {
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
