const Feed = ({title, content, url, imgUrl}) => {
    return (
        <div className="news-cards news-contents" id="newsHub" style={{ marginTop: "100px" }}>
            <p className="head_text2" >{title}</p>
            <p className="desc">{content}</p>
            <div className="flex flex-center">
                <img
                    src={imgUrl}
                    alt=" NO PICTURE PREVIWE IS AVAILABLE "
                    className="mt-7 mb-7"
                    style={{
                        border: "1px solid black",
                        borderRadius: "5px"
                    }}
                />
            </div>
            <a className="desc" href={url} target="_blank" style={{ textDecoration: "underline", color: "black" }}>Click here to know more</a>

        </div>
    );
}

export default Feed;
