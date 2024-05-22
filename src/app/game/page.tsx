import { useRouter } from "next/router";

export default function Game() {
  //const router = useRouter();
  return (
    <main className="container mx-auto">
      <h1 className="text-4xl mt-3">ゲーム</h1><br/>
      <div>
        <h1 className="text-2xl mt-3 mb-3">
          <a href="https://pjsekai.sega.jp/" target="_blank" rel="noopener noreferrer" className="underline decoration-blue-300">プロセカ</a>はいいぞ
        </h1>
      </div>
      <br/>
      <h1 className="text-2xl mt-3">
        Steamでやったゲーム
      </h1>
      <div>
        <iframe src="https://steam-embeds-v2.vercel.app/widget?id=76561199490148278&num=5" width="350" height="470"></iframe>
      </div>
    </main>
  );
}