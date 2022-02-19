import Layout from "../components/Layout";
import Image from "../components/Image";
import Link from "next/link";

import FarmGirl from "../../public/farmgorl.jpg";
import AfroGuy from "../../public/afrodude.jpg";
import RoseGirl from "../../public/rosegirl.jpg";
import GlassGirl from "../../public/glassgirlslay3by2.jpg";
import PurpGirl from "../../public/purpgurl.jpg";
import HazyGirl from "../../public/hazygirl.jpg";
import CrazyGirl from "../../public/crazygirl.jpg";
import BlueGuy from "../../public/blueguy.jpg";

type Props = {
  className?: string;
  children: React.ReactNode;
  desc?: string;
  title: string;
  thumb?: string;
};

/*

HELLO FUTURE MADDY DO NOT BE SCARED
This code may or may not be longer than 500 lines but it isn't really . It's mostly responsive css.
The first 3 consts are exactly the same except for names/pics/margins
Then middle 2 are the same except name/pic/margins
Finally last 3 consts are exactly the same except for names/pics/margins

I did it this way because I need very granular control over the breakpoints and how they affect the model pics.

Also so you dont delete it. Having mirrored hover and active states makes the hover effect happen on tap on mobile.

*/

const RoseGirlBlock = (
  <div className="group h-[225px] w-[150px] md:h-[300px] md:w-[200px] lg:h-[700px] lg:w-[466px] md:mx-2 lg:mr-8 relative hover:outline-4 hover:outline hover:outline-offset-1 sm:hover:outline-offset-4">
    {/* <div className="group h-[225px] w-[150px] md:h-[300px] md:w-[200px] lg:h-[700px] lg:w-[466px] md:mx-2 lg:mr-8 relative hover:outline-4 hover:outline hover:outline-offset-4 active:outline-4 active:outline active:outline-offset-4"></div> */}
    <Image src={RoseGirl} className="group-hover:blur-sm" />
    <text className="font-sans group-hover:hidden">WENDY COOKS</text>
    {/* stats */}
    <div
      className="
    hidden
    group-hover:flex
    group-hover:flex-col
    group-hover:absolute
    group-hover:bottom-2
    lg:group-hover:bottom-8
    group-hover:right-2
    lg:group-hover:right-8
"
    >
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"HEIGHT 5'7\""}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {'BUST 32"'}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {'WAIST 24"'}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {'HIPS 34.5"'}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"SHOE 8 US"}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"EYES BROWN"}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"HAIR BLACK"}
      </text>
    </div>
    <div
      className="
    hidden
    group-hover:block
    group-hover:absolute
    group-hover:top-2
    lg:group-hover:top-8
    group-hover:left-2
    lg:group-hover:left-8
"
    >
      <text className="font-sans text-xl md:text-3xl lg:text-6xl text-white mx-auto sm:mx-0">
        WENDY COOKS
      </text>
    </div>
  </div>
);

const FarmGirlBlock = (
  <div className="group h-[225px] w-[150px] md:h-[300px] md:w-[200px] lg:h-[700px] lg:w-[466px] md:mx-4 lg:mx-16 relative hover:outline-4 hover:outline hover:outline-offset-1 sm:hover:outline-offset-4">
    <Image src={FarmGirl} className="group-hover:blur-sm" />
    <text className="font-sans group-hover:hidden">JESS FELLOWS</text>
    {/* stats */}
    <div
      className="
      hidden
      group-hover:flex
      group-hover:flex-col
      group-hover:absolute
      group-hover:bottom-2
      lg:group-hover:bottom-8
      group-hover:right-2
      lg:group-hover:right-8"
    >
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"HEIGHT 5'7\""}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {'BUST 32"'}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {'WAIST 24"'}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {'HIPS 34.5"'}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"SHOE 8 US"}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"EYES BROWN"}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"HAIR BLACK"}
      </text>
    </div>
    <div
      className="
    hidden
    group-hover:block
    group-hover:absolute
    group-hover:top-2
    lg:group-hover:top-8
    group-hover:left-2
    lg:group-hover:left-8
"
    >
      <text className="font-sans text-xl md:text-3xl lg:text-6xl text-white">
        JESS FELLOWS
      </text>
    </div>
  </div>
);

const AfroGuyBlock = (
  <div className="group h-[225px] w-[150px] md:h-[300px] md:w-[200px] lg:h-[700px] lg:w-[466px] md:mx-2 lg:ml-8 relative hover:outline-4 hover:outline hover:outline-offset-1 sm:hover:outline-offset-4">
    <Image src={AfroGuy} className="group-hover:blur-sm" />
    <text className="font-sans group-hover:hidden">ALEX HAUST</text>
    {/* stats */}
    <div
      className="
    hidden
    group-hover:flex
    group-hover:flex-col
    group-hover:absolute
    group-hover:bottom-2
    lg:group-hover:bottom-8
    group-hover:right-2
    lg:group-hover:right-8
"
    >
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"HEIGHT 5'7\""}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {'BUST 32"'}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {'WAIST 24"'}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {'HIPS 34.5"'}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"SHOE 8 US"}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"EYES BROWN"}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"HAIR BLACK"}
      </text>
    </div>
    <div
      className="
    hidden
    group-hover:block
    group-hover:absolute
    group-hover:top-2
    lg:group-hover:top-8
    group-hover:left-2
    lg:group-hover:left-8
"
    >
      <text className="font-sans text-xl md:text-3xl lg:text-6xl text-white">
        ALEX HAUST
      </text>
    </div>
  </div>
);

const GlassGirlBlock = (
  <div className="group h-[225px] w-[150px] md:h-[450px] md:w-[300px] lg:h-[900px] lg:w-[600px] md:ml-4 lg:ml-16 mr-4 lg:mr-28 relative hover:outline-4 hover:outline hover:outline-offset-1 sm:hover:outline-offset-4">
    <Image src={GlassGirl} className="group-hover:blur-sm" />
    <text className="font-sans group-hover:hidden">SUMMER ARAGON</text>
    {/* stats */}
    <div
      className="
    hidden
    group-hover:flex
    group-hover:flex-col
    group-hover:absolute
    group-hover:bottom-2
    lg:group-hover:bottom-8
    group-hover:right-2
    lg:group-hover:right-8
"
    >
      <text className="font-sans text-sm md:text-2xl lg:text-5xl text-white">
        {"HEIGHT 5'7\""}
      </text>
      <text className="font-sans text-sm md:text-2xl lg:text-5xl text-white">
        {'BUST 32"'}
      </text>
      <text className="font-sans text-sm md:text-2xl lg:text-5xl text-white">
        {'WAIST 24"'}
      </text>
      <text className="font-sans text-sm md:text-2xl lg:text-5xl text-white">
        {'HIPS 34.5"'}
      </text>
      <text className="font-sans text-sm md:text-2xl lg:text-5xl text-white">
        {"SHOE 8 US"}
      </text>
      <text className="font-sans text-sm md:text-2xl lg:text-5xl text-white">
        {"EYES BROWN"}
      </text>
      <text className="font-sans text-sm md:text-2xl lg:text-5xl text-white">
        {"HAIR BLACK"}
      </text>
    </div>
    <div
      className="
    hidden
    group-hover:block
    group-hover:absolute
    group-hover:top-2
    lg:group-hover:top-8
    group-hover:left-2
    lg:group-hover:left-8
"
    >
      <text className="font-sans text-xl md:text-4xl lg:text-6xl text-white">
        SUMMER ARAGON
      </text>
    </div>
  </div>
);

const PurpGirlBlock = (
  <div className="group h-[225px] w-[150px] md:h-[450px] md:w-[300px] lg:h-[900px] lg:w-[600px] md:ml-4 lg:ml-28 mr-4 lg:mr-16 relative hover:outline-4 hover:outline hover:outline-offset-1 sm:hover:outline-offset-4">
    <Image src={PurpGirl} className="group-hover:blur-sm" />
    <text className="font-sans group-hover:hidden">AMANDA BINES</text>
    {/* stats */}
    <div
      className="
    hidden
    group-hover:flex
    group-hover:flex-col
    group-hover:absolute
    group-hover:bottom-2
    lg:group-hover:bottom-8
    group-hover:right-2
    lg:group-hover:right-8
"
    >
      <text className="font-sans text-sm md:text-2xl lg:text-5xl text-white">
        {"HEIGHT 5'7\""}
      </text>
      <text className="font-sans text-sm md:text-2xl lg:text-5xl text-white">
        {'BUST 32"'}
      </text>
      <text className="font-sans text-sm md:text-2xl lg:text-5xl text-white">
        {'WAIST 24"'}
      </text>
      <text className="font-sans text-sm md:text-2xl lg:text-5xl text-white">
        {'HIPS 34.5"'}
      </text>
      <text className="font-sans text-sm md:text-2xl lg:text-5xl text-white">
        {"SHOE 8 US"}
      </text>
      <text className="font-sans text-sm md:text-2xl lg:text-5xl text-white">
        {"EYES BROWN"}
      </text>
      <text className="font-sans text-sm md:text-2xl lg:text-5xl text-white">
        {"HAIR BLACK"}
      </text>
    </div>
    <div
      className="
    hidden
    group-hover:block
    group-hover:absolute
    group-hover:top-2
    lg:group-hover:top-8
    group-hover:left-2
    lg:group-hover:left-8"
    >
      <text className="font-sans text-xl md:text-4xl lg:text-6xl text-white">
        AMANDA BINES
      </text>
    </div>
  </div>
);

const BlueGuyBlock = (
  <div className="group h-[225px] w-[150px] md:h-[300px] md:w-[200px] lg:h-[700px] lg:w-[466px] md:mx-2 lg:mr-8 relative hover:outline-4 hover:outline hover:outline-offset-1 sm:hover:outline-offset-4">
    <Image src={BlueGuy} className="group-hover:blur-sm" />
    <text className="font-sans group-hover:hidden">LUCAS GAUVEA</text>
    {/* stats */}
    <div
      className="
    hidden
    group-hover:flex
    group-hover:flex-col
    group-hover:absolute
    group-hover:bottom-2
    lg:group-hover:bottom-8
    group-hover:right-2
    lg:group-hover:right-8
"
    >
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"HEIGHT 5'7\""}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {'BUST 32"'}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {'WAIST 24"'}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {'HIPS 34.5"'}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"SHOE 8 US"}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"EYES BROWN"}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"HAIR BLACK"}
      </text>
    </div>
    <div
      className="
    hidden
    group-hover:block
    group-hover:absolute
    group-hover:top-2
    lg:group-hover:top-8
    group-hover:left-2
    lg:group-hover:left-8
"
    >
      <text className="font-sans text-xl md:text-3xl lg:text-6xl text-white">
        LUCAS GAUVEA
      </text>
    </div>
  </div>
);

const CrazyGirlBlock = (
  <div className="group h-[225px] w-[150px] md:h-[300px] md:w-[200px] lg:h-[700px] lg:w-[466px] md:mx-4 lg:mx-16 relative hover:outline-4 hover:outline hover:outline-offset-1 sm:hover:outline-offset-4">
    <Image src={CrazyGirl} className="group-hover:blur-sm" />
    <text className="font-sans group-hover:hidden">EDELIN MONTAY</text>
    {/* stats */}
    <div
      className="
    hidden
    group-hover:flex
    group-hover:flex-col
    group-hover:absolute
    group-hover:bottom-2
    lg:group-hover:bottom-8
    group-hover:right-2
    lg:group-hover:right-8
"
    >
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"HEIGHT 5'7\""}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {'BUST 32"'}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {'WAIST 24"'}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {'HIPS 34.5"'}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"SHOE 8 US"}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"EYES BROWN"}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"HAIR BLACK"}
      </text>
    </div>
    <div
      className="
    hidden
    group-hover:block
    group-hover:absolute
    group-hover:top-2
    lg:group-hover:top-8
    group-hover:left-2
    lg:group-hover:left-8
"
    >
      <text className="font-sans text-xl md:text-3xl lg:text-6xl text-white">
        EDELIN MONTAY
      </text>
    </div>
  </div>
);

const HazyGirlBlock = (
  <div className="group h-[225px] w-[150px] md:h-[300px] md:w-[200px] lg:h-[700px] lg:w-[466px] md:mx-2 lg:ml-8 relative hover:outline-4 hover:outline hover:outline-offset-1 sm:hover:outline-offset-4">
    <Image src={HazyGirl} className="group-hover:blur-sm" />
    <text className="font-sans group-hover:hidden">LORAINE NILE</text>
    {/* stats */}
    <div
      className="
    hidden
    group-hover:flex
    group-hover:flex-col
    group-hover:absolute
    group-hover:bottom-2
    lg:group-hover:bottom-8
    group-hover:right-2
    lg:group-hover:right-8
"
    >
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"HEIGHT 5'7\""}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {'BUST 32"'}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {'WAIST 24"'}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {'HIPS 34.5"'}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"SHOE 8 US"}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"EYES BROWN"}
      </text>
      <text className="font-sans text-sm md:text-xl lg:text-2xl text-white">
        {"HAIR BLACK"}
      </text>
    </div>
    <div
      className="
    hidden
    group-hover:block
    group-hover:absolute
    group-hover:top-2
    lg:group-hover:top-8
    group-hover:left-2
    lg:group-hover:left-8
"
    >
      <text className="font-sans text-xl md:text-3xl lg:text-6xl text-white">
        LORAINE NILE
      </text>
    </div>
  </div>
);

export default function Models({
  className,
  children,
  title,
  desc,
  thumb,
}: Props) {
  return (
    <Layout title={"Lahvah"}>
      <div className="w-10/12 mx-auto">
        {/* mobile layouts */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 mt-4 mb-16 md:hidden">
          {RoseGirlBlock}
          {FarmGirlBlock}
          {AfroGuyBlock}
          {GlassGirlBlock}
          {PurpGirlBlock}
          {BlueGuyBlock}
          {CrazyGirlBlock}
          {HazyGirlBlock}
        </div>
        {/* this group is for tablet+ layouts */}
        <div className="hidden md:block">
          {/* 1st row */}
          <div className="flex md:mb-16 lg:mb-32">
            {RoseGirlBlock}
            {FarmGirlBlock}
            {AfroGuyBlock}
          </div>
          {/* 2nd row */}
          <div className="relative md:mb-12 lg:h-[1000px]">
            <div className="flex lg:h-[900px]">
              {GlassGirlBlock}
              {PurpGirlBlock}
            </div>
          </div>
          {/* 3rd row */}
          <div className="flex lg:h-[700px] md:mb-12 lg:mb-32">
            {BlueGuyBlock}
            {CrazyGirlBlock}
            {HazyGirlBlock}
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <div className="flex flex-col">
        <h1 className="font-sans md:text-3xl lg:text-6xl mx-auto">
          Were always on the look out for new models.
        </h1>
        <Link href="/contact">
          <a
            className="
          mx-auto
          mt-8
          font-sans
          text-3xl
          md:text-4xl
          lg:text-6xl
          inline-block
          relative
          no-underline
          px-[10px]
          after:absolute
          after:w-[100%]
          after:h-[5px]
          after:bg-black
          after:bottom-0
          after:left-0
          after:scale-x-0
          after:origin-bottom-right
          after:transition-transform
          hover:after:origin-bottom-left
          hover:after:scale-x-100"
          >
            Contact Us
          </a>
        </Link>
      </div>
      <div className="min-h-[100px] md:min-h-[250px]  relative overflow-hidden">
        <h1 className="absolute -bottom-16 md:-bottom-32 lg:-bottom-40 -left-4 sm:-left-8 font-serif text-[128px] md:text-[256px] lg:text-[320px]">
          lahvah
        </h1>
      </div>
    </Layout>
  );
}
