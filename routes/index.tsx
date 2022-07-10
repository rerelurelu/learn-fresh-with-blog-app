/** @jsx h */
import { h } from 'preact';
import { PageProps } from '$fresh/server.ts';
import { Head } from '$fresh/src/runtime/head.ts';
import { tw } from '@twind';
import { Handlers } from '$fresh/server.ts';
import dayjs from 'https://esm.sh/dayjs@1.11.3/';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ja';

dayjs.extend(relativeTime);
dayjs.locale('ja');

interface Article {
  id: string;
  title: string;
  created_at: string;
}

export const handler: Handlers<Article[]> = {
  async GET(_, ctx) {
    const articles: Article[] = [
      {
        id: '1',
        title: 'Article 1',
        created_at: '2022-06-17T00:00:00.000Z',
      },
      {
        id: '2',
        title: 'Article 2',
        created_at: '2022-06-10T00:00:00.000Z',
      },
    ];
    return ctx.render(articles);
  },
};

export default function Home({ data }: PageProps<Article[]>) {
  return (
    <div class={tw('h-screen bg-gray-900')}>
      <Head>
        <title>Fresh Blog</title>
      </Head>
      <div class={tw('max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-20 flex flex-col')}>
        <h1 class={tw('text-gray-100 font-extrabold text-5xl')}>Fresh Blog</h1>
        <section class={tw('mt-8')}>
          <h2 class={tw('text-4xl font-bold text-gray-500 py-4')}>Posts</h2>
          <ul>
            {data.map((article) => (
              <li class={tw('bg-gray-400 p-6 rounded-lg shadow-lg mb-4')} key={article.id}>
                <a href={`articles/${article.id}`}>
                  <h3
                    class={tw(
                      'text-2xl font-bold mb-2 text-gray-600 hover:text-teal-600 hover:text-underline'
                    )}
                  >
                    {article.title}
                  </h3>
                  <time class={tw('text-gray-500 text-sm')} dateTime={article.created_at}>
                    {article.created_at}
                  </time>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
