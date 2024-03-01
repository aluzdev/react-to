import PropTypes from 'prop-types';
import { Button } from "./Button";

export const CardCenter = ({ post }) => {
  return (
    <>
      <div className="bg-slate-100 rounded-lg mb-6">
        <img src={post.image} alt="" className="rounded-lg"/>

        <div className="p-5 ">
          <div className="flex mb-4">
            <img src={post.avatar} alt="" className="rounded-full w-10 border-[1px] border-black" />
            <div className="pl-3 flex flex-col  gap-0">
              <p className="text-[14px]">{post.author}</p>
              <p className="text-[12px]">{post.createdAt}</p>
            </div>
          </div>

          <div className="pl-10">
            <h3 className="text-[28px] font-bold"> {post.title} </h3>

            <div className="flex mb-3 h-8"> {post.tags.map(tag => (
                <Button key={tag} type="tags">{tag}</Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CardCenter.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  })
};
