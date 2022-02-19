import Layout from "../components/Layout";
import Image from "next/Image";
import Link from "next/Link";

import FarmGirl from "../images/scroll/farmgorl.jpg";
import AfroGuy from "../images/scroll/afrodude.jpg";
import RoseGirl from "../images/scroll/rosegirl.jpg";
import GlassGirl from "../images/scroll/glassgirlslay.jpg";
import PurpGirl from "../images/scroll/purpgurl.jpg";
import HazyGirl from "../images/scroll/hazygirl.jpg";
import CrazyGirl from "../images/scroll/crazygirl.jpg";
import BlueGuy from "../images/scroll/blueguy.jpg";

type Props = {
  className?: string;
  children: React.ReactNode;
  desc?: string;
  title: string;
  thumb?: string;
};

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
        {/* top row */}

        <div className="flex h-[700px] mb-32">
          <div className="group h-[700px] w-[466px] mr-8 relative hover:outline-4 hover:outline hover:outline-offset-4">
            <Image src={RoseGirl} className="group-hover:blur-sm" />
            <text className="font-sans group-hover:hidden">WENDY COOKS</text>
            {/* stats */}
            <div className="hidden group-hover:flex group-hover:flex-col group-hover:absolute group-hover:bottom-8 group-hover:right-8">
              <text className="font-sans text-3xl text-white">HEIGHT 5'7"</text>
              <text className="font-sans text-3xl text-white">BUST 32"</text>
              <text className="font-sans text-3xl text-white">WAIST 24"</text>
              <text className="font-sans text-3xl text-white">HIPS 34.5"</text>
              <text className="font-sans text-3xl text-white">SHOE 8 US</text>
              <text className="font-sans text-3xl text-white">EYES BROWN</text>
              <text className="font-sans text-3xl text-white">HAIR BLACK</text>
            </div>
            <div className="hidden group-hover:block group-hover:absolute group-hover:top-8 group-hover:left-8">
              <text className="font-sans text-6xl text-white">WENDY COOKS</text>
            </div>
          </div>
          <div className="group h-[700px] w-[466px] mx-16 relative hover:outline-4 hover:outline hover:outline-offset-4">
            <Image src={FarmGirl} className="group-hover:blur-sm" />
            <text className="font-sans group-hover:hidden">JESS FELLOWS</text>
            {/* stats */}
            <div className="hidden group-hover:flex group-hover:flex-col group-hover:absolute group-hover:bottom-8 group-hover:right-8">
              <text className="font-sans text-3xl text-white">HEIGHT 5'7"</text>
              <text className="font-sans text-3xl text-white">BUST 32"</text>
              <text className="font-sans text-3xl text-white">WAIST 24"</text>
              <text className="font-sans text-3xl text-white">HIPS 34.5"</text>
              <text className="font-sans text-3xl text-white">SHOE 8 US</text>
              <text className="font-sans text-3xl text-white">EYES BROWN</text>
              <text className="font-sans text-3xl text-white">HAIR BLACK</text>
            </div>
            <div className="hidden group-hover:block group-hover:absolute group-hover:top-8 group-hover:left-8">
              <text className="font-sans text-6xl text-white">
                JESS FELLOWS
              </text>
            </div>
          </div>
          <div className="group h-[700px] w-[466px] ml-8 relative hover:outline-4 hover:outline hover:outline-offset-4">
            <Image src={AfroGuy} className="group-hover:blur-sm" />
            <text className="font-sans group-hover:hidden">ALEX HAUST</text>
            {/* stats */}
            <div className="hidden group-hover:flex group-hover:flex-col group-hover:absolute group-hover:bottom-8 group-hover:right-8">
              <text className="font-sans text-3xl text-white">HEIGHT 5'7"</text>
              <text className="font-sans text-3xl text-white">BUST 32"</text>
              <text className="font-sans text-3xl text-white">WAIST 24"</text>
              <text className="font-sans text-3xl text-white">HIPS 34.5"</text>
              <text className="font-sans text-3xl text-white">SHOE 8 US</text>
              <text className="font-sans text-3xl text-white">EYES BROWN</text>
              <text className="font-sans text-3xl text-white">HAIR BLACK</text>
            </div>
            <div className="hidden group-hover:block group-hover:absolute group-hover:top-8 group-hover:left-8">
              <text className="font-sans text-6xl text-white">ALEX HAUST</text>
            </div>
          </div>
        </div>
        {/*
        
        second 
        row 
        
        */}
        <div className="relative  h-[1000px]">
          <text className="absolute hidden font-serif text-[1024px] top-0 -left-16">
            lahvah
          </text>
          <div className="flex h-[900px]">
            <div className="group h-[900px] w-[600px] ml-16 mr-28 relative hover:outline-4 hover:outline hover:outline-offset-4">
              <Image src={GlassGirl} className="group-hover:blur-sm" />
              <text className="font-sans group-hover:hidden">
                SUMMER ARAGON
              </text>
              {/* stats */}
              <div className="hidden group-hover:flex group-hover:flex-col group-hover:absolute group-hover:bottom-8 group-hover:right-8">
                <text className="font-sans text-5xl text-white">
                  HEIGHT 5'7"
                </text>
                <text className="font-sans text-5xl text-white">BUST 32"</text>
                <text className="font-sans text-5xl text-white">WAIST 24"</text>
                <text className="font-sans text-5xl text-white">
                  HIPS 34.5"
                </text>
                <text className="font-sans text-5xl text-white">SHOE 8 US</text>
                <text className="font-sans text-5xl text-white">
                  EYES BROWN
                </text>
                <text className="font-sans text-5xl text-white">
                  HAIR BLACK
                </text>
              </div>
              <div className="hidden group-hover:block group-hover:absolute group-hover:top-8 group-hover:left-8">
                <text className="font-sans text-6xl text-white">
                  SUMMER ARAGON
                </text>
              </div>
            </div>
            <div className="group h-[900px] w-[600px] ml-28 mr-16 relative hover:outline-4 hover:outline hover:outline-offset-4">
              <Image src={PurpGirl} className="group-hover:blur-sm" />
              <text className="font-sans group-hover:hidden">AMANDA BINES</text>
              {/* stats */}
              <div className="hidden group-hover:flex group-hover:flex-col group-hover:absolute group-hover:bottom-8 group-hover:right-8">
                <text className="font-sans text-5xl text-white">
                  HEIGHT 5'7"
                </text>
                <text className="font-sans text-5xl text-white">BUST 32"</text>
                <text className="font-sans text-5xl text-white">WAIST 24"</text>
                <text className="font-sans text-5xl text-white">
                  HIPS 34.5"
                </text>
                <text className="font-sans text-5xl text-white">SHOE 8 US</text>
                <text className="font-sans text-5xl text-white">
                  EYES BROWN
                </text>
                <text className="font-sans text-5xl text-white">
                  HAIR BLACK
                </text>
              </div>
              <div className="hidden group-hover:block group-hover:absolute group-hover:top-8 group-hover:left-8">
                <text className="font-sans text-6xl text-white">
                  AMANDA BINES
                </text>
              </div>
            </div>
          </div>
        </div>

        {/* 
        
        third
        row

        */}

        <div className="flex h-[700px] mb-32">
          <div className="group h-[700px] w-[466px] mr-8 relative hover:outline-4 hover:outline hover:outline-offset-4">
            <Image src={BlueGuy} className="group-hover:blur-sm" />
            <text className="font-sans group-hover:hidden">LUCAS GAUVEA</text>
            {/* stats */}
            <div className="hidden group-hover:flex group-hover:flex-col group-hover:absolute group-hover:bottom-8 group-hover:right-8">
              <text className="font-sans text-3xl text-white">HEIGHT 5'7"</text>
              <text className="font-sans text-3xl text-white">BUST 32"</text>
              <text className="font-sans text-3xl text-white">WAIST 24"</text>
              <text className="font-sans text-3xl text-white">HIPS 34.5"</text>
              <text className="font-sans text-3xl text-white">SHOE 8 US</text>
              <text className="font-sans text-3xl text-white">EYES BROWN</text>
              <text className="font-sans text-3xl text-white">HAIR BLACK</text>
            </div>
            <div className="hidden group-hover:block group-hover:absolute group-hover:top-8 group-hover:left-8">
              <text className="font-sans text-6xl text-white">
                LUCAS GAUVEA
              </text>
            </div>
          </div>
          <div className="group h-[700px] w-[466px] mx-16 relative hover:outline-4 hover:outline hover:outline-offset-4">
            <Image src={CrazyGirl} className="group-hover:blur-sm" />
            <text className="font-sans group-hover:hidden">EDELIN MONTAY</text>
            {/* stats */}
            <div className="hidden group-hover:flex group-hover:flex-col group-hover:absolute group-hover:bottom-8 group-hover:right-8">
              <text className="font-sans text-3xl text-white">HEIGHT 5'7"</text>
              <text className="font-sans text-3xl text-white">BUST 32"</text>
              <text className="font-sans text-3xl text-white">WAIST 24"</text>
              <text className="font-sans text-3xl text-white">HIPS 34.5"</text>
              <text className="font-sans text-3xl text-white">SHOE 8 US</text>
              <text className="font-sans text-3xl text-white">EYES BROWN</text>
              <text className="font-sans text-3xl text-white">HAIR BLACK</text>
            </div>
            <div className="hidden group-hover:block group-hover:absolute group-hover:top-8 group-hover:left-8">
              <text className="font-sans text-6xl text-white">
                EDELIN MONTAY
              </text>
            </div>
          </div>
          <div className="group h-[700px] w-[466px] ml-8 relative hover:outline-4 hover:outline hover:outline-offset-4">
            <Image src={HazyGirl} className="group-hover:blur-sm" />
            <text className="font-sans group-hover:hidden">LORAINE NILE</text>
            {/* stats */}
            <div className="hidden group-hover:flex group-hover:flex-col group-hover:absolute group-hover:bottom-8 group-hover:right-8">
              <text className="font-sans text-3xl text-white">HEIGHT 5'7"</text>
              <text className="font-sans text-3xl text-white">BUST 32"</text>
              <text className="font-sans text-3xl text-white">WAIST 24"</text>
              <text className="font-sans text-3xl text-white">HIPS 34.5"</text>
              <text className="font-sans text-3xl text-white">SHOE 8 US</text>
              <text className="font-sans text-3xl text-white">EYES BROWN</text>
              <text className="font-sans text-3xl text-white">HAIR BLACK</text>
            </div>
            <div className="hidden group-hover:block group-hover:absolute group-hover:top-8 group-hover:left-8">
              <text className="font-sans text-6xl text-white">
                LORAINE NILE
              </text>
            </div>
          </div>
        </div>

        
      </div>
      {/* FOOTER */}
      <div className="flex flex-col">
        <h1 className="font-sans text-6xl mx-auto">
          Were always on the look out for new models.
        </h1>
        <Link href="/contact">
          <a
            className="
          mx-auto
          mt-8
          font-sans
          text-6xl
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
      <div className="min-h-[250px]  relative overflow-hidden mt-16">
        <h1 className="absolute -bottom-40 -left-8 font-serif text-[320px]">
          lahvah
        </h1>
      </div>
    </Layout>
  );
}
