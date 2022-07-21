import { FunctionComponent } from "react";
import { Data, Head } from "../state/types/unsplash";
// import InfiniteScroll from "./InfiniteScrolling";

interface Props {
  data: Data[];
  isLoading: boolean;
  error: Error | string;
  hasMoreListing: Head[];
}

const UnsplashComponent: FunctionComponent<Props> = (props) => {
  const { data, isLoading, error } = props;

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <div>{"loading..."}</div>;
  }

  const Image = (props: any) => {
    const { key, alt, src } = props;
    return <img key={key} alt={alt} src={src} />;
  };

  console.log(data.length);

  // const hasMoreListing = data?.length === undefined ? 0 : data.length;

  return (
    <div className="image-container" id="infinite-scroll-parent">
      {/* <pre>{JSON.stringify(hasMoreListing, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(data, null, 1)}</pre> */}
      {/* <InfiniteScroll
        hasMoreData={hasMore}
        isLoading={isLoading}
        onBottomHit={hasMoreListing}
        loadOnMount={false}
        scrolledParentId="infinite-scroll-parent"
      > */}
      {data.map((res) => (
        <ul key={res.id}>
          <li className="img-wrapper">
            <Image
              src={res.urls.thumb}
              alt={res.alt_description}
              className="img-size"
            />
          </li>
          <li className="text-desc">
            Likes: {res.likes} &nbsp; {res.user.name} <br />
            {res.alt_description}
          </li>
        </ul>
      ))}
      {/* </InfiniteScroll> */}
    </div>
  );
};
export default UnsplashComponent;
