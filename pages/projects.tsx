import Link from 'next/link';

type ProjectItemProps = {
  name: string;
  url: string;
  urlDisplay: string;
};

export async function getStaticProps() {
  return {
    props: {
      pageId: 'projects',
    },
  };
}

function ProjectItem(props: ProjectItemProps) {
  let { name, url, urlDisplay, imageSrc: image } = props;

  return (
    <li>
      <Link href={url}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
          </div>
          <div className="px-6 pb-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {urlDisplay}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default function Projects() {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">Things I Do</h1>
        <p className="text-base mt-6 text-zinc-600">
          I have been working on a number of small creative projects
        </p>
      </header>
      <div className="mt-16">
        <h2 className="text-2xl">Apps</h2>
        <ul className="grid grid-cols-4 gap-x-12 gap-y-16 mt-8">
          <ProjectItem
            name={'TallyCoin: Tracking Chores And Rewards'}
            url={'https://apps.apple.com/us/app/tallycoin/id1633932632'}
            urlDisplay={'App Store'}
          />
          <ProjectItem
            name={'RedacApp: Redact Text In Images'}
            url={'https://gracehuang.gumroad.com/1/redac'}
            urlDisplay={'gumroad.com'}
          />
        </ul>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl">Books</h2>
        <ul className="grid grid-cols-4 gap-x-12 gap-y-16 mt-8">
          <ProjectItem
            name={
              'Building macOS apps with SwiftUI: A Practical Learning Guide'
            }
            url={'https://www.amazon.com/gp/product/B0BP5P9H31'}
            urlDisplay={'amazon.com'}
          />
          <ProjectItem
            name={'Nail A Coding Interview: Six-Step Mental Framwork'}
            url={'https://gracehuang.gumroad.com/1/coding-interview'}
            urlDisplay={'gracehuang.gumroad.com'}
          />
          <ProjectItem
            name={
              'Building macOS apps with SwiftUI: A Practical Learning Guide'
            }
            url={'https://www.amazon.com/gp/product/B0BP5P9H31'}
            urlDisplay={'amazon.com'}
          />
          <ProjectItem
            name={'Nail A Coding Interview: Six-Step Mental Framwork'}
            url={'https://gracehuang.gumroad.com/1/coding-interview'}
            urlDisplay={'gracehuang.gumroad.com'}
          />
        </ul>
      </div>
    </div>
  );
}
