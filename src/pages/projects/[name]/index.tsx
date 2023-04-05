// ** Next Imports
import Head from "next/head";
import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";

import type { ReactElement } from "react";

// ** Amplify Imports
import { graphqlOperation, withSSRContext } from "aws-amplify";
import { getProject } from "../../../graphql/queries";

// ** Custom Components
import Description from "../../../components/Public/Projects/ProjectDetail/Description/Description";
import GitHubActivity from "../../../components/Public/Projects/ProjectDetail/GitHubActivity/GitHubActivity";
import TokenStats from "../../../components/Public/Projects/ProjectDetail/TokenStats/TokenStats";
import Team from "../../../components/Public/Projects/ProjectDetail/Team/Team";
import Articles from "../../../components/Public/Projects/ProjectDetail/Articles/Articles";
import Faq from "../../../components/Public/Projects/ProjectDetail/Faq/Faq";
import Jobs from "../../../components/Public/Projects/ProjectDetail/Jobs/Jobs";
import SideNavbar from "../../../components/Public/Projects/ProjectDetail/SideNavbar/SideNavbar";

import UserLayout from "../../../layouts/UserLayout";

// ** Types
import { Project } from "../../../API";

export const getServerSideProps: GetServerSideProps<{
  data: Project;
}> = async (context) => {
  const SSR = withSSRContext();

  const data = await SSR.API.graphql(
    graphqlOperation(getProject, {
      id: context.params?.name,
    })
  );

  //TODO: Change approved to not approved
  if (data.data.getProject === null) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data.data.getProject,
    },
  };
};

export default function ProjectDetail({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{data.name} - Awesome Lens</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className="relative container mx-auto scroll-smooth max-w-8xl mb-36 px-6 md:px-0">
        <div className="py-8 md:py-14 mb-16 relative bg-indigo-200 overflow-hidden border-4 border-indigo-900 rounded-2xl px-8 md:px-24">
          <Image
            src="/banner-right.svg"
            alt="left-bg-banner"
            className="absolute top-0 md:h-full right-0 w-1/2 lg:w-1/3 opacity-60"
            width={500}
            height={500}
          />
          <Image
            src="/banner-left.svg"
            alt="left-bg-banner"
            className="absolute top-0 md:h-full left-0 w-1/2 lg:w-1/3 opacity-60"
            width={500}
            height={500}
          />
          <div className="relative">
            <div className="mx-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-full md:w-1/6 p-2">
                  <div className="relative">
                    <Image
                      src="/lens_logo.jpg"
                      alt={data.name}
                      width={150}
                      height={150}
                      className="rounded-2xl border-[3px] border-indigo-900"
                    />
                  </div>
                </div>
                <div className="w-full md:w-4/6 p-2">
                  <span className="text-md md:text-lg text-left font-extrabold text-indigo-500">
                    AWESOME
                  </span>
                  <h1 className="text-4xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold font-heading mb-6 mt-4 text-black ">
                    {data.name}
                  </h1>
                  <p className="text-md md:text-xl leading-6 font-medium text-black tracking-wide">
                    {data.bio}
                  </p>
                  <div className="border-t-4 border-indigo-900 max-w-xs pt-6 mt-6">
                    <span className="inline-flex mr-3 h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm">
                      {data.name}
                    </span>
                    <span className="inline-flex h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                      Protocol
                    </span>
                  </div>
                  <div className="max-w-2xl mx-auto"></div>
                </div>
                <div className="w-full md:w-1/6 p-2 mx-auto hover:text-indigo-500"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-20">
          <div className="col-span-4 md:col-span-3 lg:col-span-3">
            <div className="grid grid-cols-1">
              <Description open={true} project={data} />
              <TokenStats
                open={data.tokenSymbol ? true : false}
                project={data}
              />
              <GitHubActivity
                open={data.githubRepoUrl ? true : false}
                project={data}
              />
              <Team open={data.team ? true : false} project={data} />
              <Articles open={data.articles ? true : false} project={data} />
              <Faq open={data.faq ? true : false} project={data} />
              <Jobs open={data.openJobs ? true : false} project={data} />
            </div>
          </div>
          <div className="sticky top-0 hidden md:block lg:block">
            <div className="col-span-1 sticky top-[60px] scroll-smooth sm:hidden md:hidden lg:block">
              <SideNavbar open={true} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

ProjectDetail.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
