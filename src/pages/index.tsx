import Layout from "../components/Layout";
import Image from "next/Image";
import Link from 'next/link';

// const GirlGlasses: HTMLImageElement = require('../images/oladimeji-odunsi-Wu3yqve2gnc-unsplash-cropped.jpg');
// const GirlGlasses = require('../images/oladimeji-odunsi-Wu3yqve2gnc-unsplash-cropped.jpg');
import GirlGlasses from "../images/glassgirlslay.jpg";

// edited to have same aspect ratio
import PurpleGirl from '../images/scroll/purpgurl.jpg';
import FarmGirl from '../images/scroll/farmgorl.jpg';
import CrazyGirl from '../images/scroll/crazygirl.jpg';
import FlowerGirl from '../images/scroll/flowergirl.jpg';
import WaxGuy from '../images/scroll/waxguy.jpg';
import SnowGuy from '../images/scroll/snowboy.jpg';
import BlueGuy from '../images/scroll/blueguy.jpg';
import HazyGirl from '../images/scroll/hazygirl.jpg';
import AfroGuy from '../images/scroll/afrodude.jpg';
import RoseGirl from '../images/scroll/rosegirl.jpg';

import InstaIcon from '../images/glyph-logo_May2016.svg';
import TTIcon from '../images/Vector.svg';

type Props = {
  className?: string;
  children: React.ReactNode;
  desc?: string;
  title: string;
  thumb?: string;
};

export default function Index({
  className,
  children,
  title,
  desc,
  thumb,
}: Props) {
  return (
    // layout is relative for the lahvah clip graphic at bottom of page
    <Layout title={"Lahvah"}>
      <div className="w-9/12 mx-auto">
        <Image src={GirlGlasses} />
        {/* ABOUT */}
        <div className="mt-16 grid grid-cols-2">
          <div className="mr-40">
            <h3 className="font-serif text-6xl mb-16">About</h3>
            <p className="text-3xl mb-8 font-sans">
              Lahvah is a young modeling agency based in Los Angeles that
              started as a group of friends.
            </p>
            <br />
            <p className="text-3xl font-sans">
              Rather than pursuing traditional high fashion. Our agency looks to
              partner with smaller, ethical brands with strong followings.
            </p>
          </div>
          <div className="">
            <h1 className="font-serif text-9xl ml-16 leading-tight">
              not your typical agency
            </h1>
          </div>
        </div>

        {/* FOOTER/CONTACT */}
      </div>
      {/* PHOTO SCROLL */}
      {/* slider */}
      <div className="overflow-hidden my-16">
        {/* slide track */}
        <div className="flex animate-slide w-[6200px] ">
          {/* begin items */}
          <div className="w-[600px] h-[900px] mx-[10px] shrink-0">
            <Image src={PurpleGirl} />
          </div>
          <div className="w-[600px] h-[900px] mx-[10px] shrink-0">
            <Image src={FarmGirl} />
          </div>
          <div className="w-[600px] h-[900px] mx-[10px] shrink-0">
            <Image src={CrazyGirl} />
          </div>
          <div className="w-[600px] h-[900px] mx-[10px] shrink-0">
            <Image src={FlowerGirl} />
          </div>
          <div className="w-[600px] h-[900px] mx-[10px] shrink-0">
            <Image src={WaxGuy} />
          </div>
          <div className="w-[600px] h-[900px] mx-[10px] shrink-0">
            <Image src={SnowGuy} />
          </div>
          <div className="w-[600px] h-[900px] mx-[10px] shrink-0">
            <Image src={BlueGuy} />
          </div>
          <div className="w-[600px] h-[900px] mx-[10px] shrink-0">
            <Image src={HazyGirl} />
          </div>
          <div className="w-[600px] h-[900px] mx-[10px] shrink-0">
            <Image src={AfroGuy} />
          </div>
          <div className="w-[600px] h-[900px] mx-[10px] shrink-0">
            <Image src={RoseGirl} />
          </div>
          {/* duplicate second set */}

          <div className="w-[600px] h-[900px] mx-[10px] shrink-0">
            <Image src={PurpleGirl} />
          </div>
          <div className="w-[600px] h-[900px] mx-[10px] shrink-0">
            <Image src={FarmGirl} />
          </div>
          <div className="w-[600px] h-[900px] mx-[10px] shrink-0">
            <Image src={CrazyGirl} />
          </div>
          <div className="w-[600px] h-[900px] mx-[10px] shrink-0">
            <Image src={FlowerGirl} />
          </div>
          <div className="w-[600px] h-[900px] mx-[10px] shrink-0">
            <Image src={WaxGuy} />
          </div>
          <div className="w-[600px] h-[900px] mx-[10px] shrink-0">
            <Image src={SnowGuy} />
          </div>
          <div className="w-[600px] h-[900px] mx-[10px] shrink-0">
            <Image src={BlueGuy} />
          </div>
          <div className="w-[600px] h-[900px] mx-[10px] shrink-0">
            <Image src={HazyGirl} />
          </div>
          <div className="w-[600px] h-[900px] mx-[10px] shrink-0">
            <Image src={AfroGuy} />
          </div>
          <div className="w-[600px] h-[900px] mx-[10px] shrink-0">
            <Image src={RoseGirl} />
          </div>
        </div>
      </div>
      <div className="w-9/12 mx-auto">
      <div className="mt-16 grid grid-cols-2 items-center">
          <div className="mr-40">
            <h3 className="font-serif text-6xl mb-4">Contact</h3>
            <h4 className="font-sans text-xl">(+1)323-325-4389</h4>
            <h4 className="font-sans text-xl">booking@lahvah.com</h4>
            <div className="flex" ><div className="mr-4"><Image src={InstaIcon}/></div>
            <Image src={TTIcon}/></div>
           
          </div>
          <div className="">
            <h1 className="font-serif text-7xl ml-16 leading-tight">
              <Link href="/contact"><a className="font-serif
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
          hover:after:scale-x-100">Become a Model</a></Link>
              
            </h1>
          </div>
        </div>
      </div>
      <div className="min-h-[250px]  relative overflow-hidden">
        <h1 className="absolute -bottom-40 -left-8 font-serif text-[320px]">lahvah</h1>
      </div>
    </Layout>
  );
}
