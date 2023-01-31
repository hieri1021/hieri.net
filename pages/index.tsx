import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

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
        <title>kke-phi</title>
        <meta name="description" content="サイトもどき" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>hieri.jp</h1>
        <div className={styles.main}>
          <h1 style={{textAlign: "center"}}>
            <a style={{color: "skyblue"}} href="https://www.lovelive-anime.jp/otonokizaka/member/member02.html" target="_blank" rel="noopener noreferrer">絢瀬絵里</a>
            を推せ！！！！！！！！！！
          </h1>
          <h4 style={{textAlign: "center"}}>南條愛乃さんも推しましょう。約束。</h4>
        </div>

        <div className="mt-2">
          <img src="https://count.getloli.com/get/@hieri?theme=asoul"
             alt="表示カウンター(count.getloli.com)"
             loading='lazy' />
        </div>
      

      <p 
      id="RealtimeClockArea" suppressHydrationWarning={true}
      style={{textAlign: "right"}}
      >
        {year}年{month}月{date}日{twoDigit(hours)}時{twoDigit(minutes)}分{twoDigit(seconds)}秒
      </p>

      <hr />
      <p style={{textAlign: "center"}}>
        <FontAwesomeIcon icon={faGithub} width={18} height={18} transform="down-1" /> Github:<a style={{color: "blue"}} href="https://Github.com/hieri1021/myfavorite" target="_blank" rel="noopener noreferrer">hieri1021/myfaovrite</a> / <FontAwesomeIcon icon={faTwitter} width={18} height={18} transform="down-1" /> Twitter:<a style={{color: "blue"}} href="https://twitter.com/yamahi_5028" target="_blank" rel="noopener noreferrer">@yamahi_5028</a>
      </p>
      </main>
    </div >    
  )
}