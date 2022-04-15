import FakeBlurupImage from "./FakeBlurupImage";
export default function PostAuthor({ author }) {
  return (
    <div className="py-3">
      <div className="w-10 h-10 rounded-full overflow-hidden object-contain relative">
        <FakeBlurupImage src={author.avatar.url} alt={author?.name} />
      </div>
      <p>{author?.name}</p>
    </div>
  );
}
