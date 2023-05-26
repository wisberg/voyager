import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Triangle } from "react-loader-spinner";
import "../style/searchweb.css";

const SearchWeb = () => {
  const navigate = useNavigate();
  const [searchQuery, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  useEffect(() => {
    setQuery(query);
  }, [query]);

  const [pageNumber, setPageNumber] = useState(1);
  const [responseData, setResponseData] = useState({});
  //DUMMY ARRAY
  //   _type: "all",
  //   didUMean: "",
  //   totalCount: 2034,
  //   relatedSearch: [
  //     "<b><b>taylor swift</b> video</b>",
  //     "<b><b>taylor swift</b> 000</b>",
  //     "<b><b>taylor swift</b> homepage</b>",
  //     "<b><b>taylor swift</b> web</b>",
  //     "<b>music <b>taylor swift</b></b>",
  //     "<b><b>taylor swift</b> news</b>",
  //     "<b><b>taylor swift</b> instagram</b>",
  //     "<b><b>taylor swift</b> online</b>",
  //     "<b>watch <b>taylor swift</b></b>",
  //     "<b><b>taylor swift</b> scooter braun</b>",
  //     "<b>new york <b>taylor swift</b></b>",
  //     "<b>lyrics <b>taylor swift</b></b>",
  //   ],
  //   value: [
  //     {
  //       id: "8497428944409865626",
  //       title: "Taylor Swift - Official Website",
  //       url: "https://www.taylorswift.com/",
  //       description:
  //         "The Official Website of Taylor Swift - Lover Album Out Now! Festival & Concert Details, Ticket Information, Videos, Merchandise & More",
  //       body: "You Need To Calm Down\nDkk9gvTmCXY\nYou Need To Calm Down (Lyric Video)\nGWtfOHBF1_w\n(feat. Brendon Urie of Panic! At The Disco)\nFuXNumBwDOM\nTaylor Swift City of Lover Concert - Sunday, May 17 on ABC\nVlyLr1KXN8Q\n2020 Concert and Festival Details\nFighting COVID-19 is an unprecedented challenge for our global community and the safety and wellbeing of fans should always be the top priority.  Health organizations and governments around the world have strongly discouraged large public gatherings for an undetermined period of time. With many events throughout the world already cancelled, and upon direction from health officials in an effort to keep fans safe and help prevent the spread of COVID-19, sadly the decision has been made to cancel all Taylor Swift live appearances and performances this year.\nThe U.S. and Brazil shows will be rescheduled to take place in 2021, with dates to be announced later this year. Tickets held for each of those shows will transfer to a new show date without action on the part of ticket holders.\nFor those who desire refunds for tickets purchased for the U.S. Lover Fest shows, they will be available starting May 1st subject to Ticketmaster terms. Watch for an email from Ticketmaster with instructions on how to request one. For currently available information on all other performance dates, please click the information button under each event below. Thank you so much for understanding. We look forward to seeing you all, happy and healthy, in the future.\nJune 20, 2020",
  //       snippet:
  //         "The Official Website of <b><b>Taylor Swift</b></b>. Lover Album Out Now! Festival & Concert Details, Ticket Information, Videos, Merchandise & More.",
  //       keywords: "",
  //       language: "en",
  //       isSafe: true,
  //       datePublished: "0001-01-01T00:00:00",
  //       provider: {
  //         name: "taylorswift",
  //         favIcon: "",
  //         favIconBase64Encoding: "",
  //       },
  //       image: {
  //         url: "http://cache.umusic.com/_sites/_halo/taylorswift/images/meta-image.jpg",
  //         height: 0,
  //         width: 0,
  //         thumbnail: "",
  //         thumbnailHeight: 0,
  //         thumbnailWidth: 0,
  //         base64Encoding: "",
  //         name: null,
  //         title: null,
  //         provider: {
  //           name: "taylorswift",
  //           favIcon: "",
  //           favIconBase64Encoding: "",
  //         },
  //         imageWebSearchUrl: null,
  //         webpageUrl: "https://www.taylorswift.com/",
  //       },
  //     },
  //     {
  //       id: "4112940645721220964",
  //       title:
  //         "Taylor Swift Web | Your Online Resource For Everything Taylor Swift | Taylor Swift Web | Your Online Resource For Everything Taylor Swift -",
  //       url: "http://taylorswiftweb.net",
  //       description: "",
  //       body: "",
  //       snippet: "",
  //       keywords: "",
  //       language: "en",
  //       isSafe: true,
  //       datePublished: "0001-01-01T00:00:00",
  //       provider: {
  //         name: "taylorswiftweb",
  //         favIcon: "",
  //         favIconBase64Encoding: "",
  //       },
  //       image: {
  //         url: "",
  //         height: 0,
  //         width: 0,
  //         thumbnail: "",
  //         thumbnailHeight: 0,
  //         thumbnailWidth: 0,
  //         base64Encoding: "",
  //         name: null,
  //         title: null,
  //         provider: {
  //           name: "taylorswiftweb",
  //           favIcon: "",
  //           favIconBase64Encoding: "",
  //         },
  //         imageWebSearchUrl: null,
  //         webpageUrl: "http://taylorswiftweb.net",
  //       },
  //     },
  //     {
  //       id: "1537799120361861208",
  //       title: "Taylor Swift - Wikipedia",
  //       url: "https://en.wikipedia.org/wiki/Taylor_Swift",
  //       description:
  //         "Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. One of the leading contemporary recording artists, she is known for narrative songs about her personal life, which have received widespread media coverage.",
  //       body: "",
  //       snippet:
  //         "<b>Taylor</b> Alison <b>Swift</b> (born December 13, 1989) is an American singer-songwriter. One of the leading contemporary recording artists, she is known for narrative songs about her personal life, which have received widespread ...",
  //       keywords: "",
  //       language: "en",
  //       isSafe: true,
  //       datePublished: "0001-01-01T00:00:00",
  //       provider: {
  //         name: "wikipedia",
  //         favIcon: "",
  //         favIconBase64Encoding: "",
  //       },
  //       image: {
  //         url: "",
  //         height: 0,
  //         width: 0,
  //         thumbnail: "",
  //         thumbnailHeight: 0,
  //         thumbnailWidth: 0,
  //         base64Encoding: "",
  //         name: null,
  //         title: null,
  //         provider: {
  //           name: "wikipedia",
  //           favIcon: "",
  //           favIconBase64Encoding: "",
  //         },
  //         imageWebSearchUrl: null,
  //         webpageUrl: "https://en.wikipedia.org/wiki/Taylor_Swift",
  //       },
  //     },
  //     {
  //       id: "6664594276950087357",
  //       title: "Taylor Swift (@taylorswift)  Instagram photos and videos",
  //       url: "http://www.instagram.com/taylorswift",
  //       description:
  //         "109.1m Followers, 0 Following, 174 Posts - See Instagram photos and videos from Taylor Swift (@taylorswift)",
  //       body: "",
  //       snippet:
  //         "See Instagram photos and videos from <b><b>Taylor Swift</b></b> (@taylorswift).",
  //       keywords: "",
  //       language: "en",
  //       isSafe: true,
  //       datePublished: "0001-01-01T00:00:00",
  //       provider: {
  //         name: "instagram",
  //         favIcon: "",
  //         favIconBase64Encoding: "",
  //       },
  //       image: {
  //         url: "https://scontent-frx5-1.cdninstagram.com/vp/487ba97d44e4bf7c8f8dca9af5022fc4/5BBE3DBF/t51.2885-19/s150x150/20969376_112654676087652_1378856425261891584_a.jpg",
  //         height: 0,
  //         width: 0,
  //         thumbnail: "",
  //         thumbnailHeight: 0,
  //         thumbnailWidth: 0,
  //         base64Encoding: "",
  //         name: null,
  //         title: null,
  //         provider: {
  //           name: "instagram",
  //           favIcon: "",
  //           favIconBase64Encoding: "",
  //         },
  //         imageWebSearchUrl: null,
  //         webpageUrl: "http://www.instagram.com/taylorswift",
  //       },
  //     },
  //     {
  //       id: "5455568542743523618",
  //       title: "Taylor Swift - The New York Times",
  //       url: "http://nytimes.com/spotlight/taylor-swift",
  //       description: "Music",
  //       body: "",
  //       snippet: "",
  //       keywords: "",
  //       language: "en",
  //       isSafe: true,
  //       datePublished: "0001-01-01T00:00:00",
  //       provider: {
  //         name: "nytimes",
  //         favIcon: "",
  //         favIconBase64Encoding: "",
  //       },
  //       image: {
  //         url: "https://static01.nyt.com/newsgraphics/images/icons/defaultPromoCrop.png",
  //         height: 0,
  //         width: 0,
  //         thumbnail: "",
  //         thumbnailHeight: 0,
  //         thumbnailWidth: 0,
  //         base64Encoding: "",
  //         name: null,
  //         title: null,
  //         provider: {
  //           name: "nytimes",
  //           favIcon: "",
  //           favIconBase64Encoding: "",
  //         },
  //         imageWebSearchUrl: null,
  //         webpageUrl: "http://nytimes.com/spotlight/taylor-swift",
  //       },
  //     },
  //     {
  //       id: "4164205310287263851",
  //       title: "Taylor Swift | Forbes",
  //       url: "https://www.forbes.com/profile/taylor-swift/",
  //       description:
  //         "Taylor Swift released new album Lover in 2019, the first in her new deal with Universal's Republic Records. The multiplatinum effort helped Swift move more than 4 million units during between June 2019 and Jue 2020.",
  //       body: 'Photo by Matt Winkelmeyer/Getty Images for Billboard\n2020 Celebrity 100 Earnings\n$63.5M\nas of 6/4/20\nTaylor Swift released new album "Lover" in 2019, the first in her new deal with Universal\'s Republic Records.\nThe multiplatinum effort helped Swift move more than 4 million units during between June 2019 and Jue 2020.\nFollowing the Covid-19 outbreak, Swift canceled all her 2020 tour dates, with plans to reschedule some for 2021.\nSwift has leveraged her fame to encourage political action, asking fans to support the Equality Act with her 2019 single "You Need To Calm Down."\nOn forbes lists',
  //       snippet:
  //         "<b><b>Taylor Swift</b></b> released new album Lover in 2019, the first in her new deal with Universal's Republic Records. The multiplatinum effort helped <b>Swift</b> move more than 4 million units during between June 2019 and Jue 2020.",
  //       keywords: "",
  //       language: "en",
  //       isSafe: true,
  //       datePublished: "0001-01-01T00:00:00",
  //       provider: {
  //         name: "forbes",
  //         favIcon: "",
  //         favIconBase64Encoding: "",
  //       },
  //       image: {
  //         url: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed56484570be8000647428e%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D414%26cropX2%3D1670%26cropY1%3D0%26cropY2%3D1255",
  //         height: 0,
  //         width: 0,
  //         thumbnail: "",
  //         thumbnailHeight: 0,
  //         thumbnailWidth: 0,
  //         base64Encoding: "",
  //         name: null,
  //         title: null,
  //         provider: {
  //           name: "forbes",
  //           favIcon: "",
  //           favIconBase64Encoding: "",
  //         },
  //         imageWebSearchUrl: null,
  //         webpageUrl: "https://www.forbes.com/profile/taylor-swift/",
  //       },
  //     },
  //     {
  //       id: "2234675480925433846",
  //       title: "Taylor Swift GIFs - Find & Share on GIPHY",
  //       url: "https://giphy.com/taylorswift",
  //       description: "The old Taylor can't come to the phone right now.",
  //       body: "",
  //       snippet: "The old <b>Taylor</b> can't come to the phone right now.",
  //       keywords: "",
  //       language: "en",
  //       isSafe: true,
  //       datePublished: "0001-01-01T00:00:00",
  //       provider: {
  //         name: "giphy",
  //         favIcon: "",
  //         favIconBase64Encoding: "",
  //       },
  //       image: {
  //         url: "https://media.giphy.com/media/WUmXyh5UfrEOLm5Zt0/giphy.gif",
  //         height: 0,
  //         width: 0,
  //         thumbnail: "",
  //         thumbnailHeight: 0,
  //         thumbnailWidth: 0,
  //         base64Encoding: "",
  //         name: null,
  //         title: null,
  //         provider: {
  //           name: "giphy",
  //           favIcon: "",
  //           favIconBase64Encoding: "",
  //         },
  //         imageWebSearchUrl: null,
  //         webpageUrl: "https://giphy.com/taylorswift",
  //       },
  //     },
  //     {
  //       id: "1011437931881300829",
  //       title: "Taylor Swift | tema | CNN",
  //       url: "https://cnnespanol.cnn.com/tag/taylor-swift/",
  //       description: "| Taylor Swift | CNN",
  //       body: " 2021 Cable News Network.\nA Warner Media Company.",
  //       snippet: "2021 Cable News Network.\nA Warner Media Company.",
  //       keywords: "",
  //       language: "en",
  //       isSafe: true,
  //       datePublished: "0001-01-01T00:00:00",
  //       provider: {
  //         name: "cnn",
  //         favIcon: "",
  //         favIconBase64Encoding: "",
  //       },
  //       image: {
  //         url: "https://cnnespanol.cnn.com/wp-content/uploads/2017/05/cnne-logo-video-bg.png",
  //         height: 0,
  //         width: 0,
  //         thumbnail: "",
  //         thumbnailHeight: 0,
  //         thumbnailWidth: 0,
  //         base64Encoding: "",
  //         name: null,
  //         title: null,
  //         provider: {
  //           name: "cnn",
  //           favIcon: "",
  //           favIconBase64Encoding: "",
  //         },
  //         imageWebSearchUrl: null,
  //         webpageUrl: "https://cnnespanol.cnn.com/tag/taylor-swift/",
  //       },
  //     },
  //     {
  //       id: "3500004093628964548",
  //       title: "Taylor Swift | Time",
  //       url: "https://time.com/tag/taylor-swift/",
  //       description: "Read the latest stories about Taylor Swift on Time",
  //       body: "Is Terrible, But Its Also Kind of Great\nTom Hoopers star-studded musical adaptation is sometimes tacky, sometimes ...\nTom Hoopers star-studded musical adaptation is sometimes tacky, sometimes overworked, and yet often strangely beautiful\nGetting Into the Holiday Spirit, Taylor Swift Releases a New Christmas Song  With Fans Identifying a Possible 'Easter Egg' Moment Too\nThe video for Christmas Tree Farm may hide a secret\nThe video for Christmas Tree Farm may hide a secret\n'My Mind Is Alive.' Taylor Swift Got Hilariously Weird About Bananas in This Post-Lasik Surgery Home Video\nCrying over a banana is very normal behavior.\nCrying over a banana is very normal behavior.\nTaylor Swift Used Her 2019 VMAs Speech to Advocate for the Equality Act. Here's What the Bill Would Do\n\"You voting for the video means that you want a world where we're all treat...\n\"You voting for the video means that you want a world where we're all treated equally under the law\"\nLet's Discuss the Lyrics to Every Song on Taylor Swift's Lover\nA song-by-song look at 'Lover'\nA song-by-song look at 'Lover'\nYour Guide to the Many, Many References Taylor Swift Drops in the\nLover\nAlbum\nAt long last, Lover is here. Taylor Swift's seventh studio album  clocking...\nAt long last, Lover is here. Taylor Swift's seventh studio album  clocking in at a meaty 18 tracks, her longest album yet  arrived Aug. 23 to satisfy her legion of fans and give...\nYou Probably Missed This Subtle Clue Taylor Swift Dropped for the Fans With Her Pin\nThe singer gave fans a subtle hint about her new album.\nThe singer gave fans a subtle hint about her new album.\nRelax, Read,",
  //       snippet:
  //         "Read the latest stories about <b><b>Taylor Swift</b></b> on Time. Is Terrible, But Its Also Kind of Great Tom Hoopers star-studded musical adaptation is sometimes tacky, sometimes .",
  //       keywords: "",
  //       language: "en",
  //       isSafe: true,
  //       datePublished: "0001-01-01T00:00:00",
  //       provider: {
  //         name: "time",
  //         favIcon: "",
  //         favIconBase64Encoding: "",
  //       },
  //       image: {
  //         url: "http://time.com",
  //         height: 0,
  //         width: 0,
  //         thumbnail: "",
  //         thumbnailHeight: 0,
  //         thumbnailWidth: 0,
  //         base64Encoding: "",
  //         name: null,
  //         title: null,
  //         provider: {
  //           name: "time",
  //           favIcon: "",
  //           favIconBase64Encoding: "",
  //         },
  //         imageWebSearchUrl: null,
  //         webpageUrl: "https://time.com/tag/taylor-swift/",
  //       },
  //     },
  //     {
  //       id: "9138006481466849526",
  //       title:
  //         "Taylor Swift News on her Songs and Instagram Updates | Daily Mail Online",
  //       url: "http://dailymail.co.uk/tvshowbiz/taylor_swift/index.html",
  //       description:
  //         "Find the latest news on Taylor Swift including her new song Look What You Made Me Do and album Reputation plus more on her Instagram, Twitter and boyfriend updates.",
  //       body: "\nLATEST TAYLOR SWIFT NEWS ON HER SONGS AND INSTAGRAM UPDATES\n'Happy Juneteenth, y'all!' Lizzo leads stars commemorating the ending of slavery in the US... as Taylor Swift pledges it should be a national holiday\n20/06/20 06:39\nLizzo led the stars this Friday celebrating Juneteenth, a holiday in honor of the freeing of American slaves after the Civil War. On June 19, 1865, Texas became the last state in the defeated Confederacy where the Emancipation Proclamation was officially announced by the Union. To mark the occasion Lizzo, 32, who grew up partly in Texas, announced a charity sweepstakes where prizes included concert tickets and a video chat with her.",
  //       snippet:
  //         "Find the latest news on <b><b>Taylor Swift</b></b> including her new song Look What You Made Me ... plus more on her Instagram, Twitter and boyfriend updates. LATEST TAYLOR SWIFT NEWS ON HER SONGS AND INSTAGRAM UPDATES 'Happy Juneteenth, ...",
  //       keywords: "",
  //       language: "en",
  //       isSafe: true,
  //       datePublished: "0001-01-01T00:00:00",
  //       provider: {
  //         name: "dailymail",
  //         favIcon: "",
  //         favIconBase64Encoding: "",
  //       },
  //       image: {
  //         url: "https://i.dailymail.co.uk/i/social/img_mol-logo_50x50.png",
  //         height: 0,
  //         width: 0,
  //         thumbnail: "",
  //         thumbnailHeight: 0,
  //         thumbnailWidth: 0,
  //         base64Encoding: "",
  //         name: null,
  //         title: null,
  //         provider: {
  //           name: "dailymail",
  //           favIcon: "",
  //           favIconBase64Encoding: "",
  //         },
  //         imageWebSearchUrl: null,
  //         webpageUrl:
  //           "http://dailymail.co.uk/tvshowbiz/taylor_swift/index.html",
  //       },
  //     },
  //   ],
  // });

  useEffect(() => {
    setLoading(true);
    if (query.trim() !== "") {
      const fetchData = async () => {
        const options = {
          method: "GET",
          url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI",
          params: {
            q: query,
            pageNumber: pageNumber.toString(),
            pageSize: "10",
            autoCorrect: "true",
          },
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_SEARCH_API_KEY,
            "X-RapidAPI-Host":
              "contextualwebsearch-websearch-v1.p.rapidapi.com",
          },
        };

        try {
          const response = await axios.request(options);
          console.log(response.data);
          setResponseData(response.data);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [query, pageNumber]);

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search-web/${e.target.elements.search.value}`);
  }
  function getFaviconURL(url) {
    return `http://www.google.com/s2/favicons?domain=${url}`;
  }

  return (
    <div className="searchWebContainer">
      <div className="searchBackground">
        <p className="searchIdentifier">Web Search</p>
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
      <div className="otherLinks">
        <Link className="otherLink" to={`/`}>
          Home
        </Link>
        <Link className="otherLink" to={`/search-images/${query}`}>
          Images
        </Link>
        <Link className="otherLink" to={`/search-news/${query}`}>
          News
        </Link>
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
        <div className="results">
          {responseData.didUMean !== "" ? (
            <div className="didYouMeanContainer">
              <Link
                className="didYouMean"
                to={`/search-web/${responseData.didUMean}`}
              >
                Did you mean "{responseData.didUMean}"?
              </Link>
            </div>
          ) : (
            <></>
          )}
          <div className="newsPage">
            <div className="news">
              <p className="resultsCount">
                {responseData.totalCount} results for "{searchQuery}".
              </p>
              {responseData.value &&
                responseData.value.map((item) => (
                  <div className="resultContainer" key={item.id}>
                    <div className="metaContainer">
                      <div className="imgContainer">
                        <img
                          src={getFaviconURL(item.image.webpageUrl)}
                          alt={item.image.name}
                          className="resultFavicon"
                        />
                      </div>
                      <div className="titleURLContainer">
                        <p className="providerURL">{item.url}</p>
                        <p className="providerName">{item.provider.name}</p>
                      </div>
                    </div>
                    <a className="searchTitle" href={item.url}>
                      {item.title}
                    </a>

                    <p className="resultDescription">{item.description}</p>
                  </div>
                ))}
            </div>
            <div className="imagePreview">
              <Link className="resultsCount2" to={`/search-images/${query}`}>
                See image results for "{searchQuery}".
              </Link>
              {responseData && responseData.value && (
                <div className="imagesPrev">
                  {(() => {
                    let count = 0; // Initialize count variable
                    return responseData.value.map((item) => {
                      if (item.image.url !== "" && count < 5) {
                        count++; // Increment count for valid URLs
                        return (
                          <img
                            key={item.url}
                            className="imagePrev"
                            src={item.image.url}
                          />
                        );
                      }
                      return null; // Render null for items that don't meet the condition
                    });
                  })()}
                </div>
              )}
            </div>
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
        </div>
      )}
    </div>
  );
};

export default SearchWeb;
