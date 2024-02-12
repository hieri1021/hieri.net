import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub as IconDefinition);
library.add(faTwitter as IconDefinition);

export default function Home() {

  function twoDigit(num: number) {
    let ret;
    if( num < 10 ) 
      ret = "0" + num; 
    else 
      ret = num; 
    return ret;
  }

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  const [hours, setHour] = useState(today.getHours());
  const [minutes, setMin] = useState(today.getMinutes());
  const [seconds, setSec] = useState(today.getSeconds());
  //let msg = year + "年" + month + "月" + date + "日" + hours + "時" + minutes + "分" + seconds + "秒";

  setInterval(() => {
    const now = new Date();
    setHour(now.getHours());
    setMin(now.getMinutes());
    setSec(now.getSeconds());
  }, 1000);

  return (
    <div className={styles.container}>
      <Head>
        <title>hieri.app</title>
        <meta name="description" content="サイトもどき" />
        <link rel="icon" href="/lamune.ico" />
      </Head>

      <main>
        <h1>ヒエリのサイト</h1>
        <div className={styles.main}>
          <h1 style={{textAlign: "center"}}>
            <a href="https://www.lovelive-anime.jp/otonokizaka/member/member02.html" target="_blank" rel="noopener noreferrer">絢瀬絵里</a>
            を推せ！！！！！！！！！！
          </h1>
          <h4 style={{textAlign: "center"}}>南條愛乃さんも推しましょう。約束。</h4>
          <h1 style={{textAlign: "center"}}>
            南條さんが
            <a href="https://www.dlsite.com/home/work/=/product_id/RJ01080844.html" target="_blank" rel="noopener noreferrer">ASMR作品</a>
            を出してくださったぞ！！全人類聞け！！！！
          </h1>
        </div>

        <div className="mt-2">
          <img src="https://moe-counter-cf.yude.workers.dev/hieri"
             alt="表示カウンター(count.getloli.com)"
             loading='lazy' width="315" height="100"/>
        </div>

        <img alt="site_banner" src="Site_banner.png" width="234" height="60" />

      <p 
      id="RealtimeClockArea" suppressHydrationWarning={true}
      style={{textAlign: "right"}}
      >
        {year}年{month}月{date}日{twoDigit(hours)}時{twoDigit(minutes)}分{twoDigit(seconds)}秒
      </p>

      <hr />
      <p style={{textAlign: "center"}}>
        <FontAwesomeIcon icon={faGithub as IconDefinition} width={18} height={18} transform="down-1" /> Github:<a href="https://Github.com/hieri1021/hieri_website" target="_blank" rel="noopener noreferrer">hieri1021/hieri_website</a>. / <FontAwesomeIcon icon={faTwitter as IconDefinition} width={18} height={18} transform="down-1" /> Twitter:<a href="https://twitter.com/yamahi_5028" target="_blank" rel="noopener noreferrer">@yamahi_5028</a>
      </p>
      </main>
    </div >    
  )
}
