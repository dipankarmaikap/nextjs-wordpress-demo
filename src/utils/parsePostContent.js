import parse from "html-react-parser";
import ImageComponent from "~/components/ImageComponent";

export default function parsePostContent(content) {
  if (!content) {
    return <p>No content found</p>;
  }
  const options = {
    replace: ({ name, attribs }) => {
      if (name === "img") {
        const { src, width, height, alt } = attribs;
        return (
          <ImageComponent width={width} height={height} src={src} alt={alt} />
        );
      }
    },
  };
  return parse(content, options);
}
