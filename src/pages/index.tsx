import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface MorieruJson {
  morierus: string[]
}

interface IndexPageProps {
  initialImage: string
}

const MORIERU_CDN_URL = process.env.NEXT_PUBLIC_CDN_URL

const fetchMorieruImages = async (): Promise<string[]> => {
  const jsonUrl = MORIERU_CDN_URL + 'json/morierus.json'
  const res = await fetch(jsonUrl, {})
  const result: MorieruJson = await res.json()
  return result.morierus
}

const randomMorieruImage = async (): Promise<string> => {
  const images = await fetchMorieruImages()
  return images[Math.floor(Math.random() * images.length)]
}

const LoadingSpinner = () => {
  return (
    <div className='spinner-border m-10' role='status'>
      <span className='visually-hidden'>Loading...</span>
    </div>
  )
}

const RandomMorieru = (props: IndexPageProps) => {
  const [morieruImageUrl, setMorielImageUrl] = useState(MORIERU_CDN_URL + props.initialImage)

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleClick = async () => {
    setIsLoading(true)
    const image: string = await randomMorieruImage()
    const url = MORIERU_CDN_URL + image
    setMorielImageUrl(url)
    setIsLoading(false)
  }

  return (
    <div className='w-auto'>
      <div className=''>
        <button className='btn btn-primary btn-sm' onClick={handleClick}>
          次のもりえる
        </button>
      </div>
      <div className='morieru-image'>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Image layout='fill' alt='morieru' src={morieruImageUrl} objectFit='contain' />
        )}
      </div>
    </div>
  )
}

const IndexPage: NextPage<IndexPageProps> = ({ initialImage }) => {
  const head_title = 'もりえるポータル'
  const head_description = '「もりえる」という不思議なインターネットミームに関するポータルサイト'
  return (
    <div className='container-fluid p-0'>
      {/* <header>&nbsp;</header> */}
      <div className='d-flex flex-column'>
        <Head>
          <title>{head_title}</title>
          <meta name='description' content={head_description} />
          <meta property='og:site_name' content='もりえるポータル' />
          <meta property='og:url' content='https://morieru.pirocot.com/' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={head_title} />
          <meta property='og:description' content={head_description} />
          <meta property='og:locale' content='ja_JP' />
        </Head>

        <main className='w-100 text-center'>
          <section className='mt-7 mb-4 mx-2'>
            <Image src='/logo.png' width='300' height='300' alt='logo' />
            <h1 className='display-4'>Morieru Portal</h1>
            <p>もりえるのポータルサイト</p>
          </section>
          <section className='sec'>
            <h2>もりえるとは</h2>
            <p>
              <a href='https://twitter.com/pirocot' target='_blank' rel='noopener noreferrer'>
                @pirocot
              </a>
              が勝手に考えたネットミームのような何かです。
              <br />
              実在の人物とは若干の関係しかありません。
            </p>
          </section>
          <section className='sec'>
            <h2>とりあえず見てみる</h2>
            <p>ボタンを押すとランダムなもりえるが出ます。</p>
            <RandomMorieru initialImage={initialImage} />
          </section>
          <section className='sec'>
            <h2>リスト</h2>
            <p>
              今のところは
              <a href='//bit.ly/3jNSrLX' target='_blank' rel='noopener noreferrer'>
                Twiter検索
              </a>
              から見られます。
            </p>
          </section>
          <section className='sec'>
            <h2>もりえるのガイドライン</h2>
            <p>
              概ね次のような要件を満たします。これらが全てではありません。また、厳密に守る必要もありません。
            </p>
            <div className='container mt-5 guideline-grid text-center'>
              <div className='row row-cols-1 g-4'>
                <div className='col'>
                  <section>
                    <h4>「芸術性のない退廃」</h4>
                    <p>
                      退廃こそはもりえるの基本です。
                      <br />
                      しかし、決して芸術的であってはなりません。
                    </p>
                  </section>
                </div>
                <div className='col'>
                  <section>
                    <h4>「なれの果て」</h4>
                    <p>もりえるは終わりに近い位置に存在します。</p>
                  </section>
                </div>
                <div className='col'>
                  <section>
                    <h4>「守ってくれる法がない」</h4>
                    <p>もりえるに人権はありません。見放されています。</p>
                  </section>
                </div>
                <div className='col'>
                  <section>
                    <h4>「発散的」</h4>
                    <p>もりえるは今にも飛び散りそうです。</p>
                  </section>
                </div>
                <div className='col'>
                  <section>
                    <h4>「躍動感」</h4>
                    <p>活発なもりえるもいます。でもそれは最期の瞬間です。</p>
                  </section>
                </div>
                <div className='col'>
                  <section>
                    <h4>「吊るされているか、そうでなければ埋まっている」</h4>
                    <p>
                      極端であればあるほど、もりえるに近づきます。
                      <br />
                      但しやたらと目立たないことです。
                    </p>
                  </section>
                </div>
                <div className='col'>
                  <section>
                    <h4>「できるだけ人に迷惑をかけない」</h4>
                    <p>災厄はもりえるに降りかかれば十分です。</p>
                  </section>
                </div>
              </div>
            </div>
          </section>
          <section className='sec'>
            <h2>もりえるに貢献するには？</h2>
            <p>
              <a href='https://twitter.com/pirocot' target='_blank' rel='noopener noreferrer'>
                @pirocot
              </a>
              にフォローされているかたは「もりえる」を含む画像ツイートを投稿してください。
              <br />
              あるいは、誰かの投稿を積極的にリツイートしてください。
            </p>
            <p>
              もりえるソフトウェアの開発を推進しています。
              <br />
              ソフトウェア開発者のかたは
              <a href='//github.com/morieru' target='_blank' rel='noreferrer'>
                GitHubのプロジェクトページ
              </a>
              もご参照ください。
            </p>
          </section>
          <section className='sec'>
            <h2>関連リンク</h2>
            <ul className='list-unstyled'>
              <li>
                <a href='//github.com/morieru' target='_blank' rel='noreferrer'>
                  GitHubプロジェクト
                </a>
              </li>
              <li>
                <a href='//bit.ly/3jNSrLX' target='_blank' rel='noopener noreferrer'>
                  もりえるのリスト(Twiter検索)
                </a>
              </li>
              <li>
                <a href='//bit.ly/3BFjCCa' target='_blank' rel='noopener noreferrer'>
                  もりえるのリスト(スプレッドシート)
                </a>
              </li>
            </ul>
          </section>
        </main>

        <footer className='mt-8 mb-3 text-center'>
          <a href='https://twitter.com/pirocot' target='_blank' rel='noopener noreferrer'>
            Powered by @pirocot
          </a>
        </footer>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async () => {
  const image = await randomMorieruImage()
  return {
    props: {
      initialImage: image,
    },
  }
}

export default IndexPage
