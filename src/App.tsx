import { useState } from "react";
import { ArticleAnalysis } from "./api/analysis.api";

import MainScreen from "./screens/MainScreen";
import StartAnalysisScreen from "./screens/StartAnalysisScreen";

import { MemoryRouter, Routes, Route } from "react-router-dom";

const App = () => {
  // TODO: THIS IS FOR TESTING PURPOSES ONLY
  const [analysis, setAnalysis] = useState<null | ArticleAnalysis>({
    ddg_response: [
      {
        href: "https://www.channel3000.com/news/national-and-world-news/what-would-an-israeli-ground-assault-in-gaza-look-like-here-s-what-i-know/article_9676124f-cf2f-5ef1-932e-cc8b23900282.html",
        thumb: "//external-content.duckduckgo.com/ip3/www.channel3000.com.ico",
        title:
          "What would an Israeli ground assault in Gaza look like? Here's what I ...",
      },
      {
        href: "https://www.bbc.com/news/world-middle-east-67042428",
        thumb: "//external-content.duckduckgo.com/ip3/www.bbc.com.ico",
        title: "Footage and maps help build up picture of assault - BBC News",
      },
      {
        href: "https://www.nytimes.com/interactive/2023/10/07/world/middleeast/israel-gaza-maps.html",
        thumb: "//external-content.duckduckgo.com/ip3/www.nytimes.com.ico",
        title:
          "Maps: Tracking the Attacks in Israel and Gaza - The New York Times",
      },
      {
        href: "https://www.washingtonpost.com/world/2023/10/07/israel-gaza-violence-conflict-faq/",
        thumb:
          "//external-content.duckduckgo.com/ip3/www.washingtonpost.com.ico",
        title:
          "What's behind the violence in Israel and Gaza? Here's what to know.",
      },
      {
        href: "https://www.erienewsnow.com/story/49810172/what-would-an-israeli-ground-assault-in-gaza-look-like-heres-what-i-know-from-the-one-i-saw",
        thumb: "//external-content.duckduckgo.com/ip3/www.erienewsnow.com.ico",
        title:
          "What would an Israeli ground assault in Gaza look like? Here's what I ...",
      },
      {
        href: "https://www.aljazeera.com/news/2023/10/7/world-is-watching-fears-grow-of-a-massive-gaza-invasion-by-israel",
        thumb: "//external-content.duckduckgo.com/ip3/www.aljazeera.com.ico",
        title:
          "Fears of a ground invasion of Gaza grow as Israel vows 'mighty ...",
      },
      {
        href: "https://www.cnn.com/2023/10/07/middleeast/sirens-israel-rocket-attack-gaza-intl-hnk/index.html",
        thumb: "//external-content.duckduckgo.com/ip3/www.cnn.com.ico",
        title:
          "Israel-Gaza conflict: Hamas launches surprise attacks into Israeli ...",
      },
      {
        href: "https://www.aljazeera.com/news/2022/8/7/israels-assault-on-gaza-what-we-know-so-far",
        thumb: "//external-content.duckduckgo.com/ip3/www.aljazeera.com.ico",
        title: "Israel's assault on Gaza: What we know so far - Al Jazeera",
      },
      {
        href: "https://www.nytimes.com/2021/05/13/world/middleeast/israel-gaza-hamas-war.html",
        thumb: "//external-content.duckduckgo.com/ip3/www.nytimes.com.ico",
        title: "Israel Ground Forces Shell Gaza as Fighting Intensifies",
      },
      {
        href: "https://www.bbc.com/news/world-middle-east-57092245",
        thumb: "//external-content.duckduckgo.com/ip3/www.bbc.com.ico",
        title:
          "Israel-Gaza violence: The strength and limitations of Hamas' arsenal - BBC",
      },
      {
        href: "https://www.bbc.com/news/world-middle-east-57110368",
        thumb: "//external-content.duckduckgo.com/ip3/www.bbc.com.ico",
        title:
          "Israel intensifies attacks in Gaza as conflict enters fifth day",
      },
      {
        href: "https://www.washingtonpost.com/world/2023/10/07/israel-gaza-hamas-attack-netanyahu/",
        thumb:
          "//external-content.duckduckgo.com/ip3/www.washingtonpost.com.ico",
        title:
          "Fear and shock grip Israel after deadly Hamas assault - The Washington Post",
      },
      {
        href: "https://www.businessinsider.com/what-last-major-israel-ground-offensive-in-gaza-looked-like-2021-5?op=1",
        thumb:
          "//external-content.duckduckgo.com/ip3/www.businessinsider.com.ico",
        title: "What Last Major Israel Ground Offensive in Gaza Looked Like",
      },
      {
        href: "https://www.vox.com/2023/10/7/23907323/israel-war-hamas-attack-explained-southern-israel-gaza",
        thumb: "//external-content.duckduckgo.com/ip3/www.vox.com.ico",
        title: "Why did Hamas invade Israel? - Vox",
      },
      {
        href: "https://www.usatoday.com/story/graphics/2023/10/07/history-of-israel-and-palestine-conflict-and-the-latest-hamas-attacks-war-in-gaza-in-maps/71098600007/",
        thumb: "//external-content.duckduckgo.com/ip3/www.usatoday.com.ico",
        title:
          "History of Israeli and Palestinian conflict and the latest conflict in ...",
      },
      {
        href: "https://www.washingtonpost.com/world/2021/05/10/what-is-happenin0in-jerusalem-israel-gaza-clashes-faq/",
        thumb:
          "//external-content.duckduckgo.com/ip3/www.washingtonpost.com.ico",
        title:
          "What's behind the violence in Israel and Gaza? - The Washington Post",
      },
      {
        href: "https://www.theguardian.com/world/live/2021/may/13/israel-launches-ground-operation-in-gaza-after-days-of-airsstrikes-follow-updates",
        thumb: "//external-content.duckduckgo.com/ip3/www.theguardian.com.ico",
        title:
          "Israel launches fresh Gaza attacks amid rocket fire - as it happened ...",
      },
      {
        href: "https://www.pbs.org/newshour/show/israel-begins-ground-assault-against-gaza-as-conflict-escalates-despite-truce-efforts",
        thumb: "//external-content.duckduckgo.com/ip3/www.pbs.org.ico",
        title: "Israel-Gaza conflict escalates despite truce efforts - PBS",
      },
      {
        href: "https://www.aljazeera.com/news/2022/8/7/timeline-israels-attacks-on-gaza-since-2005",
        thumb: "//external-content.duckduckgo.com/ip3/www.aljazeera.com.ico",
        title: "Timeline: Israel's attacks on Gaza since 2005 - Al Jazeera",
      },
      {
        href: "https://www.aljazeera.com/gallery/2021/5/11/in-pictures-israeli-airstrikes-on-gaza-strip",
        thumb: "//external-content.duckduckgo.com/ip3/www.aljazeera.com.ico",
        title:
          "In Pictures: Israel attacks on Gaza kill 24, including children",
      },
      {
        href: "https://www.cbsnews.com/pictures/israel-ground-assault-in-gaza/",
        thumb: "//external-content.duckduckgo.com/ip3/www.cbsnews.com.ico",
        title: "Israel ground assault in Gaza - CBS News",
      },
      {
        href: "https://www.facebook.com/officialbenshapiro/videos/what-is-happening-in-israel-is-unthinkable/694772632710768/",
        thumb: "//external-content.duckduckgo.com/ip3/www.facebook.com.ico",
        title: "What Is Happening In Israel Is Unthinkable - Facebook",
      },
      {
        href: "https://www.facebook.com/abscbnNEWS/videos/top-story-anc-9-october-2023/1775614186244452/",
        thumb: "//external-content.duckduckgo.com/ip3/www.facebook.com.ico",
        title: "Top Story | ANC (9 October 2023) - Facebook",
      },
    ],
    gpt_response: {
      fallacies: {
        "Fallacy/bias 1: Omission of Israeli perspective":
          "The article primarily focuses on the Israeli ground operation in Gaza and its potential consequences, without providing a comprehensive analysis of the Israeli perspective or the reasons behind the operation. This omission can create a biased portrayal of the conflict and lean towards a left-leaning perspective that emphasizes the impact on Palestinians.",
        "Fallacy/bias 2: Limited discussion of Hamas' actions":
          "While the article briefly mentions Hamas' surprise attack that killed more than 1,000 people in Israel, it does not provide a detailed analysis of Hamas' actions or its role in the conflict. This limited discussion can lead to a biased portrayal that downplays or overlooks Hamas' role as an armed group and its actions that contribute to the ongoing conflict.",
        "Fallacy/bias 3: Lack of alternative viewpoints":
          "The article does not include alternative viewpoints or perspectives that may provide a different analysis of the situation. This lack of diverse perspectives can contribute to a biased presentation that leans towards a left-leaning narrative, focusing primarily on the impact of Israeli actions on the Palestinian population.",
      },
      ranking: ["5", "Left"],
      reasons: {
        "Reason 1: Historical context of Israeli ground operations in Gaza":
          'The article provides historical context by mentioning previous Israeli ground operations in Gaza, such as "Operation Cast Lead" in 2009 and "Hot Winter" in 2008. These operations highlight Israel\'s tactics of moving fast, controlling territory, and avoiding street-to-street fighting. This emphasis on Israeli military actions in Gaza leans towards a left-leaning perspective that focuses on the impact of Israeli operations on the Palestinian population.',
        "Reason 2: Mention of armed Palestinian groups in Gaza":
          'The article mentions that Gaza is home to various armed Palestinian groups, including Hamas, Islamic Jihad, and the Popular Front for the Liberation of Palestine (PFLP). This inclusion of multiple armed groups highlights the complexity of the conflict and suggests that the situation is not solely about Hamas. This perspective aligns with a left-leaning approach that seeks to provide a broader understanding of the conflict beyond a simple "Israel vs. Hamas" narrative.',
        "Reason 3: Discussion of the potential high cost of a ground operation":
          "The article mentions that a ground operation in Gaza would likely be far bloodier and more destructive than the initial airstrikes. It also highlights the presence of captive Israelis, including soldiers and civilians, possibly in crowded refugee camps. This emphasis on the potential human cost of a ground operation aligns with a left-leaning perspective that prioritizes the protection of civilian lives and raises concerns about the consequences of military actions.",
      },
      title:
        "What would an Israeli ground assault in Gaza look like? Here’s what I’ve seen before",
      top_image:
        "https://media.cnn.com/api/v1/images/stellar/prod/231010130853-02-gaza-damaged-buildings-10102023.jpg?c=16x9&q=w_800,c_fill",
    },
  });

  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<MainScreen analysis={analysis} />} />
        <Route
          path="/start"
          element={<StartAnalysisScreen setAnalysis={setAnalysis} />}
        />
      </Routes>
    </MemoryRouter>
  );
};
export default App;
