import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Triangle } from "react-loader-spinner";
import "../style/searchimages.css";

const SearchImages = () => {
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
  //   _type: "images",
  //   totalCount: 1027,
  //   value: [
  //     {
  //       url: "https://androidcommunity.com/wp-content/uploads/2020/06/hey.jpg",
  //       height: 923,
  //       width: 1640,
  //       thumbnail:
  //         "https://rapidapi.usearch.com/api/thumbnail/get?value=4205916282886992437",
  //       thumbnailHeight: 172,
  //       thumbnailWidth: 305,
  //       base64Encoding: null,
  //       name: "",
  //       title: "hey | Android Community",
  //       provider: {
  //         name: "androidcommunity",
  //         favIcon: "",
  //         favIconBase64Encoding: "",
  //       },
  //       imageWebSearchUrl: "https://usearch.com/search/hey/images",
  //       webpageUrl:
  //         "https://androidcommunity.com/hey-email-app-from-basecamp-creators-now-available-for-trial-20200617/hey/",
  //     },
  //     {
  //       url: "https://filmshortage.com/wp-content/uploads/2020/09/shortpicks-hey.jpg",
  //       height: 450,
  //       width: 800,
  //       thumbnail:
  //         "https://rapidapi.usearch.com/api/thumbnail/get?value=3351954802133805254",
  //       thumbnailHeight: 168,
  //       thumbnailWidth: 298,
  //       base64Encoding: null,
  //       name: "",
  //       title: "Hey! | Comedy // Daily Short Pick",
  //       provider: {
  //         name: "filmshortage",
  //         favIcon: "",
  //         favIconBase64Encoding: "",
  //       },
  //       imageWebSearchUrl: "https://usearch.com/search/hey/images",
  //       webpageUrl: "https://filmshortage.com/dailyshortpicks/hey/",
  //     },
  //     {
  //       url: "http://cdn.shopify.com/s/files/1/0034/2668/0896/products/MFT_CS563_Hey_Preview_grande.jpg?v=1617813259",
  //       height: 600,
  //       width: 568,
  //       thumbnail:
  //         "https://rapidapi.usearch.com/api/thumbnail/get?value=5580169592089963896",
  //       thumbnailHeight: 300,
  //       thumbnailWidth: 284,
  //       base64Encoding: null,
  //       name: "",
  //       title: "Hey  MFT Stamps",
  //       provider: {
  //         name: "shopify",
  //         favIcon: "",
  //         favIconBase64Encoding: "",
  //       },
  //       imageWebSearchUrl: "https://usearch.com/search/hey/images",
  //       webpageUrl: "https://www.mftstamps.com/products/hey",
  //     },
  //     {
  //       url: "https://uggscanadaugg.ca/wp-content/uploads/2021/07/Comma-after-Hey-—-The-Ultimate-Guide.jpeg",
  //       height: 720,
  //       width: 1280,
  //       thumbnail:
  //         "https://rapidapi.usearch.com/api/thumbnail/get?value=4939525884818441923",
  //       thumbnailHeight: 180,
  //       thumbnailWidth: 320,
  //       base64Encoding: null,
  //       name: "",
  //       title: "Hey Archives ~ Uggs Canada Ugg",
  //       provider: {
  //         name: "uggscanadaugg",
  //         favIcon: "",
  //         favIconBase64Encoding: "",
  //       },
  //       imageWebSearchUrl: "https://usearch.com/search/hey/images",
  //       webpageUrl: "https://uggscanadaugg.ca/tag/hey/",
  //     },
  //     {
  //       url: "https://mb.com.ph/wp-content/uploads/2021/03/Hey.png",
  //       height: 641,
  //       width: 1664,
  //       thumbnail:
  //         "https://rapidapi.usearch.com/api/thumbnail/get?value=6465652982140632992",
  //       thumbnailHeight: 160,
  //       thumbnailWidth: 415,
  //       base64Encoding: null,
  //       name: "",
  //       title: "Hey email!  Manila Bulletin",
  //       provider: {
  //         name: "mb",
  //         favIcon: "",
  //         favIconBase64Encoding: "",
  //       },
  //       imageWebSearchUrl: "https://usearch.com/search/hey/images",
  //       webpageUrl: "https://mb.com.ph/2021/03/26/hey-email/",
  //     },
  //     {
  //       url: "https://i0.wp.com/thekeesh.com/wp-content/uploads/2021/01/Hey_image_2.jpeg?fit=1200%2C803&#038;ssl=1",
  //       height: 803,
  //       width: 1200,
  //       thumbnail:
  //         "https://rapidapi.usearch.com/api/thumbnail/get?value=6687252033505683806",
  //       thumbnailHeight: 150,
  //       thumbnailWidth: 224,
  //       base64Encoding: null,
  //       name: "",
  //       title: "Review of Hey.com Email  thekeesh.com",
  //       provider: {
  //         name: "wp",
  //         favIcon: "",
  //         favIconBase64Encoding: "",
  //       },
  //       imageWebSearchUrl: "https://usearch.com/search/hey/images",
  //       webpageUrl: "https://thekeesh.com/2021/01/review-of-hey-com-email/",
  //     },
  //     {
  //       url: "http://cdn.shopify.com/s/files/1/0250/7368/0438/products/hey-bear-sherpa-hoodie-from-california-product-type-serengetee_1200x630.jpg?v=1605902520",
  //       height: 630,
  //       width: 525,
  //       thumbnail:
  //         "https://rapidapi.usearch.com/api/thumbnail/get?value=8557379683406377411",
  //       thumbnailHeight: 314,
  //       thumbnailWidth: 262,
  //       base64Encoding: null,
  //       name: "",
  //       title: "Hey Bear Sherpa Hoodie From California",
  //       provider: {
  //         name: "shopify",
  //         favIcon: "",
  //         favIconBase64Encoding: "",
  //       },
  //       imageWebSearchUrl: "https://usearch.com/search/hey/images",
  //       webpageUrl:
  //         "https://www.serengetee.com/products/hey-bear-sherpa-hoodie-from-california",
  //     },
  //     {
  //       url: "https://memefort.com/wp-content/uploads/2020/09/Hey_Guys8769_b.jpg",
  //       height: 225,
  //       width: 225,
  //       thumbnail:
  //         "https://rapidapi.usearch.com/api/thumbnail/get?value=9104746061305172155",
  //       thumbnailHeight: 196,
  //       thumbnailWidth: 196,
  //       base64Encoding: null,
  //       name: "",
  //       title: "Hey Guys - Meme Fort",
  //       provider: {
  //         name: "memefort",
  //         favIcon: "",
  //         favIconBase64Encoding: "",
  //       },
  //       imageWebSearchUrl: "https://usearch.com/search/hey/images",
  //       webpageUrl: "https://memefort.com/animals/86089/hey-guys-2/",
  //     },
  //     {
  //       url: "https://img.izismile.com/img/img13/20200827/video/hey_guys_im_just_looking_for_some_fish_400x300_01.jpg",
  //       height: 480,
  //       width: 640,
  //       thumbnail:
  //         "https://rapidapi.usearch.com/api/thumbnail/get?value=1692386349728165378",
  //       thumbnailHeight: 135,
  //       thumbnailWidth: 180,
  //       base64Encoding: null,
  //       name: "",
  //       title:
  //         "Hey Guys, Im Just Looking For Some Fish!  (VIDEO) - Izismile.com",
  //       provider: {
  //         name: "izismile",
  //         favIcon: "",
  //         favIconBase64Encoding: "",
  //       },
  //       imageWebSearchUrl: "https://usearch.com/search/hey/images",
  //       webpageUrl:
  //         "https://izismile.com/2020/08/27/hey_guys_im_just_looking_for_some_fish_video.html",
  //     },
  //     {
  //       url: "https://blog.vrypan.net/2020/07/01/hey-does-not-support-imap-and-thats-its-most-important-feature/hey_imbox.png",
  //       height: 1125,
  //       width: 2000,
  //       thumbnail:
  //         "https://rapidapi.usearch.com/api/thumbnail/get?value=8478747638975470056",
  //       thumbnailHeight: 421,
  //       thumbnailWidth: 748,
  //       base64Encoding: null,
  //       name: "",
  //       title:
  //         "HEY does not support IMAP and that's its most important feature. - blog.vrypan.net",
  //       provider: {
  //         name: "vrypan",
  //         favIcon: "",
  //         favIconBase64Encoding: "",
  //       },
  //       imageWebSearchUrl: "https://usearch.com/search/hey/images",
  //       webpageUrl:
  //         "http://blog.vrypan.net/2020/07/01/hey-does-not-support-imap-and-thats-its-most-important-feature/",
  //     },
  //   ],
  // });

  useEffect(() => {
    setLoading(true);
    if (query.trim() !== "") {
      const fetchData = async () => {
        const options = {
          method: "GET",
          url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI",
          params: {
            q: query,
            pageNumber: pageNumber.toString(),
            pageSize: "20",
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
    navigate(`/search-images/${e.target.elements.search.value}`);
  }

  function getFaviconURL(url) {
    return `http://www.google.com/s2/favicons?domain=${url}`;
  }

  return (
    <div className="searchWebContainer">
      <div className="searchBackground">
        <p className="searchIdentifier">Image Search</p>
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
        <Link className="otherLink" to={`/search-web/${query}`}>
          Web
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
        <>
          <p className="resultsCount">
            {responseData.totalCount} results for "{searchQuery}".
          </p>
          <div className="imgResults">
            {responseData.value &&
              responseData.value.map((item) => (
                <div className="imgResultContainer" key={item.url}>
                  <a href={item.url} className="lightboxLink">
                    <div className="imgBackground">
                      <img
                        src={item.url}
                        className="imageGallery"
                        alt="gallery preview"
                      ></img>
                    </div>
                  </a>
                  <div className="metaContainer">
                    <div className="imgContainer">
                      <img
                        src={getFaviconURL(item.url)}
                        alt={item.provider.name}
                        className="resultFavicon"
                      />
                    </div>
                    <a href={item.url} className="imgURLContainer">
                      <p className="imgURL">{item.url}</p>
                      <p className="imgProviderName">{item.provider.name}</p>
                    </a>
                  </div>
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

export default SearchImages;
