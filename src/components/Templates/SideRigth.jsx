/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button } from "../elements/Button";
import { API_URL } from "../../api";

const SideBarButton = ({ post }) => {
  // Corrected component name
  console.log({ post });
  return (
    <Button type="rigth_sidebar">
      <p>{post.title}</p>
      <p className="text-gray-500 text-[.9rem]">{post.comments} comments</p>
    </Button>
  );
};

export const SideRigth = ({ tagsToFilterBy }) => {
  const [filteredPosts, setFilteredPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${API_URL}/posts`);
        const posts = await response.json();

        const filteredPostsArray = tagsToFilterBy.map((tag) => {
          const filteredPostsByTag = posts.filter((post) =>
            post.tags
              .map((tag) => tag.toLowerCase())
              .includes(tag.toLowerCase())
          );
          return { [tag]: filteredPostsByTag };
        });

        setFilteredPosts(filteredPostsArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, [tagsToFilterBy]);
  return (
    <>
      <aside className="hidden lg:block lg:w-[240px] md:pt-[4px] xl:w-[325px] lg:pl-2 xl:pl-0 xl:block">
        <div className="divide-y divide-gray-300 bg-slate-50 lg:w-[240px] lg:pl-2 xl:w-[325px] xl:ml-0 rounded-md">
          <Button type="rigth_sidebar">
            <p className="text-xl font-semibold">
              {filteredPosts
                ? Object.keys(filteredPosts[0])?.toString()
                : "#webdev"}
            </p>
            <p className="text-gray-500 text-xs">
              Discussion threads targeting the whole community
            </p>
          </Button>
          {filteredPosts &&
            Object.values(filteredPosts[0])
              .flat()
              .map((post, index) => <SideBarButton key={index} post={post} />)}
        </div>
        <br />
        <div className="divide-y divide-gray-300 bg-slate-50 lg:w-[240px] lg:pl-2 xl:w-[325px] xl:ml-0 rounded-md">
          <Button type="rigth_sidebar">
            <p className="text-xl font-semibold">
              {filteredPosts
                ? Object.keys(filteredPosts[1])?.toString()
                : "#beginners"}
            </p>
            <p className="text-gray-500 text-xs">
              Discussion threads targeting the whole community
            </p>
          </Button>
          {filteredPosts &&
            Object.values(filteredPosts[1])
              .flat()
              .map((post, index) => <SideBarButton key={index} post={post} />)}
        </div>
      </aside>
    </>
  );
};
