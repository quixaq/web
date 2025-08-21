import './styles/global.css'
import Image from 'next/image'

export default function Home() {
  return (
      <div className={"container"}>
          <div className={"container2"}>
              <div className={"pfp"}>
                <Image src="/web/media/pfp.png" alt="" width={128} height={128} style={{ borderRadius: 50 }} />
              </div>
              <div className={"username"}><h1>Quixaq</h1></div>
          </div>
          <div className={"description"}>
              Hewwo there floof :3 I am a frontend and backend developer, a furry and a gamer. <br/>
              My fursona is a cute red protogen as you can see on the pfp :3 <br/> <br/>
              <h6>she/her</h6>
          </div>
          <div className={"icons"}>
              <div className={"icon"}>
                  <a href="https://discord.com/users/1094521554366386240"><Image src={"/web/media/discord.png"} alt="" title="Discord" height={48} width={48}></Image> </a>
              </div>
              <div className={"icon"}>
                  <a href="https://www.furaffinity.net/user/quixaq/"><Image src={"/web/media/furaffinity.png"} alt="" title="Furaffinity" height={48} width={48}></Image> </a>
              </div>
              <div className={"icon"}>
                  <a href="https://github.com/quixaq"><Image src={"/web/media/github.png"} alt="" title="Github" height={48} width={48}></Image></a>
              </div>
              <div className={"icon"}>
                  <a href="https://www.youtube.com/@Quixaq"><Image src={"/web/media/youtube.png"} alt ="" title="YouTube" height={48} width={48}></Image></a>
              </div>
              <div className={"icon"}>
                  <a href="https://steamcommunity.com/id/quixaq/"><Image src={"/web/media/steam.png"} alt="" title="Steam" height={48} width={48}></Image> </a>
              </div>
          </div>
      </div>
  );
}
