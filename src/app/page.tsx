"use client"

import Head from 'next/head';
import  { useState } from "react";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub as IconDefinition);
library.add(faTwitter as IconDefinition);

export default function Home() {

  const [mapSquare, setMapSquare] = useState("./avatar_normal.png");

  const meigen_list = [
    ["変わることを恐れないで、突き進む勇気。私はあの時、あなたの手に救われた。","絢瀬絵里 アニメ1期第13話"],
    ["あんまり泣くとチュウしちゃうわよ？","絢瀬絵里 漫画版"],
    ["ハラショー","絢瀬絵里 名言"],
    ["今さらアイドルを始めようなんて、私が言えると思う？","絢瀬絵里 アニメ1期第8話"],
    ["私だって、好きなことだけやって、それだけで何とかなるんだったらそうしたいわよ！","絢瀬絵里 アニメ1期第8話"],
    ["バレエに興味はある？姿勢も綺麗になるのよ、今度一緒にやってみましょう","絢瀬絵里 ホームボイス"],
    ["きゃっ！もう……甘えてるのね。キミのそういうところもキライじゃないわ","絢瀬絵里  ホームボイス"],
    ["最近新しいボディオイルを買ったの♪身体のラインが少し整ってきたかしら？","絢瀬絵里  ホームボイス"],
    ["おばあさま譲りの金色の髪。自分でも気に入っているの♪","絢瀬絵里  ホームボイス"],
    ["こーら、人の身体を勝手に触らないの","絢瀬絵里  ホームボイス"],
    ["あけましておめでとう♪今年はもっともっと充実した一年にしたいわ","絢瀬絵里 正月ボイス"],
    ["いたっ……。こらこら、部室で豆まきは危ないわよ？","絢瀬絵里 節分ボイス"],
    ["キミへの想いをチョコに込めて……。柄にもなく、緊張しちゃうな","絢瀬絵里 バレンタインボイス"],
    ["部室におひなさまを飾ったの。おひなさまって本当に愛らしいわね","絢瀬絵里 ひな祭りボイス"],
    ["チョコのお返し？それなら……。キミを一日借りてデートに行きたいかな♡","絢瀬絵里 ホワイトデーボイス"],
    ["今日はこどもの日。高校生になっても、まだまだ親から見ると子どもなのかしら？","絢瀬絵里 こどもの日ボイス"],
    ["今日は七夕ね。夢が叶うよう、星に祈りを捧げましょう","絢瀬絵里 七夕ボイス"],
    ["今日は海の日。せっかくだから、このまま海に行っちゃいましょうか♪","絢瀬絵里 海の日ボイス"],
    ["彼方～！ あなた次の競技に出るんじゃなかった……って寝てる！もう、だめよ、ほら、起きて！","絢瀬絵里 スクフェス感謝祭ボイス"],
    ["キミとこうして月をながめていると、このまま時間が止まればいいのに……って。そう思うの","絢瀬絵里 中秋の名月ボイス"],
    ["トリックオアトリート♪お菓子をくれたら、いたずらしないで許してあげるわよ？","絢瀬絵里 ハロウィンボイス"],
    ["メリークリスマス♪クリスマスの日はどうしてもキミに会いたかったから……嬉しい♡","絢瀬絵里 クリスマスボイス"],
    ["キミと過ごした時間を思い出していたの。今年ももうおしまいなのね","絢瀬絵里 大晦日ボイス"],
    ["ハッピーバースデー♪キミの誕生日をこうしてお祝いできて、とっても幸せよ♡","絢瀬絵里 誕生日ボイス"],
    ["やったじゃない！キミって色々教えがいがあるわね♪","絢瀬絵里 ボウリング編ボイス"]
  ]

  function selectmeigen(){
    let num = Math.floor(Math.random() * meigen_list.length);
    document.getElementById('meigen_content').innerText=meigen_list[num][0];
    document.getElementById('meigen_from').innerText=meigen_list[num][1];
  }
  //window.addEventListener("load",function(){selectmeigen();});

  return (
    <div>
      <Head>
        <title>hieri.net</title>
        <meta name="description" content="website" />
      </Head>

      <main className="container mx-auto">
        <h1 className="text-5xl mt-3">hieri.net</h1>

        <div className='text-center mt-10'>
          <img
          alt="avatar"
          src={mapSquare}
          onMouseEnter={() => {
            setMapSquare("./avatar_smile.png");
          }}
        
          onMouseLeave={() => {
            setMapSquare("./avatar_normal.png");
          }}
          className='inline hover:cursor-grab' />
        </div>

        <div className="text-4xl mt-10 mb-10">
          <h1 className="text-center mb-5">
            <a href="https://www.lovelive-anime.jp/otonokizaka/member/member02.html" target="_blank" rel="noopener noreferrer" className="underline decoration-blue-300">絢瀬絵里</a>
            を推せ！！！！！！！！！！
          </h1>
          <h4 className="text-center mb-5">南條愛乃さんも推しましょう。約束。</h4>
          <h1 className="text-center mb-5">
            南條さんの
            <a href="https://www.dlsite.com/home/fsr/=/keyword/ASMR/keyword_creater/%22%E5%8D%97%E6%A2%9D%E6%84%9B%E4%B9%83%22/age_category[0]/general/order/trend/options[0]/JPN/options[1]/NM" target="_blank" rel="noopener noreferrer" className="underline decoration-blue-300">ASMR作品</a>
            をぜひ聴いて下さい。後悔はさせません。
          </h1>
        </div>

        <div>
          <h1 className="text-3xl mt-3 mb-3 text-center">
            <a href="/profile" className="underline decoration-blue-300">プロフィール</a>
          </h1>
          <h1 className="text-3xl mt-3 mb-3 text-center">
            <a href="/game" className="underline decoration-blue-300">ゲーム</a>
          </h1>
        </div>
        
        <br/>
        <div id="meigen">
          <div id="meigen_content" className='text-3xl text-center mt-1'>
            変わることを恐れないで、突き進む勇気。私はあの時、あなたの手に救われた。
          </div>
          <div id="meigen_from" className='text-2xl text-center mt-1'>
            絢瀬絵里 アニメ1期第13話
          </div>
          <h1 className='text-center hover:cursor-pointer'>
            <a onClick={() => selectmeigen()} className='bg-cyan-500'>⟳</a>
          </h1>
        </div>
        <br/>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-end mb-5">
          <div className='grid justify-items-center lg:justify-items-start'>
            <img src="https://spotify-recently-played-readme.vercel.app/api?user=31upypeuqy2n3urisvkknr7gh2ra"
              alt="recently spotify"
              loading='lazy'
              className='right-0' />
          </div>
          
          <div className='grid justify-items-center lg:justify-items-end'>
            <img src="https://moe-counter-cf.yude.workers.dev/hieri"
              alt="表示カウンター"
              loading='lazy'
              className='w-1/2' />
          </div>
        </div>

        <hr />
        <div className='text-center mb-2 mt-1'>
          <img alt="hieribanner" src="./website_banner.png" className='h-12 inline' />
          <img alt="happybanner" src="./busy_banner.webp" className='h-12 inline' />
        </div>
        <p className='text-center text-xl'>
          <FontAwesomeIcon icon={faGithub as IconDefinition} width={18} height={18} transform="down-1" /> <a href="https://Github.com/hieri1021/hieri.net" target="_blank" rel="noopener noreferrer" className='underline decoration-blue-300'> Github</a> / <FontAwesomeIcon icon={faTwitter as IconDefinition} width={18} height={18} transform="down-1" /> <a href="https://twitter.com/yamahi_5028" target="_blank" rel="noopener noreferrer" className='underline decoration-blue-300'>Twitter</a> / <a href="https://scrapbox.io/hieri-scrapbox" target="_blank" rel="noopener noreferrer" className='underline decoration-blue-300'>Scrapbox</a>
        </p>
      </main>
    </div >    
  )
}
