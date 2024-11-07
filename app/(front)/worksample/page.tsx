import dynamic from "next/dynamic";

import { SimpleIconsDm } from "@/components/icons/Dm";
import { SimpleIconsNextui } from "@/components/icons/UI";
import { GuidanceVisualImpairment } from "@/components/icons/Videntity";
import { TeenyiconsSignOutline } from "@/components/icons/SignBoard";
import { GameIconsCharcuterie } from "@/components/icons/Char";
import { GameIconsCircularSawblade } from "@/components/icons/Saw";
import { GisLandcoverMap } from "@/components/icons/CoverPage";
import { FluentMdl2PythonLogoYellow } from "@/components/icons/LogoD";
import { CodiconFileMedia } from "@/components/icons/Flyer";
import { TablerChartInfographic } from "@/components/icons/InfoGraph";
import { IcSharpRestaurantMenu } from "@/components/icons/FoodMenu";
import { HugeiconsPackage } from "@/components/icons/Package";
import { GameIconsTargetPoster } from "@/components/icons/Poster";
import Image from "next/image";
import Link from "next/link";
import TaskCounter from "@/components/TaskCounter";
import { convertToSlug } from "@/lib/nadish";
export const metadata = {
  title: "Our Work",
};

async function page() {
  const data = myWork2Data();

  return (
    <div className="flex flex-col items-center justify-center    ">
      {/* <TitleHeader title={"mywork.pagetitle"} /> */}
      <div className="flex flex-row flex-wrap  gap-10 p-10 items-center justify-center   w-full  ">
        {data?.data?.map((el) => {
          const titleUrl = convertToSlug(el.title);
          return (
            <Link
              href={`/worksample/${titleUrl}?prefix=${el.prefix}`}
              prefetch={false}
              className="relative flex  items-center justify-center bg-secondary w-[200px] h-[120px] rounded-lg flex-col   hover:bg-primary/30 cursor-pointer border border-border "
              key={el.id}
            >
              <TaskCounter prefix={el.prefix} />
              {el.icon}
              {el.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default page;

export function myWork2Data() {
  return {
    data: [
      {
        id: "sm",
        title: "data smMenuTilte",
        icon: <SimpleIconsDm />,
        prefix: "sm",
      },
      {
        id: "uiux",
        title: "data uiUxMenuTitle",
        icon: <SimpleIconsNextui />,
        prefix: "ui",
      },
      {
        id: "identity",
        title: "data.identityMenuTitle",
        icon: <GuidanceVisualImpairment />,
        prefix: "Identity",
      },

      {
        id: "signboard",
        title: "data.singBoardMEnuTitle",
        icon: <TeenyiconsSignOutline />,
        prefix: "sinboard",
      },
      {
        id: "cnc",
        title: "data.cncMenuTitle",
        icon: <GameIconsCircularSawblade />,
        prefix: "cnc",
        taskCounter: 5,
      },
      {
        id: "Character",
        title: "data.Character",
        icon: <GameIconsCharcuterie />,
        prefix: "character",
      },
      {
        id: "Coverpage",
        title: "data.Coverpage",
        icon: <GisLandcoverMap />,
        prefix: "coverage",
      },
      {
        id: "Logo",
        title: "data.Logo",
        icon: <FluentMdl2PythonLogoYellow />,
        prefix: "logo",
      },
      {
        id: "flyer",
        title: "data.flyer",
        icon: <CodiconFileMedia />,

        prefix: "flyer",
      },
      {
        id: "infograph",
        title: "data.infograph",
        icon: <TablerChartInfographic />,
        prefix: "infograph",
      },
      {
        id: "menu",
        title: "data.menu",
        icon: <IcSharpRestaurantMenu />,
        prefix: "menu",
      },
      {
        id: "package",
        title: "data.package",
        icon: <HugeiconsPackage />,
        prefix: "package",
      },
      {
        id: "poster",
        title: "data.poster",
        icon: <GameIconsTargetPoster />,
        prefix: "poster",
      },
    ],
  };
}

const TitleHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-center justify-start   sm:h-[70vh]  p-4 font-lateef">
      <div className="text-2xl max-w-[500px]  border bg-card  border-white/20 rounded-lg p-4 leading-9 text-pretty text-justify">
        {title}
      </div>
      <div className="mt-6 animate-bounce border bg-card  border-white/20 rounded-full p-4 ">
        <svg
          className="w-8 h-8 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m0 0l-4-4m4 4l4-4"
          />
        </svg>
      </div>
    </div>
  );
};
