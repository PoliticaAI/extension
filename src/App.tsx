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
        desc: "Israeli forces have experienced heavy assaults attempting to advance into the major urban centres. Hamas and other factions have anti-tank mines and anti-tank guided missiles which they have used ...",
        href: "https://www.theguardian.com/world/2023/oct/10/israel-hamas-war-what-an-israeli-ground-offensive-in-gaza-could-look-like",
        thumb: "//external-content.duckduckgo.com/ip3/www.theguardian.com.ico",
        title: "What an Israeli ground offensive in Gaza could look like",
      },
      {
        desc: "72K subscribers in the AskMiddleEast community. This is a place to ask any question you might have about the Middle East and North Africa. This sub…",
        href: "https://www.reddit.com/r/AskMiddleEast/comments/175h0k2/what_would_an_israeli_ground_assault_in_gaza_look/",
        thumb: "//external-content.duckduckgo.com/ip3/www.reddit.com.ico",
        title:
          "What would an Israeli ground assault in Gaza look like? Here's what I ...",
      },
      {
        desc: "231010201614-video-thumbnail-child-crop-2009-israeli-incursion-gaza. RECOMMENDATIONS. Economy. IMF lowers growth forecast for Egyptian economy to 3.6%. October 10, 2023. Egyptian banks suspend debit card usage abroad. October 10, 2023. Egypt's Interior Ministry denies killing of 6 Israelis in Sinai, confirms situation is stable.",
        href: "https://cloudflare.egyptindependent.com/what-would-an-israeli-ground-assault-in-gaza-look-like-heres-what-ive-seen-before/231010201614-video-thumbnail-child-crop-2009-israeli-incursion-gaza/",
        thumb:
          "//external-content.duckduckgo.com/ip3/cloudflare.egyptindependent.com.ico",
        title:
          "231010201614-video-thumbnail-child-crop-2009-israeli-incursion-gaza",
      },
      {
        desc: "6 min. SDEROT, Israel — As the Israeli military prepares for an expected ground invasion of Gaza, civilians on both sides are bracing for the worst. In Israel, people were told to stockpile ...",
        href: "https://www.washingtonpost.com/world/2023/10/11/israelis-palestinians-gaza-ground-invasion-preparations/",
        thumb:
          "//external-content.duckduckgo.com/ip3/www.washingtonpost.com.ico",
        title:
          "Palestinians and Israelis brace for the worst from a Gaza ground ...",
      },
      {
        desc: "Hamas is a Palestinian militant group which rules the Gaza Strip. It is sworn to Israel's destruction and wants to replace it with an Islamic state. Hamas has fought several wars with Israel since ...",
        href: "https://www.bbc.com/news/world-middle-east-67039975",
        thumb: "//external-content.duckduckgo.com/ip3/www.bbc.com.ico",
        title:
          "What's happening in Israel and Gaza? What is Hamas? A really simple ...",
      },
      {
        desc: "Analysis by Ben Wedeman, CNN",
        href: "https://www.erienewsnow.com/story/49810172/what-would-an-israeli-ground-assault-in-gaza-look-like-heres-what-i-know-from-the-one-i-saw",
        thumb: "//external-content.duckduckgo.com/ip3/www.erienewsnow.com.ico",
        title:
          "What would an Israeli ground assault in Gaza look like? Here's what I ...",
      },
      {
        desc: "Israel vowed to completely destroy Islamist group Hamas on the eve of US Secretary of State Antony Blinken's expected visit Thursday as Washington underscores support for the Jewish state in a war that has seen the death toll spiral into the thousands.Just ahead of Blinken's trip, Washington urged its ally to show restraint in its response to Hamas's surprise attack -- the worst in the country ...",
        href: "https://news.yahoo.com/israel-vows-hamass-destruction-deadly-040922607.html",
        thumb: "//external-content.duckduckgo.com/ip3/news.yahoo.com.ico",
        title:
          "Israel vows Hamas's destruction after deadly assault - Yahoo News",
      },
      {
        desc: "Israeli forces were still bombing Gaza and fighting with Hamas gunmen in parts of southern Israel in the early hours of Sunday and a spokesman for the military said the situation in the country ...",
        href: "https://www.aljazeera.com/news/2023/10/7/world-is-watching-fears-grow-of-a-massive-gaza-invasion-by-israel",
        thumb: "//external-content.duckduckgo.com/ip3/www.aljazeera.com.ico",
        title:
          "Fears of a ground invasion of Gaza grow as Israel vows 'mighty ...",
      },
      {
        desc: "It has been more than 17 years since an Israeli soldier was taken as a prisoner of war in an assault on Israeli territory. And Israel has not seen this kind of infiltration of military bases ...",
        href: "https://www.cnn.com/2023/10/07/middleeast/israel-gaza-border-security-intl/index.html",
        thumb: "//external-content.duckduckgo.com/ip3/www.cnn.com.ico",
        title:
          "Why didn't Israel's sophisticated border security stop Saturday's ... - CNN",
      },
      {
        desc: "Fire and smoke rises following an Israeli airstrike, in Gaza City, Saturday, Oct. 7, 2023. The militant Hamas rulers of the Gaza Strip carried out an unprecedented, multi-front attack on Israel at daybreak Saturday, firing thousands of rockets as dozens of Hamas fighters infiltrated the heavily fortified border in several locations by air, land, and sea, killing dozens and stunning the country.",
        href: "https://apnews.com/article/israel-palestinians-gaza-hamas-rockets-airstrikes-tel-aviv-11fb98655c256d54ecb5329284fc37d2",
        thumb: "//external-content.duckduckgo.com/ip3/apnews.com.ico",
        title:
          "Hamas surprise attack out of Gaza stuns Israel and leaves hundreds dead ...",
      },
      {
        desc: "Around 700 Israelis had died since attacks began on Saturday, according to Israel's foreign ministry as of 10:20 p.m. local time on Sunday. The Gaza Health Ministry said at least 413 ...",
        href: "https://www.nytimes.com/interactive/2023/10/07/world/middleeast/israel-gaza-maps.html",
        thumb: "//external-content.duckduckgo.com/ip3/www.nytimes.com.ico",
        title:
          "Maps: Tracking the Attacks in Israel and Gaza - The New York Times",
      },
      {
        desc: "Shalabi said aid groups working inside Gaza estimated that at least 20,000 people were displaced on the first night of Israeli airstrikes. Thousands fled into Gaza City, already the most tightly ...",
        href: "https://www.theguardian.com/world/2023/oct/08/people-are-fearful-of-whats-to-come-gaza-civilians-flee-waves-of-israeli-strikes",
        thumb: "//external-content.duckduckgo.com/ip3/www.theguardian.com.ico",
        title:
          "'People are fearful of what's to come': Gaza civilians flee waves of ...",
      },
      {
        desc: 'A Surprise Attack: Hamas mounted a stunning and highly coordinated invasion of Israel, leading to an all-out war. Our correspondent in Jerusalem joined "The Daily" to discuss the crisis ...',
        href: "https://www.nytimes.com/article/israel-gaza-hamas-what-we-know.html",
        thumb: "//external-content.duckduckgo.com/ip3/www.nytimes.com.ico",
        title: "What We Know About the Hamas Attack and Israel's Response",
      },
      {
        desc: "Across Israel's Route 3, a highway 15 miles north of Gaza, police armed with assault rifles fanned out across roads, checking cars for gunmen trying to pass farther into the country.",
        href: "https://www.nbcnews.com/news/world/israel-says-palestinian-militants-are-infiltrating-gaza-rcna119315",
        thumb: "//external-content.duckduckgo.com/ip3/www.nbcnews.com.ico",
        title:
          "Hamas launches surprise land, air and sea attack on Israel - NBC News",
      },
      {
        desc: "Catch the top stories of the day on ANC's 'Top Story' (9 October 2023)",
        href: "https://www.facebook.com/abscbnNEWS/videos/top-story-anc-9-october-2023/1775614186244452/",
        thumb: "//external-content.duckduckgo.com/ip3/www.facebook.com.ico",
        title: "Top Story | ANC (9 October 2023) - Facebook",
      },
      {
        desc: "The death toll from the Israeli assault on Gaza rose to 31 on Sunday, including six children. More than 260 people have been injured. A senior commander of Islamic Jihad was killed in an Israeli ...",
        href: "https://www.aljazeera.com/news/2022/8/7/israels-assault-on-gaza-what-we-know-so-far",
        thumb: "//external-content.duckduckgo.com/ip3/www.aljazeera.com.ico",
        title: "Israel's assault on Gaza: What we know so far - Al Jazeera",
      },
      {
        desc: '14 May 2021. "We are afraid and cannot bear it any more". Israel has intensified its assault on Gaza, as Palestinian militants continue to fire rockets into Israel on the fifth day of hostilities ...',
        href: "https://www.bbc.com/news/world-middle-east-57110368",
        thumb: "//external-content.duckduckgo.com/ip3/www.bbc.com.ico",
        title:
          "Israel intensifies attacks in Gaza as conflict enters fifth day",
      },
      {
        desc: "John Yang: Tonight, Israeli tanks and armored personnel carriers headed for the border with Gaza, as Israeli military officials say they have begun a ground assault into the Palestinian enclave ...",
        href: "https://www.pbs.org/newshour/show/israel-begins-ground-assault-against-gaza-as-conflict-escalates-despite-truce-efforts",
        thumb: "//external-content.duckduckgo.com/ip3/www.pbs.org.ico",
        title: "Israel-Gaza conflict escalates despite truce efforts - PBS",
      },
      {
        desc: "It marks the latest assault by Israel on Gaza since the 11-day war in May 2021 killed hundreds and wounded thousands. The following timeline lists major attacks carried out by Israeli forces on ...",
        href: "https://www.aljazeera.com/news/2022/8/7/timeline-israels-attacks-on-gaza-since-2005",
        thumb: "//external-content.duckduckgo.com/ip3/www.aljazeera.com.ico",
        title: "Timeline: Israel's attacks on Gaza since 2005 - Al Jazeera",
      },
      {
        desc: "Israel's ground assault on the Gaza Strip, which began on 17 July after 10 days of attacks by Israeli forces and Palestinian armed groups, accentuates the need for urgent international action to protect civilians in Gaza and Israel from further war crimes by both sides, Amnesty International said today. \"Israel's relentless air assault on Gaza […]",
        href: "https://www.amnesty.org/en/latest/news/2014/07/israelgaza-prevent-further-war-crimes-after-israeli-ground-assault/",
        thumb: "//external-content.duckduckgo.com/ip3/www.amnesty.org.ico",
        title:
          "Israel/Gaza: Prevent further war crimes after Israeli ground assault ...",
      },
      {
        desc: "Israel ground assault in Gaza. Smoke rises during what witnesses said were heavy Israeli shelling at the Shejaia neighbourhood in Gaza City, July 20, 2014. At least 40 Palestinians were killed on ...",
        href: "https://www.cbsnews.com/pictures/israel-ground-assault-in-gaza/",
        thumb: "//external-content.duckduckgo.com/ip3/www.cbsnews.com.ico",
        title: "Israel ground assault in Gaza - CBS News",
      },
      {
        desc: "Israel launched an intense air and ground assault on the Gaza Strip ... signaled a collapse of law and order inside Israel on a scale not seen since the start of the second Palestinian uprising ...",
        href: "https://www.nytimes.com/2021/05/13/world/middleeast/israel-gaza-hamas-war.html",
        thumb: "//external-content.duckduckgo.com/ip3/www.nytimes.com.ico",
        title: "Israel Ground Forces Shell Gaza as Fighting Intensifies",
      },
      {
        desc: "It was the deepest Israeli ground operation into Gaza since the withdrawal from the Strip in 2005. Then, Israeli troops largely avoided the most built up and crowded areas, particularly Gaza's eight crammed refugee camps. They were well aware that entering into the narrow alleys of camps like al-Shati, one of the most crowded, would be risky.",
        href: "https://www.egyptindependent.com/what-would-an-israeli-ground-assault-in-gaza-look-like-heres-what-ive-seen-before/",
        thumb:
          "//external-content.duckduckgo.com/ip3/www.egyptindependent.com.ico",
        title:
          "What would an Israeli ground assault in Gaza look like? Here's what I ...",
      },
    ],
    gpt_response: {
      fallacies: {
        "Fallacy/bias 1: Emotional language":
          'The article uses emotionally charged language, such as "cruelty vividly displayed" and "wastelands of shattered concrete and twisted metal," to describe the Israeli strikes on Gaza. This language evokes sympathy for the Palestinians and portrays the Israeli actions in a negative light. It exhibits a bias towards the suffering of the Palestinians and can be seen as a form of emotional manipulation.',
        "Fallacy/bias 2: Lack of Israeli perspective":
          "The article primarily focuses on the Palestinian side of the conflict, discussing the capabilities of Hamas and the potential challenges for Israeli forces. However, it does not provide a balanced perspective by including the Israeli viewpoint or addressing the reasons behind Israel's military actions. This omission creates a bias in favor of the Palestinians and neglects the complexities of the situation.",
        "Fallacy/bias 3: Speculation about re-occupation":
          "The article includes speculation about a potential re-occupation of Gaza by Israeli forces. This speculation is presented without concrete evidence or official statements, which can contribute to fear-mongering and a negative portrayal of Israel's intentions. It introduces a bias by suggesting worst-case scenarios without providing sufficient context or supporting information.",
      },
      ranking: ["-7", "Left-leaning"],
      reasons: {
        "Reason 1: Reporting on Israeli military tactics":
          "The article focuses on Israeli military tactics, highlighting their preference for controlling territory quickly while avoiding street-to-street and house-to-house fighting. This emphasis on Israeli tactics suggests a critical perspective on the Israeli military's approach, which aligns with a left-leaning viewpoint.",
        "Reason 2: Mention of armed Palestinian groups":
          "The article mentions the presence of various armed Palestinian groups in Gaza, aside from Hamas. This inclusion highlights the complexity of the situation and implies that the conflict involves more than just Hamas. By acknowledging these other groups, the article presents a broader perspective, which tends to align with left-leaning narratives.",
        "Reason 3: Mention of previous Israeli actions":
          "The article references previous Israeli military actions, such as the invasion of Lebanon in 1982 and the subsequent massacre in Sabra and Shatila refugee camp. By bringing up these historical events, the article suggests a pattern of Israeli aggression and raises questions about the potential consequences of a new ground operation in Gaza. This historical context aligns with a left-leaning perspective.",
      },
      title:
        "What would an Israeli ground assault in Gaza look like? Here’s what I’ve seen before",
      top_image:
        "https://media.cnn.com/api/v1/images/stellar/prod/231010130853-02-gaza-damaged-buildings-10102023.jpg?c=16x9&q=w_800,c_fill",
    },
  });

  useEffect(() => {
    const params = new URLSearchParams(
      new URL(window.location.href).searchParams
    );

    // Allow embedded to get bigger = fit bigger screens
    if (params.has("embedded")) {
      document.body.style.width = document.body.style.height = "100%";

      (document.body.parentElement as HTMLElement).style.width = 
        (document.body.parentElement as HTMLElement).style.height = "100%";

      (document.getElementById("root") as HTMLElement).style.width = 
        (document.getElementById("root") as HTMLElement).style.height = "100%";
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
