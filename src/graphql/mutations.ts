/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      walletAddress
      username
      type
      status
      project {
        items {
          slug
          status
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
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      walletAddress
      username
      type
      status
      project {
        items {
          slug
          status
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      walletAddress
      username
      type
      status
      project {
        items {
          slug
          status
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
      createdAt
      updatedAt
    }
  }
`;
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      slug
      status
      name
      bio
      image
      categories {
        items {
          id
          projectSlug
          categoryId
          project {
            slug
            status
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
          project {
            slug
            status
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
      user {
        walletAddress
        username
        type
        status
        project {
          items {
            slug
            status
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
      userWalletAddress
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
      status
      name
      bio
      image
      categories {
        items {
          id
          projectSlug
          categoryId
          project {
            slug
            status
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
          project {
            slug
            status
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
      user {
        walletAddress
        username
        type
        status
        project {
          items {
            slug
            status
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
      userWalletAddress
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
      status
      name
      bio
      image
      categories {
        items {
          id
          projectSlug
          categoryId
          project {
            slug
            status
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
          project {
            slug
            status
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
      user {
        walletAddress
        username
        type
        status
        project {
          items {
            slug
            status
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
      userWalletAddress
      createdAt
      updatedAt
    }
  }
`;
export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
      id
      title
      description
      body
      image
      isExternal
      externalUrl
      project {
        slug
        status
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
      projectSlug
      createdAt
      updatedAt
    }
  }
`;
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
      id
      title
      description
      body
      image
      isExternal
      externalUrl
      project {
        slug
        status
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
      projectSlug
      createdAt
      updatedAt
    }
  }
`;
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
      id
      title
      description
      body
      image
      isExternal
      externalUrl
      project {
        slug
        status
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
      projectSlug
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
          project {
            slug
            status
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
          project {
            slug
            status
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
          project {
            slug
            status
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
        status
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
      category {
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
        status
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
      category {
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
        status
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
      category {
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
      createdAt
      updatedAt
    }
  }
`;
