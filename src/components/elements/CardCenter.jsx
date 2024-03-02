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
              <p className="text-[14px]">{post.name}</p>
              <p className="text-[12px]">{post.createdAt}</p>
            </div>
          </div>

          <div className="pl-10">
          <h3 className="text-[28px] font-bold"> {post.title} </h3>

          <div className="flex mb-3 h-8"> {post.tags.map(tag => (
                <Button key={tag} type="tags">{tag}</Button>
              ))}
            </div>

            <div className="flex justify-between">
              <div className="flex ">
                <div className="flex text-[13px] content-center mr-8 hover:bg-grayButton p-1.5 rounded-lg">
                  <div className="flex pr-2 ">
                    <Button type="reaction">
                      <img src="/vite.svg" alt="" className="size-5" />
                    </Button>
                    <Button type="reaction">
                      <img src="/vite.svg" alt="" className="size-5" />
                    </Button>
                    <Button type="reaction">
                      <img src="/vite.svg" alt="" className="size-5" />
                    </Button>
                  </div>
                  <p className="self-center">{post.reactions}</p>
                </div>

                <Button type="actions">
                  <img src="/vite.svg" alt="" className="size-5" />
                  <p className="pl-2">{post.comments} comments</p>
                </Button>
              </div>

              <div className="flex text-[13px] ">
                <p className="pr-2 self-center"> {post.readingTime} min read</p>
                <Button type="actions">
                  <img src="/vite.svg" alt="" className="size-5" />
                </Button>
              </div>
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
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    reactions: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    readingTime: PropTypes.string.isRequired,
  })
};
