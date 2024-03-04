import { useEffect, useState } from "react";
import { Button } from "../elements/Button";
import { API_URL } from "../../api";

const sideBarButton = () => {
  return (
    <Button type="rigth_sidebar">
      <p>Psst... I can build this in a weekend!</p>
      <p className="text-gray-500 text-[.9rem]">10 comments</p>
    </Button>
  );
};

export const SideRigth = ({ tagsToFilterBy }) => {
  const [filteredPosts, setFilteredPosts] = useState([]);

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
      <aside className="hidden xl:w-[21rem] xl:block">
        <div className="divide-y divide-gray-300 bg-slate-50 w-[20.5rem] rounded-md">
          <Button type="rigth_sidebar">
            <p className="text-xl font-semibold">
              {Object.keys(filteredPosts[0]).toString()}
            </p>
            <p className="text-gray-500 text-xs">
              Discussion threads targeting the whole community
            </p>
          </Button>
          <Button type="rigth_sidebar">
            <p>Whitehouse Declares Software Should Be Memory Safe</p>
            <p className="text-gray-500 text-[.9rem]">5 comments</p>
          </Button>
          <Button type="rigth_sidebar">
            <p>Are You Embracing AI in Your Dev Workflow?</p>
            <p className="text-gray-500 text-[.9rem]">5 comments</p>
          </Button>
          <Button type="rigth_sidebar">
            <p>
              Explain "Memory Safe Programming Languages" Like I'm Five Please
            </p>
            <p className="text-gray-500 text-[.9rem]">8 comments</p>
          </Button>
          <Button type="rigth_sidebar">
            <p>Mentor Matching — February 2024 🤝</p>
            <p className="text-gray-500 text-[.9rem]">3 comments</p>
          </Button>
          <Button type="rigth_sidebar">
            <p>Psst... I can build this in a weekend!</p>
            <p className="text-gray-500 text-[.9rem]">10 comments</p>
          </Button>
        </div>
        <br />
        <div className="divide-y divide-gray-300 bg-slate-50 w-[20rem] rounded-md">
          <Button type="rigth_sidebar">
            <p className="text-xl font-semibold"> #discuss</p>
            <p className="text-gray-500 text-xs">
              Discussion threads targeting the whole community
            </p>
          </Button>
          <Button type="rigth_sidebar">
            <p>Whitehouse Declares Software Should Be Memory Safe</p>
            <p className="text-gray-500 text-[.9rem]">5 comments</p>
          </Button>
          <Button type="rigth_sidebar">
            <p>Are You Embracing AI in Your Dev Workflow?</p>
            <p className="text-gray-500 text-[.9rem]">5 comments</p>
          </Button>
          <Button type="rigth_sidebar">
            <p>
              Explain "Memory Safe Programming Languages" Like I'm Five Please
            </p>
            <p className="text-gray-500 text-[.9rem]">8 comments</p>
          </Button>
          <Button type="rigth_sidebar">
            <p>Mentor Matching — February 2024 🤝</p>
            <p className="text-gray-500 text-[.9rem]">3 comments</p>
          </Button>
          <Button type="rigth_sidebar">
            <p>Psst... I can build this in a weekend!</p>
            <p className="text-gray-500 text-[.9rem]">10 comments</p>
          </Button>
        </div>
      </aside>
    </>
  );
};
