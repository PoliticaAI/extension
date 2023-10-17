import { useEffect, useState } from "react";
import { ArticleAnalysis } from "./api/analysis.api";

import MainScreen from "./screens/MainScreen";
import StartAnalysisScreen from "./screens/StartAnalysisScreen";

import { MemoryRouter, Routes, Route } from "react-router-dom";
import AskAnalysisScreen from "./screens/AskAnalysisScreen";

const App = () => {
  // TODO: THIS IS FOR TESTING PURPOSES ONLY
  const [analysis, setAnalysis] = useState<null | ArticleAnalysis>({
    ddg_response: [
      {
        desc: "Rep. Jim Jordan boards an elevator in the U.S. Capitol following a House Republican conference meeting on October 12 in Washington, DC.",
        href: "https://www.channel3000.com/news/national-politics/jordan-faces-grim-prospects-in-speaker-s-fight-after-whirlwind-week-for-house-gop/image_796ce472-1591-5fff-89e0-04473f065311.html",
        thumb: "//external-content.duckduckgo.com/ip3/www.channel3000.com.ico",
        title:
          "Jordan faces grim prospects in speaker's fight after whirlwind week for ...",
      },
      {
        desc: "Jordan faces grim prospects in speaker's fight after whirlwind week for House GOP Win McNamee/Getty Images Oct 15, 2023 Updated 1 hr ago 0 Rep. Jim Jordan arrives for a House Republican conference meeting where Rep. Steve Scalise withdrew his name as a candidate to be the next Speaker of the House at the U.S. Capitol in Washington on October 12.",
        href: "https://www.wthitv.com/news/jordan-faces-grim-prospects-in-speaker-s-fight-after-whirlwind-week-for-house-gop/image_e6c77c2a-ae49-53cf-8592-a0d8ddeee0c8.html",
        thumb: "//external-content.duckduckgo.com/ip3/www.wthitv.com.ico",
        title:
          "Jordan faces grim prospects in speaker's fight after whirlwind week for ...",
      },
      {
        desc: "Jordan faces grim prospects in speaker's fight after whirlwind week for House GOP. Chip Somodevilla/Getty Images; Oct 15, 2023 Oct 15, 2023 Updated 3 hrs ago; 0; Facebook; Twitter; WhatsApp; SMS; Email; Print; Copy article link; Save; House Majority Leader Steve Scalise speaks at the Capitol on October 12 in Washington, DC.",
        href: "https://www.wthitv.com/news/jordan-faces-grim-prospects-in-speaker-s-fight-after-whirlwind-week-for-house-gop/image_30bc36a9-dc0d-5f66-9df4-a517c495dae5.html",
        thumb: "//external-content.duckduckgo.com/ip3/www.wthitv.com.ico",
        title:
          "Jordan faces grim prospects in speaker's fight after whirlwind week for ...",
      },
      {
        desc: "Jordan faces grim prospects in speaker's fight after whirlwind week for House GOP Rep. Jim Jordan is the new GOP speaker nominee following Majority Leader Steve Scalise's exit from the race ...",
        href: "https://www.komu.com/news/nationworld/jordan-faces-grim-prospects-in-speaker-s-fight-after-whirlwind-week-for-house-gop/image_71a0a855-f8fd-51cb-8611-199b7a787509.html",
        thumb: "//external-content.duckduckgo.com/ip3/www.komu.com.ico",
        title:
          "Jordan faces grim prospects in speaker's fight after whirlwind week for ...",
      },
      {
        desc: "Ohio's Jim Jordan faces grim prospects in speaker's fight. CNN. Oct 14, 2023. 6:48 AM. WASHINGTON —After a series of setbacks, Republicans ended the week no closer to electing a new speaker as ...",
        href: "https://www.toledoblade.com/news/nation/2023/10/14/jordan-faces-grim-prospects-speaker-fight/stories/20231014099",
        thumb: "//external-content.duckduckgo.com/ip3/www.toledoblade.com.ico",
        title: "Ohio's Jim Jordan faces grim prospects in speaker's fight",
      },
      {
        desc: "Jordan faces grim prospects in speaker's fight after whirlwind week for House GOP. CNN Politics. Just now. After a series of setbacks, Republicans ended the week no closer to electing a new speaker as deep internal divisions have left the conference struggling to govern and the House in a state of paralysi.",
        href: "https://www.novanewsapp.com/article/765684337450774528",
        thumb: "//external-content.duckduckgo.com/ip3/www.novanewsapp.com.ico",
        title:
          "Jordan faces grim prospects in speaker's fight after whirlwind week for ...",
      },
      {
        desc: "Saturday, October 14th 2023, 8:17 AM CDT By Clare Foran and Jeremy Herb, CNN (CNN) — After a series of setbacks, Republicans ended the week no closer to electing a new speaker as deep internal divisions have left the conference struggling to govern and the House in a state of paralysis.",
        href: "https://rivercountry.newschannelnebraska.com/story/49832975/jordan-faces-grim-prospects-in-speakers-fight-after-whirlwind-week-for-house-gop",
        thumb:
          "//external-content.duckduckgo.com/ip3/rivercountry.newschannelnebraska.com.ico",
        title:
          "Jordan faces grim prospects in speaker's fight after whirlwind week for ...",
      },
      {
        desc: "On Friday, Jordan won the speaker nomination against GOP Rep. Austin Scott of Georgia - who made a surprise last-minute bid - in a 124 to 81 vote, leaving him far short of 217. Jordan then called a second vote Friday afternoon asking members if they would support him on the floor.",
        href: "https://www.crossroadstoday.com/jordan-faces-grim-prospects-in-speaker-s-fight-after-whirlwind-week-for-house-gop/article_2f0e38d2-eb23-5e1b-8a54-7f4d388ee358.html",
        thumb:
          "//external-content.duckduckgo.com/ip3/www.crossroadstoday.com.ico",
        title:
          "Jordan faces grim prospects in speaker's fight after whirlwind week for ...",
      },
      {
        desc: "By Clare Foran and Jeremy Herb, CNN",
        href: "https://panhandle.newschannelnebraska.com/story/49832975/jordan-faces-grim-prospects-in-speakers-fight-after-whirlwind-week-for-house-gop",
        thumb:
          "//external-content.duckduckgo.com/ip3/panhandle.newschannelnebraska.com.ico",
        title:
          "Jordan faces grim prospects in speaker's fight after whirlwind week for ...",
      },
      {
        desc: "CNN — After a sequence of setbacks, Republicans ended the week no nearer to electing a new speaker as deep inner divisions have left the convention struggling to manipulate and the Home in a state of paralysis. The chaos inside Home GOP ranks intensified dramatically over the previous a number of days because the convention …",
        href: "https://www.newshubpro.com/news/jordan-faces-grim-prospects-in-speakers-combat-after-whirlwind-week-for-home-gop/",
        thumb: "//external-content.duckduckgo.com/ip3/www.newshubpro.com.ico",
        title:
          "Jordan faces grim prospects in speaker's combat after whirlwind week ...",
      },
      {
        desc: "CNN — After a series of setbacks, Republicans ended the week no closer to electing a new speaker as deep internal divisions have left the conference struggling to govern and the House in a state of paralysis. The chaos within House GOP ranks intensified dramatically over the past several days as the conference has tried […]",
        href: "https://espotting.com/2023/10/14/jordan-faces-grim-prospects-in-speakers-fight-after-whirlwind-week-for-house-gop-cnn/",
        thumb: "//external-content.duckduckgo.com/ip3/espotting.com.ico",
        title:
          "Jordan faces grim prospects in speaker's fight after whirlwind week for ...",
      },
      {
        desc: "Jordan faces grim prospects in speaker's fight after whirlwind week for House GOP Read More. ← Louisiana Republicans face first test in effort to flip governor's office 'Frasier' reboot, 'Goosebumps' and 98 Degrees have us wondering… are we back in the '90s? ...",
        href: "https://aginggracefully.org/cnn_post/jordan-faces-grim-prospects-in-speakers-fight-after-whirlwind-week-for-house-gop/",
        thumb: "//external-content.duckduckgo.com/ip3/aginggracefully.org.ico",
        title:
          "Jordan faces grim prospects in speaker's fight after whirlwind week for ...",
      },
      {
        desc: "Fox Sports listed down several injuries that Jordan Clarkson has endured during his games, which include a sprained ankle, knee contusion, and sprained right thumb. But the recent injury to Clarkson's face has caught the attention of several fans, especially after he chucked the ball at Dario Saric's back after the latter had the last dunk ...",
        href: "https://www.earnthenecklace.com/what-happened-to-jordan-clarkson-face-black-eye-injury/",
        thumb:
          "//external-content.duckduckgo.com/ip3/www.earnthenecklace.com.ico",
        title:
          "What Happened to Jordan Clarkson's Face? Details about His Black Eye!",
      },
      {
        desc: "Get the latest NFL news on Jordan Whitehead. Stay up to date with NFL player news, rumors, updates, analysis, social feeds, and more at FOX Sports.",
        href: "https://www.foxsports.com/nfl/jordan-whitehead-player",
        thumb: "//external-content.duckduckgo.com/ip3/www.foxsports.com.ico",
        title: "Jordan Whitehead - NFL News, Rumors, & Updates | FOX Sports",
      },
      {
        desc: "The Buccaneers opened Sunday's NFC Championship Game down one safety and they lost another when Jordan Whitehead injured his shoulder during the game. Whitehead was hurt early in the third quarter while forcing an Aaron Jones fumble.",
        href: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/bruce-arians-too-early-for-update-on-jordan-whiteheads-shoulder",
        thumb: "//external-content.duckduckgo.com/ip3/www.nbcsports.com.ico",
        title:
          "Bruce Arians: Too early for update on Jordan Whitehead's shoulder",
      },
      {
        desc: "Rep. Jim Jordan is the new GOP speaker nominee following Majority Leader Steve Scalise's exit from the race. But the Ohio Republican faces the same kind of grim vote math that doomed...",
        href: "https://www.msn.com/en-us/news/politics/jordan-faces-grim-prospects-in-speaker-s-fight-after-whirlwind-week-for-house-gop/ar-AA1icWxl",
        thumb: "//external-content.duckduckgo.com/ip3/www.msn.com.ico",
        title:
          "Jordan faces grim prospects in speaker's fight after whirlwind week for ...",
      },
      {
        desc: "On Friday, Jordan won the speaker nomination against GOP Rep. Austin Scott of Georgia - who made a surprise last-minute bid - in a 124 to 81 vote, leaving him far short of 217. Jordan then...",
        href: "https://www.channel3000.com/news/national-politics/jordan-faces-grim-prospects-in-speaker-s-fight-after-whirlwind-week-for-house-gop/article_8a773915-67aa-52de-bb9c-cf2e9ce9e9f3.html",
        thumb: "//external-content.duckduckgo.com/ip3/www.channel3000.com.ico",
        title:
          "Jordan faces grim prospects in speaker's fight after whirlwind week for ...",
      },
    ],
    gpt_response: {
      fallacies: {
        "List of Present Fallacies/Biases:":
          "No fallacies or biases were identified in the article.",
      },
      ranking: ["0", "Neutral"],
      reasons: {
        "Reason 1: Deep internal divisions within the House GOP":
          "The article highlights the deep internal divisions within the House GOP, which has left the conference struggling to govern and the House in a state of paralysis. This indicates a lack of unity and cohesion within the party, which can be seen as a neutral factor in terms of political leaning.",
        "Reason 2: Lack of consensus on a viable successor":
          "The article mentions that the conference has tried and failed to find a viable successor to Kevin McCarthy, with Rep. Jim Jordan now facing a steep uphill battle to win the gavel. The inability to coalesce around a candidate and the presence of resistance within the party suggests a lack of clear direction, which is again a neutral factor.",
        "Reason 3: Frustration and questioning of whether anyone can reach 217 votes":
          "The article highlights the frustration among Republicans that the conference has not been able to unite around a candidate, with some openly questioning whether anyone can reach the 217 votes needed. This further emphasizes the lack of consensus and unity within the party, which does not lean towards either the left or the right.",
      },
      title:
        "Jordan faces grim prospects in speaker’s fight after whirlwind week for House GOP",
      top_image:
        "https://media.cnn.com/api/v1/images/stellar/prod/231013100530-01-jim-jordan-101223.jpg?c=16x9&q=w_800,c_fill",
    },
  });

  useEffect(() => {
    const params = new URLSearchParams(
      new URL(window.location.href).searchParams
    );

    // Allow embedded to get bigger = fit bigger screens
    if (params.has("embedded")) {
      document.body.style.width = document.body.style.height = "100%";

      (document.body.parentElement as HTMLElement).style.width = (
        document.body.parentElement as HTMLElement
      ).style.height = "100%";

      (document.getElementById("root") as HTMLElement).style.width = (
        document.getElementById("root") as HTMLElement
      ).style.height = "100%";
    }
  }, []);

  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<MainScreen analysis={analysis} />} />
        <Route
          path="/start"
          element={<StartAnalysisScreen setAnalysis={setAnalysis} />}
        />
        <Route path="/ask" element={<AskAnalysisScreen />} />
      </Routes>
    </MemoryRouter>
  );
};
export default App;
