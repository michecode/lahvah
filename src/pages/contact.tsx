import Layout from "../components/Layout";

type Props = {
  className?: string;
  children: React.ReactNode;
  desc?: string;
  title: string;
  thumb?: string;
};

export default function Contact({
  className,
  children,
  title,
  desc,
  thumb,
}: Props) {
  return (
    <Layout title={"Lahvah"}>
      <div className="w-10/12 mt-12 mb-12 md:mb-48 lg:mb-20 mx-auto">
        <form action="/contact" method="post">
          <p className="mb-4">
            <label className="font-sans text-xl mb-4">Full Name or Company</label>
            <br />
            <input
              type="text"
              name="name"
              required
              placeholder="Wendy Cooks"
              className="bg-slate-200 placeholder:italic p-2"
            />
          </p>
          <p className="mb-4">
            <label className="font-sans text-xl mb-4">E-Mail</label>
            <br />
            <input
              type="email"
              name="email"
              required
              placeholder="guy@lahvah.com"
              className="bg-slate-200 placeholder:italic p-2"
            />
          </p>
          <p>
            <label className="font-sans text-xl">Message</label>
            <br />
            {/* <input type="text" name="message" required placeholder="Tell us what you need" className='bg-slate-200 placeholder:italic w-96 h-40'/> */}
            <textarea
              name="message"
              required
              placeholder="Tell us what you need"
              className="bg-slate-200 placeholder:italic p-2 w-64 sm:w-96 h-64 sm:h-40"
            />
          </p>
          <input
            type="submit"
            value="Submit"
            className="font-sans text-xl bg-black text-white border-2 border-black my-4 px-4 py-2"
          />
        </form>
      </div>
      <div className="min-h-[100px] md:min-h-[250px]  relative overflow-hidden">
        <h1 className="absolute -bottom-16 md:-bottom-32 lg:-bottom-40 -left-4 sm:-left-8 font-serif text-[128px] md:text-[256px] lg:text-[320px]">
          lahvah
        </h1>
      </div>
    </Layout>
  );
}
