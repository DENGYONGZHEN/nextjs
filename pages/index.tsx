import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export async function getStaticProps() {
  return {
    props: {
      pageId: 'about_me',
      metadata: {
        title: 'yongzhen deng',
        description:
          'Discover the work of yongzhen deng on his personal website',
        openGraph: {
          image:
            'https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg',
          url: 'http://example.com',
        },
      },
    },
  };
}

export default function Home() {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">I&apos;m Deng</h1>
      </header>
    </div>
  );
}
