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

function selectquote(){
	let num = Math.floor(Math.random() * meigen_list.length);
	document.getElementById('meigen_content').innerText=meigen_list[num][0];
	document.getElementById('meigen_from').innerText=meigen_list[num][1];
}
window.addEventListener("load",function(){selectquote();});