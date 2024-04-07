import { useRouter } from "next/router";

export default function Profile() {
  //const router = useRouter();
  return (
    <main className="container mx-auto">
      <h1 className="text-4xl mt-3">プロフィール</h1><br/>
      <div>
        <h1 className="text-3xl mt-3 mb-3">
          出身：<a href="https://www.pref.wakayama.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline decoration-blue-300">和歌山県</a><br/>
          誕生日：2001年 8月9日<br/>
          所属：<a href="https://www.hiroshima-cu.ac.jp/" target="_blank" rel="noopener noreferrer" className="underline decoration-blue-300">広島市立大学</a> (2020年4月～)<br/>
          &emsp;&emsp;&emsp;<a href="https://www.hiroshima-cu.ac.jp/" target="_blank" rel="noopener noreferrer" className="underline decoration-blue-300">広島市立大学大学院</a> (2024年4月～)<br/>

        </h1>
      </div>
    </main>
  );
}