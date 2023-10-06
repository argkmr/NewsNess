"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Feed from "./Feed";

const NewsHandlers = () => {
    const [data, setData] = useState([]);
    const [buttonState, setButtonState] = useState(false);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [url, setURL] = useState('');
    const [imgUrl, setImgURL] = useState('');
    const key = process.env.NEXT_PUBLIC_NEWS_API_KEY;

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`);
            const data = await response.json();
            const resArray = data.articles;
            resArray.map((item) => {
                console.log(item.source.name);
            })
            setData(data.articles);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        handleSearch();
    }, []);

    const theHindu = data.filter((item) => {
        return (item.source.name === "The Hindu")
    });

    const theTimesOfIndia = data.filter((item) => {
        return (item.source.name === "The Times of India")
    });

    const theIndianExpress = data.filter((item) => {
        return (item.source.name === "The Indian Express")
    });

    const theNDTV = data.filter((item) => {
        return (item.source.name === "NDTV News")
    });

    const theHindustantimes = data.filter((item) => {
        return (item.source.name === "Hindustan Times")
    });

    const theIndiaToday = data.filter((item) => {
        return (item.source.name === "India Today")
    });

    const theHinduHandler = () => {
        if (theHindu.length !== 0) {
            setTitle(theHindu[0].title);
            setContent(theHindu[0].content);
            setURL(theHindu[0].url);
            setImgURL(theHindu[0].urlToImage)
        } else {
            setTitle("No Data Available From THE HINDU Please Look For Other Media Hubs");
            setContent("");
            setURL("")
            setImgURL("/assets/images/nodata.png");
        }
        setButtonState(true);
    }


    const theTimesOfIndiaHandler = () => {
        if (theTimesOfIndia.length !== 0) {
            setTitle(theTimesOfIndia[0].title);
            setContent(theTimesOfIndia[0].content);
            setURL(theTimesOfIndia[0].url);
            setImgURL(theTimesOfIndia[0].urlToImage)
        } else {
            setTitle("No Data Available From THE TIMES OF INDIA Please Look For Other Media Hubs");
            setContent("");
            setURL("")
            setImgURL("/assets/images/nodata.png");
        }
        setButtonState(true);
    }

    const theIndianExpressHandler = () => {
        if (theIndianExpress.length !== 0) {
            setTitle(theIndianExpress[0].title);
            setContent(theIndianExpress[0].content);
            setURL(theIndianExpress[0].url);
            setImgURL(theIndianExpress[0].urlToImage);
        } else {
            setTitle("No Data Available From THE INDIAN EXPRESS Please Look For Other Media Hubs");
            setContent("");
            setURL("")
            setImgURL("/assets/images/nodata.png");
        }

        setButtonState(true);
    }

    const theNDTVHandler = () => {
        if (theNDTV.length !== 0) {
            setTitle(theNDTV[0].title);
            setContent(theNDTV[0].content);
            setURL(theNDTV[0].url);
            setImgURL(theNDTV[0].urlToImage);
        } else {
            setTitle("No Data Available From NDTV INDIA Please Look For Other Media Hubs");
            setContent("");
            setURL("")
            setImgURL("/assets/images/nodata.png");
        }

        setButtonState(true);
    }

    const theHindustantimesHandler = () => {
        if (theHindustantimes.length !== 0) {
            setTitle(theHindustantimes[0].title);
            setContent(theHindustantimes[0].content);
            setURL(theHindustantimes[0].url);
            setImgURL(theHindustantimes[0].urlToImage);
        } else {
            setTitle("No Data Available From THE HINDUSTAN TIMES Please Look For Other Media Hubs");
            setContent("");
            setURL("")
            setImgURL("/assets/images/nodata.png");
        }

        setButtonState(true);
    }

    const theIndiaTodayHandler = () => {
        if (theIndiaToday.length !== 0) {
            setTitle(theIndiaToday[0].title);
            setContent(theIndiaToday[0].content);
            setURL(theIndiaToday[0].url);
            setImgURL(theIndiaToday[0].urlToImage);
        } else {
            setTitle("No Data Available From INDIA TODAY Please Look For Other Media Hubs");
            setContent("");
            setURL("")
            setImgURL("/assets/images/nodata.png");
        }

        setButtonState(true);
    }

    return (
        <section className="w-full flex-col flex-center mt-12">
            <h1 className="desc2"><strong>Come On! Let's show some NewsNess...</strong></h1>
            <div className="w-full flex-col flex-center gap-10 mt-10">
                <div className="flex-row" style={{ gap: "14.75rem" }}>
                    <Link href="#newsHub" type="button">
                        <Image
                            src="/assets/icons/thehindu.png"
                            alt="NewsNess"
                            width={150}
                            height={150}
                            className="object-contain hoverImg"
                            style={{
                                border: "1px solid black",
                                borderRadius: "10px"
                            }}
                            onClick={theHinduHandler}
                        />
                    </Link>
                    <Link href="#newsHub" type="button">
                        <Image
                            src="/assets/icons/toi.png"
                            alt="NewsNess"
                            width={150}
                            height={150}
                            className="object-contain hoverImg"
                            style={{
                                border: "1px solid black",
                                borderRadius: "10px"
                            }}
                            onClick={theTimesOfIndiaHandler}
                        />
                    </Link>
                </div>
                <div className="flex-row" style={{ gap: "14.75rem" }}>
                    <Link href="#newsHub" type="button">
                        <Image
                            src="/assets/icons/indianexpress.png"
                            alt="NewsNess"
                            width={150}
                            height={150}
                            className="object-contain hoverImg"
                            style={{
                                border: "1px solid black",
                                borderRadius: "10px"
                            }}
                            onClick={theIndianExpressHandler}
                        />
                    </Link>
                    <Link href="#newsHub" type="button">
                        <Image
                            src="/assets/icons/ndtv.png"
                            alt="NewsNess"
                            width={150}
                            height={150}
                            className="object-contain hoverImg"
                            style={{
                                border: "1px solid black",
                                borderRadius: "10px"
                            }}
                            onClick={theNDTVHandler}
                        />
                    </Link>
                </div>

                <div className="flex-row" style={{ gap: "14.75rem" }}>
                    <Link href="#newsHub" type="button">
                        <Image
                            src="/assets/icons/hindustantimes.png"
                            alt="NewsNess"
                            width={150}
                            height={150}
                            className="object-contain hoverImg"
                            style={{
                                border: "1px solid black",
                                borderRadius: "10px"
                            }}
                            onClick={theHindustantimesHandler}
                        />
                    </Link>
                    <Link href="#newsHub" type="button">
                        <Image
                            src="/assets/icons/indiatoday.png"
                            alt="NewsNess"
                            width={150}
                            height={150}
                            className="object-contain hoverImg"
                            style={{
                                border: "1px solid black",
                                borderRadius: "10px"
                            }}
                            onClick={theIndiaTodayHandler}
                        />
                    </Link>
                </div>
            </div>
            {buttonState && (<Feed title={title} content={content} url={url} imgUrl={imgUrl} />)}
        </section>
    );
}

export default NewsHandlers;
