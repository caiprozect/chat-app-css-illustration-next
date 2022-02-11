import Head from 'next/head'
import { stringify } from 'querystring'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const stages = [
    'loading.0',
    'type.1-1',
    'type.1-2',
    'submit.1',
    'appear.1',
    'type.2-1',
    'type.2-2',
    'submit.2',
    'appear.2',
    'receive.1',
    'receive.2',
    'receive.3',
    'type.3-1',
    'type.3-2',
    'type.3-3',
    'submit.3',
    'appear.3',
    'option.1',
    'option.2',
    'finish',
  ]

  type Delays = {
    [key: string]: number
    loading: number
    type: number
    submit: number
    appear: number
    receive: number
    option: number
  }

  const delays: Delays = {
    loading: 1600,
    type: 3000,
    submit: 1000,
    appear: 1000,
    receive: 1000,
    option: 1000,
  }
  const curIdx = useRef(0)
  const [idx, setIdx] = useState(0)
  const [stage, setStage] = useState('loading.0')

  useEffect(() => {
    const animate = setTimeout(
      () => {
        if (stage === 'finish') {
          clearTimeout(animate)
          return
        }

        curIdx.current += 1
        setIdx(curIdx.current)
        setStage(stages[curIdx.current])
      },
      stage ? delays[stage.substr(0, stage.indexOf('.'))] : 100
    )
    return () => clearTimeout(animate)
  }, [idx, stage])

  const animationBreak: (
    before: string,
    breakpoint: string,
    ani: string,
    after: string
  ) => string = (before, breakpoint, ani, after) => {
    const breakIdx = stages.indexOf(breakpoint)
    if (idx === null || idx < breakIdx) {
      return before
    }

    if (stage === breakpoint) {
      return ani
    }

    return after
  }

  return (
    <div className="font-Rubik">
      <Head>
        <title>Chat app css illustration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-w-screen relative min-h-screen overflow-clip bg-violet-appBg md:flex md:items-center md:justify-center md:gap-x-24">
        {/* Background patterns */}
        <span
          className="absolute -top-[24rem] -left-[18rem] h-[60rem] w-[30rem] rounded-full bg-gradient-to-t from-violet-gradientHeavy to-violet-gradientLight
        md:-left-[6rem] md:h-[70rem] md:w-[40rem]"
        ></span>
        <span
          className="absolute top-full left-full -mt-[32rem] -ml-[11.8rem] h-[60rem] w-[30rem]  rounded-full bg-purple-200
        md:-ml-[30rem] md:h-[70rem] md:w-[40rem]"
        ></span>

        {/* Mobile */}
        <section className="relative flex justify-center px-12 pt-16 md:pt-0">
          {/* Mobile body */}
          <div className="absolute h-[1.8rem] w-[9rem] rounded-full bg-white md:w-[10rem]"></div>
          <div
            className="flex min-h-[36rem] max-w-[22rem] cursor-default flex-col space-y-3 rounded-[2rem] border-[0.6rem] border-white 
          bg-violet-appBg shadow-2xl md:min-h-[42rem] md:min-w-[22rem] md:space-y-4 md:rounded-[3rem] md:border-[1rem]"
          >
            {/* Mobile screen header */}
            <div
              className={
                'headGradient flex h-[4.4rem] items-end rounded-t-[1.4rem] rounded-b-[0.4rem] text-white shadow-md ' +
                'md:h-[5rem] md:rounded-t-[1.8rem] md:rounded-b-[0.5rem] md:pb-1 ' +
                `${animationBreak('hidden', 'loading.0', 'loading', '')}`
              }
            >
              <div
                className={
                  'flex h-[3rem] w-full items-center space-x-2 px-4' +
                  ' md:h-[3.6rem] md:space-x-3 md:px-5 ' +
                  ` ${stage.startsWith('loading') ? 'hidden' : 'visible'}`
                }
              >
                <div className={'h-6 w-2 opacity-75' + ' md:h-7 md:text-lg'}>
                  &#10096;
                </div>
                <img
                  className={
                    'h-7 w-7 rounded-full border-2 border-white border-opacity-60' +
                    ' md:box-content md:h-8 md:w-8 md:border-[0.2rem]'
                  }
                  src="/avatar.jpg"
                  alt=""
                />
                <div className="flex-grow">
                  <p className="text-sm font-medium opacity-75 md:text-base">
                    Samuel Green
                  </p>
                  <p className="text-[1px] text-violet-subHeading md:text-[11px]">
                    Available to Walk
                  </p>
                </div>
                <div className="flex flex-col justify-center space-y-[1.6px] md:space-y-[1.8px]">
                  <span className="h-[4px] w-[4px] rounded-sm bg-violet-radio md:h-[5px] md:w-[5px]"></span>
                  <span className="h-[4px] w-[4px] rounded-sm bg-violet-radio md:h-[5px] md:w-[5px]"></span>
                  <span className="h-[4px] w-[4px] rounded-sm bg-violet-radio md:h-[5px] md:w-[5px]"></span>
                </div>
              </div>
            </div>

            {/* Mobile screen chats */}
            <div className="flex-grow space-y-5 px-1.5 md:space-y-6 md:px-2">
              <div className="space-y-2 md:space-y-3">
                <div
                  className={`left-chat ${animationBreak(
                    'opacity-0',
                    'appear.1',
                    'appear',
                    ''
                  )}`}
                >
                  That sounds great. I’d be happy with that.
                </div>
                <div
                  className={`left-chat ${animationBreak(
                    'opacity-0',
                    'appear.2',
                    'appear',
                    ''
                  )}`}
                >
                  Could you send over some pictures of your dog, please?
                </div>
              </div>

              <div className="flex flex-col items-end justify-center space-y-2 md:space-y-3">
                <div
                  className={`flex justify-end space-x-2 ${animationBreak(
                    'opacity-0',
                    'receive.1',
                    'appear',
                    ''
                  )}`}
                >
                  <img
                    className="h-12 w-12 rounded-xl md:h-14 md:w-14 md:rounded-2xl"
                    src="/dog-image-1.jpg"
                    alt=""
                  />
                  <img
                    className="h-12 w-12 rounded-xl md:h-14 md:w-14 md:rounded-2xl"
                    src="/dog-image-2.jpg"
                    alt=""
                  />
                  <img
                    className="h-12 w-12 rounded-xl md:h-14 md:w-14 md:rounded-2xl"
                    src="/dog-image-3.jpg"
                    alt=""
                  />
                </div>
                <div
                  className={`right-chat ${animationBreak(
                    'opacity-0',
                    'receive.2',
                    'appear',
                    ''
                  )}`}
                >
                  Here are a few pictures. She’s a happy girl!
                </div>
                <div
                  className={`right-chat ${animationBreak(
                    'opacity-0',
                    'receive.3',
                    'appear',
                    ''
                  )}`}
                >
                  Can you make it?
                </div>
              </div>

              <div className="space-y-2 md:space-y-3">
                <div
                  className={`left-chat ${animationBreak(
                    'opacity-0',
                    'appear.3',
                    'appear',
                    ''
                  )}`}
                >
                  She looks so happy! The time we discussed works. How long
                  shall I take her out for?
                </div>

                <div
                  className={`left-option ${animationBreak(
                    'opacity-0',
                    'option.1',
                    'loading',
                    ''
                  )}`}
                >
                  <div className="h-4 w-4 rounded-full border-2 border-white opacity-30 md:h-5 md:w-5 md:border-[0.2rem]"></div>
                  <p className="mt-[1px] flex-grow opacity-60">
                    30 minutes walk
                  </p>
                  <p className="pr-2 text-sm font-medium opacity-90 md:text-base">
                    $29
                  </p>
                </div>
                <div
                  className={`left-option ${animationBreak(
                    'opacity-0',
                    'option.2',
                    'loading',
                    ''
                  )}`}
                >
                  <div className="h-4 w-4 rounded-full border-2 border-white opacity-30 md:h-5 md:w-5 md:border-[0.2rem]"></div>
                  <p className="mt-[1px] flex-grow opacity-60">1 hour walk</p>
                  <p className="pr-2 text-sm font-medium opacity-90 md:text-base">
                    $49
                  </p>
                </div>
              </div>
            </div>
            <div className="px-1.5 pb-2">
              <div className="flex h-[2.5rem] items-center rounded-full bg-white md:h-[3rem]">
                <div className="flex w-full items-center justify-between pl-4 pr-1">
                  <div className="text-xs md:text-sm">
                    <p
                      className={`${animationBreak(
                        'hidden',
                        'type.1-1',
                        'typing',
                        'hidden'
                      )} typing font-medium text-violet-chatLeft`}
                    >
                      That sounds great.
                    </p>
                    <p
                      className={`${animationBreak(
                        'hidden',
                        'type.1-2',
                        'typing',
                        'hidden'
                      )} typing font-medium text-violet-chatLeft`}
                    >
                      I’d be happy with that.
                    </p>
                    <p
                      className={`${animationBreak(
                        'hidden',
                        'type.2-1',
                        'typing',
                        'hidden'
                      )} typing font-medium text-violet-chatLeft`}
                    >
                      Could you send over some
                    </p>
                    <p
                      className={`${animationBreak(
                        'hidden',
                        'type.2-2',
                        'typing',
                        'hidden'
                      )} typing font-medium text-violet-chatLeft`}
                    >
                      pictures of your dog, please?
                    </p>
                    <p
                      className={`${animationBreak(
                        'hidden',
                        'type.3-1',
                        'typing',
                        'hidden'
                      )} typing font-medium text-violet-chatLeft`}
                    >
                      She looks so happy! The time
                    </p>
                    <p
                      className={`${animationBreak(
                        'hidden',
                        'type.3-2',
                        'typing',
                        'hidden'
                      )} typing font-medium text-violet-chatLeft`}
                    >
                      we discussed works. How
                    </p>
                    <p
                      className={`${animationBreak(
                        'hidden',
                        'type.3-3',
                        'typing',
                        'hidden'
                      )} typing font-medium text-violet-chatLeft`}
                    >
                      long shall I take her out for?
                    </p>
                    <p
                      className={`${animationBreak(
                        'hidden',
                        'finish',
                        '',
                        ''
                      )} text-violet-placeholder`}
                    >
                      Type a message…
                    </p>
                  </div>
                  <div
                    className={`${
                      stage.startsWith('submit') ? 'clicked' : ''
                    } ${stage.startsWith('loading') ? 'loading' : ''}
                   flex h-8 w-8 items-center justify-center rounded-full bg-violet-submit text-lg font-bold text-white md:h-9 md:w-9 md:text-xl`}
                  >
                    <span
                      className={`opacity-90 ${
                        stage.startsWith('loading') ? 'hidden' : 'visible'
                      }`}
                    >
                      &gt;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="relative flex flex-col items-center space-y-6 pt-12 pb-16 md:items-start md:space-y-10 md:pr-6">
          <h1
            className="text-[2.5rem] font-bold text-violet-mainHeading
          md:text-[3.2rem]"
          >
            Simple booking
          </h1>
          <p
            className="max-w-[20rem] text-center text-[1.2rem] text-violet-paragraph
          md:max-w-[38rem] md:text-left md:text-[1.4rem]"
          >
            Stay in touch with our dog walkers through the chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
          </p>
        </section>
      </main>
    </div>
  )
}
