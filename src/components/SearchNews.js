import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Triangle } from "react-loader-spinner";
import "../style/searchnews.css";

const SearchNews = () => {
  const navigate = useNavigate();
  const [searchQuery, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  useEffect(() => {
    setQuery(query);
  }, [query]);

  const [pageNumber, setPageNumber] = useState(1);
  const [responseData, setResponseData] = useState({
    _type: "news",
    didUMean: "",
    totalCount: 957,
    relatedSearch: [],
    value: [
      {
        id: "1252717738527239333",
        title:
          "Taylor Swift and Ice Spice Double Up on 'Karma' We Can Hear Lana Now!",
        url: "https://variety.com/2023/music/news/taylor-swift-ice-spice-karma-remix-lana-del-rey-snow-beach-1235626043/",
        description:
          "Taylor Swift's collab with Ice Spice on a new version of 'Karma' has been released, along with the 'More Lana Del Rey' 'Snow on the Beach' refresher.",
        body: "Taylor Swift has lived up to her self-proclaimed Mastermind status with the Thursday night/Friday morning release of fresh versions of two Midnights songs. In one, which she spices up Karma with an all-new verse from arguably the hottest rapper of the moment, Ice Spice. In the other, bluntly subtitled (Featuring More Lana Del Rey), Swift []",
        snippet:
          "<b><b>Taylor Swift</b></b> has lived up to her self-proclaimed Mastermind status with the Thursday night/Friday morning release of fresh versions of two Midnights ...",
        keywords: "",
        language: "en",
        isSafe: true,
        datePublished: "2023-05-26T04:52:42",
        provider: {
          name: "variety",
          favIcon: "",
          favIconBase64Encoding: "",
        },
        image: {
          url: "https://variety.com/wp-content/uploads/2023/05/Screenshot-2023-05-25-at-8.44.33-PM.png",
          height: 0,
          width: 0,
          thumbnail: "",
          thumbnailHeight: 0,
          thumbnailWidth: 0,
          base64Encoding: "",
          name: null,
          title: null,
          provider: {
            name: "variety",
            favIcon: "",
            favIconBase64Encoding: "",
          },
          imageWebSearchUrl: null,
          webpageUrl:
            "https://variety.com/2023/music/news/taylor-swift-ice-spice-karma-remix-lana-del-rey-snow-beach-1235626043/",
        },
      },
      {
        id: "2524550856292053443",
        title: "Taylor Swift Releases 'Karma' Remix with Ice Spice",
        url: "https://people.com/taylor-swift-releases-karma-remix-with-ice-spice-7504445",
        description:
          "The revamped track arrived alongside a new take on \"Snow on the Beach\" on 'Midnights (Til Dawn Edition),' an deluxe version of Swift's latest album",
        body: 'Ice Spice\n? You\'re correct.\nOn Friday, the Grammy-winning singer-songwriter unveiled a remix of "Karma" featuring the rapidly-rising rapper on Midnights (Til Dawn Edition), a deluxe version of her latest album, which also features a new, extended take on "Snow on the Beach" featuring more vocals from Lana Del Rey as well as "Hits Different," which was previously released as a Target exclusive track.\nThe "Karma" remix marks Ice Spice\'s latest high-profile collaboration, following the remix of her song "Princess Diana" featuring Nicki Minaj  which has hit the Billboard Hot 100\'s top 5. The 23-year-old "In Ha Mood" rapper\'s been on an especially impressive and swift run, as her breakthrough single "Munch (Feelin\' U)" was only released last August.\nTaylor Swift Announces \'Midnights (Til Dawn Edition)\' Featuring \'Karma\' Remix with Ice Spice and More\nEarlier this week, Swift announcedMidnights (Til Dawn Edition) via Instagram, writing, "Um. SO much to tell you. Im a massive fan of this brilliant artist and after getting to know her I can confirm: she is THE ONE to watch. So delighted to say that Karma Featuring the incredible\n@icespice\nwill be out TOMORROW night at MIDNIGHT ET as a part of the new Midnights (Til Dawn Edition) deluxe album that you can pre-order now at store.taylorswift.com!"\nThe deluxe album will be available on CD exclusively on-site at her Eras Tour shows at MetLife Stadium in New Jersey this weekend starting at 12:30 p.m. EST on Friday, and she revealed via Instagram: "This CD will have a never before heard Midnights vault track called \'You\'re Losing Me\'!"\nSwift has a lot going on at the moment. During her Nashville show on May 5, she',
        snippet:
          "<b><b>Taylor Swift</b></b> Announces 'Midnights (Til Dawn Edition)' Featuring 'Karma' Remix with Ice Spice and More Earlier this week, <b>Swift</b> announcedMidnights ...",
        keywords: "",
        language: "en",
        isSafe: true,
        datePublished: "2023-05-26T04:49:27.931",
        provider: {
          name: "people",
          favIcon: "",
          favIconBase64Encoding: "",
        },
        image: {
          url: "https://people.com/thmb/QStiEbTO07JcfDkte_9eu8t-rDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/taylorswifticespice11252019-93-4f0cb092865f4fb1b5563eb5a8e0ffbc.jpg",
          height: 0,
          width: 0,
          thumbnail: "",
          thumbnailHeight: 0,
          thumbnailWidth: 0,
          base64Encoding: "",
          name: null,
          title: null,
          provider: {
            name: "people",
            favIcon: "",
            favIconBase64Encoding: "",
          },
          imageWebSearchUrl: null,
          webpageUrl:
            "https://people.com/taylor-swift-releases-karma-remix-with-ice-spice-7504445",
        },
      },
      {
        id: "6192892597543198318",
        title: "Taylor Swift & Ice Spice Release Karma Remix: Listen",
        url: "https://hollywoodlife.com/2023/05/26/taylor-swift-ice-spice-karma-remix/",
        description:
          "Taylor Swift teamed up with Ice Spice to release a new remix to her song 'Karma' on May 25.",
        body: "Taylor Swift\nhas teamed up with one of the hottest new artists in the music industry,Ice Spice. On May 26, she dropped a remix for her latest single, Karma, with a feature from Ice Spice. The song, which is already super popular amongst fans, is elevated to a whole new level with this epic collaboration! In her verse, Ice Spice raps in part, Now youre switching up your behavior/ Its OK baby / you aint gotta worry / karma never gets lazy.\nTaylor announced news of this epic remix on May 24 via Instagram. Im a massive fan of this brilliant artist and after getting to know her I can confirm: she is THE ONE to watch, Taylor wrote. So delighted to say that Karma featuring the incredible Ice Spice will be out TOMORROW night at MIDNIGHT ET as part of the newMidnights (Til Dawn Edition) deluxe album.\nArticles Trending Now\nTina Turner's Cause Of Death Revealed 1 Day After Her Passing\nKarma was originally released as part of Taylors albumMidnights in October 2022. Along with this new Karma remix, she also dropped a deluxe version of the album, which she called the Til Dawn edition. This included all 13 original songs, as well as the seven previously released3 A.M.tracks. Additionally, it has the Karma remix, a new version of Snow on the Beach with moreLana del Rey vocals, and  finally  the bonus song Hits Different.\nTaylor Swift and Ice Spice teamed up for a new remix to Karma. (Netflix / Kristin Callahan/Everett Collection)\nHits Different was originally released on Targets version ofMidnights as a special bonus track. Fans have been waiting for months to have the song available on streaming services, and now its here. On May 26, those who attend Taylors concert at MetLife Stadium can also buy a special edition version ofMidnights which includes a never-before-heard vault song called Youre Losing Me. Its unclear when or if this song will ever be released to streaming platforms\nTaylor is currently in the midst of her Eras Tour following her breakup fromJoe Alwyn earlier this year. Shes recently been linked to singerMatty Healy, who has been spotted at multiple Eras Tour shows, as well as out with Taylor in New York City and Nashville.\nMore About",
        snippet:
          "<b><b>Taylor Swift</b></b> teamed up with Ice Spice to release a new remix to her song 'Karma' on May 25. <b><b>Taylor Swift</b></b> has teamed up with one of the hottest new ...",
        keywords: "",
        language: "en",
        isSafe: true,
        datePublished: "2023-05-26T04:10:50",
        provider: {
          name: "hollywoodlife",
          favIcon: "",
          favIconBase64Encoding: "",
        },
        image: {
          url: "https://hollywoodlife.com/wp-content/uploads/2023/05/Taylor-Swift-Ice-Spice-Karma-Remix-EC-ftr.jpg",
          height: 0,
          width: 0,
          thumbnail: "",
          thumbnailHeight: 0,
          thumbnailWidth: 0,
          base64Encoding: "",
          name: null,
          title: null,
          provider: {
            name: "hollywoodlife",
            favIcon: "",
            favIconBase64Encoding: "",
          },
          imageWebSearchUrl: null,
          webpageUrl:
            "https://hollywoodlife.com/2023/05/26/taylor-swift-ice-spice-karma-remix/",
        },
      },
      {
        id: "4755856916011330641",
        title:
          "Taylor Swift Shares New Songs With Ice Spice and Lana Del Rey: Listen",
        url: "https://pitchfork.com/news/taylor-swift-shares-new-songs-with-ice-spice-and-lana-del-rey-listen/",
        description:
          "Both the Karma remix and a new version of Snow on the Beach appear on a new deluxe version of Midnights",
        body: "[Taylor Swift](https://pitchfork.com/artists/28495-taylor-swift/)s new deluxe version of [*Midnights*](https://pitchfork.com/reviews/albums/taylor-swift-midnights/) is out now. As [previously reported](https://pitchfork.com/news/taylor-swift-announces-new-midnights-deluxe-album-featuring-ice-spice-and-lana-del-rey/), it comes with two new songs: a new remix of Karma with [Ice Spice](https://pitchfork.com/artists/ice-spice/) and an extended version [Snow on the Beach](https://pitchfork.com/news/taylor-swift-reveals-new-album-midnights-full-tracklist/) featuring more contributions from [Lana Del Rey](https://pitchfork.com/artists/29855-lana-del-rey/).\n\nAccording to Del Rey, Swift originally asked her to sing the entire second verse of the original version of Snow on the Beach. My job as a feature on a big artists album is to make sure I help add to the production of the song, so I was more focused on the production, she [told *Billboard*](https://www.billboard.com/music/features/lana-del-rey-billboard-women-in-music-visionary-interview-1235259381/). She was very adamant that she wanted me to be on the album, and I really liked that song.\n\nIce Spice has had a breakout year following the success of Munch. She recently shared [Boys a Liar Pt 2](https://pitchfork.com/reviews/tracks/pink-pantheress-ice-spice-boys-a-liar-pt-2/) with PinkPantheress; shes also set to appear on the [*Barbie* soundtrack](https://pitchfork.com/news/the-new-barbie-soundtrack-features-tame-impala-haim-dua-lipa-charli-xcx-ice-spice-and-more/) alongside Nicki Minaj on Barbie World. Del Reys new album [*Did You Know That Theres a Tunnel Under Ocean Blvd*](https://pitchfork.com/reviews/albums/lana-del-rey-did-you-know-that-theres-a-tunnel-under-ocean-blvd/) came out earlier this year. Swift is still on her [Eras Tour](https://pitchfork.com/news/taylor-swift-adds-more-concerts-to-2023-tour/). Shes releasing [*Speak Now (Taylors Version)*](https://pitchfork.com/news/taylor-swift-announces-new-re-recorded-album-speak-now-taylors-version/) on July 7.\n\n\n\n[#video: https://www.youtube.com/embed/Hoi-PI8QpTU]\n\n\n\n[#video: https://www.youtube.com/embed/2CnUYMmEHrs]",
        snippet:
          "According to Del Rey, <b>Swift</b> originally asked her to sing the entire second verse of the original version of Snow on the Beach. My job as a feature on ...",
        keywords: "",
        language: "en",
        isSafe: true,
        datePublished: "2023-05-26T04:01:36",
        provider: {
          name: "pitchfork",
          favIcon: "",
          favIconBase64Encoding: "",
        },
        image: {
          url: "https://media.pitchfork.com/photos/6470071b282f657d45286ec0/16:9/w_1280,c_limit/taylor-swift-ice-spice.jpg",
          height: 0,
          width: 0,
          thumbnail: "",
          thumbnailHeight: 0,
          thumbnailWidth: 0,
          base64Encoding: "",
          name: null,
          title: null,
          provider: {
            name: "pitchfork",
            favIcon: "",
            favIconBase64Encoding: "",
          },
          imageWebSearchUrl: null,
          webpageUrl:
            "https://pitchfork.com/news/taylor-swift-shares-new-songs-with-ice-spice-and-lana-del-rey-listen/",
        },
      },
      {
        id: "4969055498064763465",
        title:
          "Taylor Swift, Matty Healy Have Kissed Multiple Times Amid Dating Rumors: Reports",
        url: "https://www.ibtimes.com/taylor-swift-matty-healy-have-kissed-multiple-times-amid-dating-rumors-reports-3695778",
        description:
          "Taylor Swift and Matty Healy were spotted kissing in separate instances.",
        body: 'Taylor Swift and Matty Healy fueled dating rumors as they were spotted kissing, according to reports.Swift has been linked to the 1975 musician weeks after her breakup with Joe Alwyn. The singers haven\'t addressed the real score between them, but several sources claimed to Us Weekly and People that they have seen them kissing each other in separate instances.An unnamed source told People that Swift and Healy have continued to spend time with each other. They were seen packing on the PDA at the members-only venue Zero Bond in downtown New York City Wednesday.Swift was taking a break from her tour, and she was joined by her pals Zo Kravitz, Margaret Qualley and her fianc, Jack Antonoff  one of Swift\'s longtime collaborators. An unnamed onlooker told the outlet, "Taylor and Matty were kissing."Another anonymous insider said that the "Anti-Hero" singer was also seen kissing Healy backstage during her concert. Healy has been spotted multiple times during her "The Eras Tour" in Nashville and Philadelphia."Matt is attending several of Taylor\'s shows, and when he\'s backstage, they\'ll kiss if she has time," the source alleged to Us Weekly, noting that they are "moving fast" and "spending a ton of time together."The rumored couple has been seen multiple times after they were photographed hanging out together and holding hands at various hotspots in the Big Apple."They really enjoy each other\'s company and want to spend as much time together as possible," the tipster continued, noting that they have reconnected after a "brief" fling years ago.Healy and the "Shake It Off" hitmaker were first linked in 2014 after she was spotted at a few of his band\'s concerts. They didn\'t address the rumors at the time, but Healy spoke about it two years later."I was, for a very short time, immersed in a celebrity world that I found confusing and scary. At that time, I had fears of being \'somebody\'s boyfriend\' ... before even being recognized for my music or presence as a person in my own right," he told Elle in 2016."I didn\'t even date Taylor, but the media\'s incessant and brutal obsession with her has meant that even a guy who DIDN\'T DATE HER has been so battered by their never-ending questions that he\'s inevitably said something that can be lifted and molded into something that resembles \'shade.\' It\'s really sad."Meanwhile, Swift told fans while performing in Foxborough, Massachusetts, on May 20 that she was happy with her life. She didn\'t confirm her romance with Healy and instead thanked her fans before singing her song "Questions...?" from her 2022 LP "Midnights.""I kind of feel like telling you, I don\'t know, I\'ve just never been this happy in my life in all aspects of my life ever before. And I just want to thank you for being a part of that," Swift said. "It\'s not just the tour. I just sort of feel like my life finally feels like it makes sense, so I thought I\'d play this song, which brings me a lot of happy memories."Healy mentioned in a previous interview with KROQ\'s "Klein/Ally Show" for Audacy\'s DTS Sound Space that he worked with Swift for a "Midnights" collab. However, their song didn\'t make it to the album "for reasons that are not to be criticized."',
        snippet:
          "<b><b>Taylor Swift</b></b> and Matty Healy were spotted kissing in separate instances. <b><b>Taylor Swift</b></b> and Matty Healy fueled dating rumors as they were spotted ...",
        keywords: "",
        language: "en",
        isSafe: true,
        datePublished: "2023-05-26T03:30:35",
        provider: {
          name: "ibtimes",
          favIcon: "",
          favIconBase64Encoding: "",
        },
        image: {
          url: "https://d.ibtimes.com/en/full/4415039/us-singer-taylor-swift-shown-here-2022-american-music-awards-best-song-this-years-grammys.jpg",
          height: 0,
          width: 0,
          thumbnail: "",
          thumbnailHeight: 0,
          thumbnailWidth: 0,
          base64Encoding: "",
          name: null,
          title: null,
          provider: {
            name: "ibtimes",
            favIcon: "",
            favIconBase64Encoding: "",
          },
          imageWebSearchUrl: null,
          webpageUrl:
            "https://www.ibtimes.com/taylor-swift-matty-healy-have-kissed-multiple-times-amid-dating-rumors-reports-3695778",
        },
      },
      {
        id: "5353421056524344836",
        title:
          "New Jersey governor names state sandwich in honor of upcoming Taylor Swift concert",
        url: "http://wfmz.com/news/area/berks/new-jersey-governor-names-state-sandwich-in-honor-of-upcoming-taylor-swift-concert/article_fdb96a98-fb82-11ed-a567-dbb1f6d03db5.html",
        description:
          'Berks County-native Taylor Swift is about to perform in New Jersey on her "Eras Tour," and she may be entering her sandwich era.',
        body: 'Copy article link\nSave\nBerks County-native Taylor Swift is about to perform in New Jersey on her "Eras Tour," and she may be entering her sandwich era.\nNew Jersey Gov. Phil Murphy tweeted a video welcoming Swift to the Garden State.\nHe brought up the perennial Jersey debate: Is it "pork roll" or "Taylor ham"?\nMurphy says Swift\'s arrival led him to settle it.\nHe declared the "Taylor Swift ham, egg, and cheese" the official state sandwich of New Jersey.\nWelcome to New Jersey. Weve been waiting for you, @taylorswift13.In honor of Taylor Swift bringing The Eras Tour to @MetLifeStadium, I am declaring the Taylor Swift Ham, Egg, and Cheese the official state sandwich.',
        snippet:
          "Berks County-native <b><b>Taylor Swift</b></b> is about to perform in New ... era. Copy article link Save Berks County-native <b><b>Taylor Swift</b></b> is about to perform in New ...",
        keywords: "",
        language: "en",
        isSafe: true,
        datePublished: "2023-05-26T03:30:00",
        provider: {
          name: "wfmz",
          favIcon: "",
          favIconBase64Encoding: "",
        },
        image: {
          url: "https://bloximages.newyork1.vip.townnews.com/wfmz.com/content/tncms/assets/v3/editorial/4/bf/4bf3dd15-833f-512e-b354-d117acad40b8/64703d3da38a9.image.jpg?crop=1280%2C672%2C0%2C23&amp;resize=1200%2C630&amp;order=crop%2Cresize",
          height: 0,
          width: 0,
          thumbnail: "",
          thumbnailHeight: 0,
          thumbnailWidth: 0,
          base64Encoding: "",
          name: null,
          title: null,
          provider: {
            name: "wfmz",
            favIcon: "",
            favIconBase64Encoding: "",
          },
          imageWebSearchUrl: null,
          webpageUrl:
            "http://wfmz.com/news/area/berks/new-jersey-governor-names-state-sandwich-in-honor-of-upcoming-taylor-swift-concert/article_fdb96a98-fb82-11ed-a567-dbb1f6d03db5.html",
        },
      },
      {
        id: "1234737816468625303",
        title: "MetLife Stadium Sends Warning to Taylor Swift Fans Who",
        url: "https://www.onenewspage.com/n/Entertainment/1zplp48dmf/MetLife-Stadium-Sends-Warning-to-Taylor-Swift-Fans.htm",
        description:
          "Taylor Swift is playing three shows just minutes away from New York City this weekend, but the stadium..  Entertainment  One News Page: Friday, 26 May 2023",
        body: "MetLife Stadium Sends Warning to Taylor Swift Fans Who Don't Have Tickets for New Jersey Shows\nPublished\n26 May 2023\nTaylor Swift is playing three shows just minutes away from New York City this weekend, but the stadium has a warning for fans. The 33-year-old singer will be bringing the Eras Tour to MetLife Stadium on Friday, Saturday, and Sunday this weekend and you can expect lots of fans from the Tri-State area to be [...]",
        snippet:
          "<b><b>Taylor Swift</b></b> is playing three shows just minutes away from New York City this weekend, but the stadium. Entertainment One News Page: Friday, 26 May ...",
        keywords: "",
        language: "en",
        isSafe: true,
        datePublished: "2023-05-26T02:43:58",
        provider: {
          name: "onenewspage",
          favIcon: "",
          favIconBase64Encoding: "",
        },
        image: {
          url: "https://cdn.newsserve.net/ONPglobe256.png",
          height: 0,
          width: 0,
          thumbnail: "",
          thumbnailHeight: 0,
          thumbnailWidth: 0,
          base64Encoding: "",
          name: null,
          title: null,
          provider: {
            name: "onenewspage",
            favIcon: "",
            favIconBase64Encoding: "",
          },
          imageWebSearchUrl: null,
          webpageUrl:
            "https://www.onenewspage.com/n/Entertainment/1zplp48dmf/MetLife-Stadium-Sends-Warning-to-Taylor-Swift-Fans.htm",
        },
      },
      {
        id: "2321722042409850619",
        title:
          "Why Taylor Swift's relationship with Matty Healy is controversial",
        url: "https://www.yahoo.com/entertainment/taylor-swift-matty-healy-ice-spice-relationship-controversy-fans-013339128.html",
        description:
          "Swift and longtime boyfriend Joe Alwyn's breakup was confirmed in April.",
        body: "Taylor Swift\n's love life has long been in the spotlight, but reports this month that she's dating the 1975's Matty Healy is especially raising some eyebrows, as is her surprise announcement that she'll collaborate with rapper Ice Spice on the deluxe version of her Midnights album.\nThe two stories are related. Here's a breakdown:\nIs Swift actually dating Healy?\nWhile it's unclear if Swift, whose breakup with longtime love Joe Alwyn became public last month, has coupled up with Healy, the two are at least spending time together. They've been seen together multiple times this month, once where they were reportedly kissing, and other times at her \"The Eras Tour\" stops, where he's even performed. Yahoo Entertainment has reached out to Swift's rep for comment.\nWhy are Swifties divided over Healy?\nTheir main issue is Healy's appearance on The Adam Friedland Show back in January, during which Healy and the two hosts, Friedland and Nick Mullen, laughed while speculating about the ethnicity of Ice Spice, who's actually both Nigerian and Dominican. Per the Los Angeles Times, Friedland and Mullen referred to Ice Spice  who's been at least friendly with Swift for years  both as an \"Inuit spice girl\" and a \"chubby Chinese lady.\" The co-hosts also mocked Chinese and Hawaiian accents, a bit that Healy seemed to enjoy. The problematic podcast episode was later pulled from both Apple and Spotify. That wasn't the only controversy Healy stirred up during the interview. He also joked about masturbating to a video of a woman \"getting, like, brutalized\" on Ghetto Gaggers, a porn website that mostly features Black women.\nMonths later, Healy somewhat apologized, admitting onstage during a performance he \"can take it too far sometimes in front of too many people.\" The singer added in April: \"I don't want Ice Spice to think I'm a d***. I love you, Ice Spice. I'm so sorry.\"\nStory continues\nSo whatever Swift and Healy's exact relationship is, some fans are upset and tweeting with the hashtag #SpeakUpNow, promoting a letter circulating the internet that calls for Swift to address the situation.\nI just canceled my @taylorswift13 Speak Now vinyl pre-order. Ive previously bought: lover, redtv, FLTV, (all 5) midnights vinyls, many (some shitty quality) shirts from TS. Not to mention two floor seats to Eras. I just dont feel comfortable giving her my $$$ now. #SpeakUpNow",
        snippet:
          "<b><b>Taylor Swift</b></b> 's love life has long been in the spotlight, but reports this month that she's dating the 1975's Matty Healy is especially raising some ...",
        keywords: "",
        language: "en",
        isSafe: false,
        datePublished: "2023-05-26T01:33:39",
        provider: {
          name: "yahoo",
          favIcon: "",
          favIconBase64Encoding: "",
        },
        image: {
          url: "https://s.yimg.com/ny/api/res/1.2/k9ZF3.UByfIysoViO9PX8w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2023-05/0f4107c0-fb57-11ed-bf7f-4eb1c34237cd",
          height: 0,
          width: 0,
          thumbnail: "",
          thumbnailHeight: 0,
          thumbnailWidth: 0,
          base64Encoding: "",
          name: null,
          title: null,
          provider: {
            name: "yahoo",
            favIcon: "",
            favIconBase64Encoding: "",
          },
          imageWebSearchUrl: null,
          webpageUrl:
            "https://www.yahoo.com/entertainment/taylor-swift-matty-healy-ice-spice-relationship-controversy-fans-013339128.html",
        },
      },
      {
        id: "8605268659456538977",
        title:
          "Taylor Swift fans without tickets warned no Taylor-gating by New Jersey police stadium",
        url: "https://www.wmmo.com/news/trending/taylor-swift-fans-without-tickets-warned-no-taylor-gating-by-new-jersey-police-stadium/LTMAAB3SVVE2XD43GK6DMLVRSE/",
        description:
          "Taylor Swift is expected to perform at MetLife Stadium Memorial Day weekend and due to safety concerns and large crowds, law enforcement as well as the stadium are asking fans to not come if they dont have tickets.",
        body: "Taylor Swift fans without tickets warned no Taylor-gating by New Jersey police, stadium\nExpand\nTaylor Swift fans without tickets warned no Taylor-gating by New Jersey police, stadium\nTaylor Swift is expected to perform at MetLife Stadium Memorial Day weekend and due to safety concerns and large crowds, law enforcement as well as the stadium are asking fans to not come if they dont have tickets.\n(Kevin Winter/Getty Images for TAS Rights Mana)\nBy\nJessica Goodman, Cox Media Group National Content Desk\nMay 25, 2023 at  8:18 pm EDT\nEAST RUTHERFORD, New Jersey  Taylor Swift is expected to perform at MetLife Stadium Memorial Day weekend and due to safety concerns and large crowds, law enforcement as well as the stadium are asking fans to not come if they dont have tickets.",
        snippet:
          "<b><b>Taylor Swift</b></b> is expected to perform at MetLife Stadium Memorial Day weekend and due to safety concerns and large crowds, law enforcement as well as ...",
        keywords: "",
        language: "en",
        isSafe: false,
        datePublished: "2023-05-26T01:03:18.212",
        provider: {
          name: "wmmo",
          favIcon: "",
          favIconBase64Encoding: "",
        },
        image: {
          url: "https://cmg-cmg-rd-20085-prod.cdn.arcpublishing.com/resizer/4R7OxkTa8qawfiUwOSD5IDQefr4=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/cmg/KWQFNRLDCRCQJJ6ZVWNM54B3QY.jpg",
          height: 0,
          width: 0,
          thumbnail: "",
          thumbnailHeight: 0,
          thumbnailWidth: 0,
          base64Encoding: "",
          name: null,
          title: null,
          provider: {
            name: "wmmo",
            favIcon: "",
            favIconBase64Encoding: "",
          },
          imageWebSearchUrl: null,
          webpageUrl:
            "https://www.wmmo.com/news/trending/taylor-swift-fans-without-tickets-warned-no-taylor-gating-by-new-jersey-police-stadium/LTMAAB3SVVE2XD43GK6DMLVRSE/",
        },
      },
      {
        id: "1626598033967017158",
        title:
          "'They Have More Hits Than Nick': Fans Clown Nick Cannon After He Claims Bruno Mars Has More Hits Than Beyonc",
        url: "https://atlantablackstar.com/2023/05/25/they-have-more-hits-than-nick-fans-clown-nick-cannon-after-he-claims-bruno-mars-has-more-hits-than-beyonce/",
        description:
          'Nick Cannon has his fans roasting the father of 12 after he claimed that "Uptown Funk" singer Bruno Mars has more hits than Beyonc. The host of "The',
        body: "Nick Cannon\nhas his fans roasting the father of 12 after he claimed that Uptown Funk singer Bruno Mars has more hits than Beyonc.\nThe host of The Masked Singer made the claim during a recent episode of his podcast The Daily Cannon on May 22.\nCannon noted that Mars was a fire performer and he would rather see him perform than go to a Beyonc show. However, after the Celebrity Prank Wars host claimed that Mars had more hit songs than Beyonc and Taylor Swift, his co-host Courtney Bee clapped back.\nNick Cannon posing after a concert. (Photo: @nickcannon/Instagram)\nHave you ever seen Bruno perform live? Fire, cuz he has his whole crew on stage with him, he said. And they be doing the little dances. It feels very Morris Day & the Time age.\nI could probably afford those tickets, joked co-host Mason Moussette.\nOpposed to what other kinda tickets? Cannon asked. Taylor Swift. Beyonc, Moussette replied.\nNo offense, but I would rather go to a Bruno Mars than a Beyonc or Taylor Swift  Who got more hits?\nBee promptly responded, Beyonc, to which Cannon replied with doubt by asking, Beyonc got more hits than Bruno Mars?\nBEYONCE, Bee reiterated, before naming off a host of the recording artists songs.\nIm a Beyonc fan, Cannon said, before Bee dared him to name a song from Mars. I still believe Bruno Mars actually has more hits.\nCannon shared a clip of their exchange on Twitter with the caption, Who has more HITS thoughis it Beyonce or Bruno Mars?!\nWho has more HITS thoughis it Beyonce or Bruno Mars?!  @dailycannonshow\nMay 22, 2023\nWhile Mars is an impressive artist with major hits, he has won 15 Grammy Awards out of 31 nominations compared to the Single Ladies singer who has 32 Grammy Awards out of 88 nominations.\nCritics wasted no time dragging Cannon after the clip was shared by The Shade Room on Instagram. Even fans who preferred to see Mars in concert over Beyonc disagreed with Cannon and conceded that she has more hits songs than the Just the Way You Are singer.\nHe cant even name all his kids, noted one fan. Do we really take him seriously?\nDont piss me off! And the glasses is making it worse.\nBruno Mars is fire, but they both got more hits than him. Bruno got 8 number 1s. Beyonce got 8 number 1s (not including her destiny child\n#1\n). Taylor for 9 number 1s. Bruno got 18 top 10 hits. Beyonce got 21 top 10 hits (not including her destiny child top 10s)Taylor got 40 top 10 hits. So wtf was nick cannon talking bout? He shouldve just left it at he prefer a Bruno concert.\nWell we know they have more hits than nick.\nCannon has 12-year-old twins MoroccanandMonroe with his ex-wife, singer\nAlyssa Scott\n. The couples son Zen tragically passed away from a brain tumor in 2021 when he was just five months old.\nThe busy dad later attempted to name all of his offspring during an interview on The Howard Stern Show. He named everyone in order, but left his daughter Onyx, who was born in September 2022, out of the mix.\nCannon explained that he came up with her middle name, Ice, during a separate interview with The Shade Room, where he spoke highly of her mother.\nWith LaNisha, who is a strong, Black woman and loves her chocolate-ness and all that, she had the name Onyx, recalled Cannon. And I was like, Im with it. Lets get it! \nAfter welcoming his 12th child, the former model-turned-actress opened up about removing herself from ",
        snippet:
          "... after the Celebrity Prank Wars host claimed that Mars had more hit songs than Beyonc and <b><b>Taylor Swift</b></b>, his co-host Courtney Bee clapped back.",
        keywords: "",
        language: "en",
        isSafe: false,
        datePublished: "2023-05-26T00:35:00",
        provider: {
          name: "atlantablackstar",
          favIcon: "",
          favIconBase64Encoding: "",
        },
        image: {
          url: "https://atlantablackstar.com/wp-content/uploads/2023/05/Collage-Maker-16-May-2023-12-38-PM-9532.jpg",
          height: 0,
          width: 0,
          thumbnail: "",
          thumbnailHeight: 0,
          thumbnailWidth: 0,
          base64Encoding: "",
          name: null,
          title: null,
          provider: {
            name: "atlantablackstar",
            favIcon: "",
            favIconBase64Encoding: "",
          },
          imageWebSearchUrl: null,
          webpageUrl:
            "https://atlantablackstar.com/2023/05/25/they-have-more-hits-than-nick-fans-clown-nick-cannon-after-he-claims-bruno-mars-has-more-hits-than-beyonce/",
        },
      },
    ],
  });

  // useEffect(() => {
  //   setLoading(true);
  //   if (query.trim() !== "") {
  //     const fetchData = async () => {
  //       const options = {
  //         method: "GET",
  //         url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI",
  //         params: {
  //           q: query,
  //           pageNumber: pageNumber.toString(),
  //           pageSize: "12",
  //           autoCorrect: "true",
  //           fromPublishedDate: "null",
  //           toPublishedDate: "null",
  //         },
  //         headers: {
  //           "X-RapidAPI-Key": process.env.REACT_APP_SEARCH_API_KEY,
  //           "X-RapidAPI-Host":
  //             "contextualwebsearch-websearch-v1.p.rapidapi.com",
  //         },
  //       };

  //       try {
  //         const response = await axios.request(options);
  //         console.log(response.data);
  //         setResponseData(response.data);
  //         setLoading(false);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     fetchData();
  //   }
  // }, [query, pageNumber]);

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search-news/${e.target.elements.search.value}`);
  }

  function getFaviconURL(url) {
    return `http://www.google.com/s2/favicons?domain=${url}`;
  }
  return (
    <div className="searchWebContainer">
      <div className="searchBackground">
        <p className="searchIdentifier">News Search</p>
        <form className="searchWebForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            autoComplete="off"
            className="searchFieldSmall"
          />
          <button type="submit" className="searchButtonSmall">
            Search
          </button>
        </form>
      </div>
      {loading === true ? (
        <div className="loaderContainer">
          <Triangle
            height="300px"
            width="300px"
            color="#a81010"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <p className="resultsCount">
            {responseData.totalCount} results for "{searchQuery}".
          </p>
          <div className="newsResults">
            {responseData.value &&
              responseData.value.map((item) => (
                <div className="newsStoryContainer">
                  <div className="newsImgContainer">
                    <img
                      src={item.image.url}
                      alt={item.title}
                      className="newsImg"
                    />
                  </div>
                  <a href={item.url} className="newsTitle">
                    {item.title}
                  </a>
                  <p className="date">{item.datePublished}</p>
                  <p className="authorProvided">{item.provider.name}</p>
                  <p className="newsDescription">{item.description}</p>
                  <a href={item.url} className="newsLink">
                    Read More
                  </a>
                </div>
              ))}
          </div>
          <div className="pageBreadcrumbs">
            {pageNumber < 10
              ? Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setPageNumber(i);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={i === pageNumber ? "activeButton" : "breadCrumb"}
                  >
                    {i}
                  </button>
                ))
              : Array.from({ length: 11 }).map((_, i) => {
                  const num = pageNumber - 5 + i;
                  return (
                    <button
                      key={num}
                      onClick={() => {
                        setPageNumber(num);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      disabled={num < 0} // Optional: Disable buttons for negative numbers
                      className={
                        num === pageNumber ? "activeButton" : "breadCrumb"
                      }
                    >
                      {num}
                    </button>
                  );
                })}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchNews;
