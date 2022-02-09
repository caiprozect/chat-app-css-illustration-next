import Head from 'next/head'

export default function Home() {
  return (
    <div className="font-Rubik">
      <Head>
        <title>Chat app css illustration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-600">
        {/* Mobile */}
        <section className="flex justify-center px-12 py-16">
          {/* Mobile body */}
          <div className="absolute h-[1.8rem] w-[9rem] rounded-full bg-white"></div>
          <div className="flex min-h-[36rem] flex-col space-y-3 rounded-[2rem] border-[0.6rem] border-white bg-gray-200">
            {/* Mobile screen header */}
            <div className="flex h-[4.4rem] items-end rounded-t-[1.4rem] rounded-b-[0.4rem] bg-purple-600 text-white">
              <div className="left-angled h-4 w-2 bg-white"></div>
            </div>

            {/* Mobile screen chats */}
            <div className="flex-grow space-y-5 px-1.5">
              <div className="space-y-2">
                <div className="left-chat">
                  That sounds great. I’d be happy with that.
                </div>
                <div className="left-chat">
                  Could you send over some pictures of your dog, please?
                </div>
              </div>

              <div className="flex flex-col items-end justify-center space-y-2">
                <div className="flex justify-end space-x-2">
                  <img
                    className="h-12 w-12 rounded-xl"
                    src="/dog-image-1.jpg"
                    alt=""
                  />
                  <img
                    className="h-12 w-12 rounded-xl"
                    src="/dog-image-2.jpg"
                    alt=""
                  />
                  <img
                    className="h-12 w-12 rounded-xl"
                    src="/dog-image-3.jpg"
                    alt=""
                  />
                </div>
                <div className="right-chat">
                  Here are a few pictures. She’s a happy girl!
                </div>
                <div className="right-chat">Can you make it?</div>
              </div>

              <div className="space-y-2">
                <div className="left-chat">
                  She looks so happy! The time we discussed works. How long
                  shall I take her out for?
                </div>

                <div className="left-option">
                  <div className="h-4 w-4 rounded-full border-2 border-white opacity-30"></div>
                  <p className="mt-[1px] flex-grow opacity-60">
                    30 minutes walk
                  </p>
                  <p className="pr-2 text-sm font-bold">$29</p>
                </div>
                <div className="left-option">
                  <div className="h-4 w-4 rounded-full border-2 border-white opacity-30"></div>
                  <p className="mt-[1px] flex-grow opacity-60">1 hour walk</p>
                  <p className="pr-2 text-sm font-bold">$49</p>
                </div>
              </div>
            </div>
            <div className="px-1.5 pb-2">
              <div className="flex h-[2.5rem] items-center rounded-full bg-white px-4">
                <p className="text-xs text-gray-400">Type a message…</p>
              </div>
            </div>
          </div>
        </section>

        <section>Text description</section>
      </main>
    </div>
  )
}
