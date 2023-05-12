## Awesome Polka

Apply this steps to run this application locally.

### 1 - Run this command

```
yarn install
```

### 2 -  Create an env file on root folder with below variables (.env.local) 

```
NEXT_PUBLIC_ALGOLIA_APPLICATION_ID=<algolia-app-id>
NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY=<algolia-search-only-api-key>
NEXT_PUBLIC_ALGOLIA_PROJECTS_INDEX_NAME=dev_projects
NEXT_PUBLIC_ALGOLIA_ARTICLES_INDEX_NAME=dev_articles
NEXT_PUBLIC_TYPEFORM_PROJECTS_FORM_ID=L4jpfJKl
NEXT_PUBLIC_TYPEFORM_SUPPORT_FORM_ID=Geee0MBz
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=<analytics-token>
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=<walletconnect-cloud-token>
NEXT_PUBLIC_LENS_API_URL=https://api-mumbai.lens.dev
```

### 3 - Amplify CLI (~10 min)

You need to have an AWS account, follow this [link](https://docs.amplify.aws/cli/start/install/) to create an AWS IAM identity to use with Amplify CLI.

Install the ```@aws-amplify/cli``` package globally.

```
npm install -g @aws-amplify/cli
```

Run this command from root folder to create an identity on cli, details like region not so important, you can choose any region, if you had any trouble please visit the upper link.

```
amplify configure
```

Run this command to create an application on AWS Amplify.

```
amplify init
```

Push your updates to cloud, this will take some time.

```
amplify push
```

You can check the status of resources with this command, if you see the similar output, everything goes well, we can move onto next steps.

```
amplify status
```

### 4 - Algolia (Search Infrastructure)

**4.1 -** Create an Algolia account on this [link](https://www.algolia.com/users/sign_up)
**4.2 -** Visit Algolia Dashboard and create an application 
**4.3 -** Copy application ıd (algolia-app-id) and search only api key (algolia-search-only-api-key) from this dashboard and paste to relevant areas in .env.local
**4.4 -** Create ```dev_projects``` index
**4.5 -** Add this example data (manually) to ```dev_projects``` like below
```
[
    {
      "id": "1",
      "logo": "https://pbs.twimg.com/profile_images/1430157114194944000/72gTG-fc_400x400.jpg",
      "name": "Kusama",
      "description": "Kusama is a scalable multi-chain network for radical innovation and early stage @Polkadotdeployments.",
      "socials": [
        {}
      ],
      "categories.lvl0": [
        "Protocols"
      ]
    },
    {
      "id": "2",
      "logo": "https://pbs.twimg.com/profile_images/1545343566574194691/SDAgOchi_400x400.jpg",
      "name": "Polkadot",
      "description": "Polkadot empowers blockchain networks to work together under the protection of shared security",
      "socials": [
        {}
      ],
      "categories.lvl0": [
        "Protocols", "DeFi"
      ]
    },
    {
      "id": "3",
      "logo": "https://pbs.twimg.com/profile_images/1430157114194944000/72gTG-fc_400x400.jpg",
      "name": "Kusama",
      "description": "Kusama is a scalable multi-chain network for radical innovation and early stage @Polkadotdeployments.",
      "socials": [
        {}
      ],
      "categories.lvl0": [
        "Integrations"
      ]
    }
]
```
**4.6 -** Select configuration on index detail tab and click searchable attributes button on side navigation, add these searchable attributes ```categories.lvl0```, ```description```, ```name```
**4.7 -** Select configuration on index detail tab and click facets button on side navigation, add ann atribute like ```categories.lvl0```, ```description```, ```name```
**4.8 -** Create ```dev_articles``` index
**4.9 -** Add data (manually) to ```dev_articles``` like below
```
[
    {
      "id": "1",
      "title": "Polkadot 2022 Roundup",
      "description": "This year, while the industry slid headlong into yet another crypto winter, the Polkadot community was busy building and launching the largest and most diverse ecosystem of layer-1 blockchains in the world, with several core technologies rolled out to propel the ecosystem forward into 2023.",
      "project": "Polkadot",
      "date": "December 31, 2022",
      "image": "https://cms.polkadot.network/content/images/2022/12/Roundup.png",
      "category": "Kusama",
      "originalLink": "https://polkadot.network/blog/polkadot-2022-roundup/"
    },
    {
      "id": "2",
      "title": "A Year in Parachains, Part 2: System Chains, Smart Contracts, & Social Media",
      "description": "It’s been just over a year since parachains first launched on Polkadot, and already the network boasts the largest ecosystem of use-case specific blockchains in the world. ",
      "project": "Polkadot",
      "date": "February 9, 2023",
      "image": "https://cms.polkadot.network/content/images/2023/02/A-Year-in-Parachains-2---no-logo.png",
      "category": "Parachains",
      "originalLink": "https://polkadot.network/blog/a-year-in-parachains-part-2-system-chains-smart-contracts-social-media/"
    },
    {
      "id": "3",
      "title": "Polkadot Roadmap Roundup",
      "description": "As the Polkadot Community comes into the last quarter of 2022, we at Parity Technologies would like to update the community on a number of important development topics we’ve been working on.",
      "project": "Polkadot",
      "date": "September 26, 2022",
      "image": "https://cms.polkadot.network/content/images/2022/09/004-smol.png",
      "category": "Governance",
      "originalLink": "https://polkadot.network/blog/polkadot-roadmap-roundup/"
    }
]
```

### 5 - Add User and Project to DynamoDB

Use this snippet to add user as AWSJSON on DynamoDB, visit DynamoDB console on AWS UI, make sure you are in the same region as you stated in first step!

**Tables > User - {aws-generated-id} - {amplify env name } > Explore Table Items > Create Item > Select JSON View**

**Note:** Change wallet address with your wallet address!

```
{
  "walletAddress": {
    "S": "0x9282162670Bfd24786010Bc2ECCA5E3Ff617A675"
  },
  "createdAt": {
    "S": "2023-04-12T17:06:19.717Z"
  },
  "id": {
    "S": "5551ab37-c14f-43d2-a155-668c15502fa5"
  },
  "nonce": {
    "S": "sasasdasdasdasdasd"
  },
  "status": {
    "S": "APPROVED"
  },
  "type": {
    "S": "PROJECT_OWNER"
  },
  "updatedAt": {
    "S": "2023-04-12T17:06:19.717Z"
  },
  "username": {
    "S": "tolgayayci"
  },
  "__typename": {
    "S": "User"
  }
}
````

Use this snippet to add project as AWSJSON on DynamoDB

**Tables > Project - {aws-generated-id} - {amplify env name } > Explore Table Items > Create Item > Select JSON View**

**Note:** Change wallet address with your wallet address!

```
{
  "slug": {
    "S": "awesome-polka"
  },
  "bio": {
    "S": "Social hub for discovering projects on Polkadot"
  },
  "createdAt": {
    "S": "2023-01-18T12:39:22.557Z"
  },
  "description": {
    "S": "Awesome Polka - the ultimate social platform for discovering and exploring the most exciting projects in the Polkadot ecosystem! Whether you're a developer, investor, or simply a curious enthusiast, Awesome Polka provides a one-stop-shop for accessing comprehensive and detailed applications about the projects. With this cutting-edge platform, you can discover the latest updates and developments, connect with project owners, and stay up-to-date with the most innovative projects in the Polkadot community."
  },
  "detailedDesc": {
    "S": "Awesome Polkadot"
  },
  "faq": {
    "L": [
      {
        "M": {
          "answer": {
            "S": "Awesome Polka - the ultimate social platform for discovering and exploring the most exciting projects in the Polkadot ecosystem! Whether you're a developer, investor, or simply a curious enthusiast, Awesome Polka provides a one-stop-shop for accessing comprehensive and detailed applications about the projects. With this cutting-edge platform, you can discover the latest updates and developments, connect with project owners, and stay up-to-date with the most innovative projects in the Polkadot community."
          },
          "question": {
            "S": "What is Awesome Polka?"
          }
        }
      },
      {
        "M": {
          "answer": {
            "S": "Project showcase platforms face several challenges that hinder their effectiveness in promoting and highlighting various projects. The most significant challenges include sustainability and limited ecosystem partner (admins - authorized ones like someone from a DAO) authorities on the platform. These challenges significantly affect user experience and discourage project owners and ecosystem partners from utilizing the platforms fully. To address these issues, there is a need to develop innovative and user-centric strategies that enhance the functionality and sustainability of showcase platforms."
          },
          "question": {
            "S": "Why do we need Awesome Polka?"
          }
        }
      }
    ]
  },
  "githubRepoUrl": {
    "S": "https://github.com/paritytech/polkadot"
  },
  "id": {
    "S": "awesome-polka"
  },
  "logo": {
    "S": "https://www.google.com"
  },
  "name": {
    "S": "Awesome Polkadot"
  },
  "openJobs": {
    "L": [
      {
        "M": {
          "category": {
            "S": "Engineering"
          },
          "link": {
            "S": "https://linkedin.com/"
          },
          "location": {
            "S": "New York, NY"
          },
          "remote": {
            "S": "Full Time"
          },
          "title": {
            "S": "Senior Frontend Engineer"
          },
          "type": {
            "S": "Full Time"
          }
        }
      },
      {
        "M": {
          "category": {
            "S": "Engineering"
          },
          "link": {
            "S": "https://linkedin.com/"
          },
          "location": {
            "S": "San Francisco"
          },
          "remote": {
            "S": "On Site"
          },
          "title": {
            "S": "Senior Backend Engineer"
          },
          "type": {
            "S": "Full Time"
          }
        }
      }
    ]
  },
  "shortDesc": {
    "S": "Awesome Polka"
  },
  "status": {
    "S": "NOT_APPROVED"
  },
  "team": {
    "L": [
      {
        "M": {
          "image": {
            "S": "ipfs://QmbjSndJiTR6YgBvNy8KQsB8mdfwi23io4yJuZgtsAtoW9/Screenshot%202023-05-08%20at%2014-55-01%20https%20__awesomepolka.org.png"
          },
          "linkedIn": {
            "S": "https://linkedin.com/in/tolgayayci/"
          },
          "name": {
            "S": "Tolga"
          },
          "role": {
            "S": "Creator"
          },
          "surname": {
            "S": "Yaycı"
          }
        }
      }
    ]
  },
  "updatedAt": {
    "S": "2023-05-08T12:00:55.508Z"
  },
  "userWalletAddress": {
    "S": "0x9282162670Bfd24786010Bc2ECCA5E3Ff617A675"
  },
  "__typename": {
    "S": "Project"
  }
}
```

After connect your wallet, you should see a ```Dashboard``` button on Footer for your added wallet Address, if you don't see and sure about your wallet address is correct, refresh the page.

### 6 - Run Tests & Showcase Build Warnings

```
yarn build
```

```
yarn test
```

