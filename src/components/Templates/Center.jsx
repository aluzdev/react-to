/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "../elements/Button";
import { CardCenter } from "../elements/CardCenter";

export const Center = ({
  posts,
  searchBar,
  filteredPosts,
  setFilteredPosts,
}) => {
  const [filterType, setFilterType] = useState("Relevant");
  const [showAdditionalB, setShowAdditionalB] = useState(false);

  const handleFilterClick = (type) => {
    // Verifico si se hizo clic en el botón Destacados
    if (
      type === "Top" ||
      type === "Week" ||
      type === "Month" ||
      type === "Year" ||
      type === "Infinity"
    ) {
      setShowAdditionalB(true);
    } else {
      setShowAdditionalB(false);
    }

    setFilterType(type);

    //Me traigo la fecha
    const currentDate = new Date();

    // Filtra los posts según el tipo
    if (type === "Relevant") {
      const relevantPosts = posts.filter((post) => post.relevant === true);
      setFilteredPosts(relevantPosts);
    } else if (type === "Latest") {
      const latestPosts = [...posts].sort((a, b) => {
        // Ordeno todo de forma descendente según la propiedad createdAt
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setFilteredPosts(latestPosts);
    } else if (type === "Top" || type === "Week") {
      const lastWeekPosts = posts.filter((post) => {
        const postDate = new Date(post.createdAt);
        const timeDifference = currentDate - postDate;
        const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
        return timeDifference <= oneWeekInMilliseconds;
      });

      // Ordena de forma descendente según la propiedad createdAt
      const latestPosts = [...lastWeekPosts].sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setFilteredPosts(latestPosts);
    }
    // Filtra los posts creados en la última semana
    else if (type === "Month") {
      // Filtra los posts creados en el último mes
      const lastMonthPosts = posts.filter((post) => {
        const postDate = new Date(post.createdAt);
        const timeDifference = currentDate - postDate;
        const oneMonthInMilliseconds = 30 * 24 * 60 * 60 * 1000; // Aproximadamente 30 días
        return timeDifference <= oneMonthInMilliseconds;
      });

      // Ordeno la info de forma descendente según la propiedad createdAt
      const latestPosts = [...lastMonthPosts].sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      setFilteredPosts(latestPosts);
    } else if (type === "Year") {
      // me traigo los posts creados en el último año
      const lastYearPosts = posts.filter((post) => {
        const postDate = new Date(post.createdAt);
        const timeDifference = currentDate - postDate;
        const oneYearInMilliseconds = 365 * 24 * 60 * 60 * 1000; // Aproximadamente 365 días
        return timeDifference <= oneYearInMilliseconds;
      });

      // Ordeno los posts de forma descendente según la propiedad createdAt
      const latestPosts = [...lastYearPosts].sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      setFilteredPosts(latestPosts);
    } else if (type === "Infinity") {
      // Me traigo los posts de forma aleatoria
      const randomPosts = [...posts].sort(() => Math.random() - 0.5);
      setFilteredPosts(randomPosts);
    }
  };

  return (
    <div className="md:w-[531px] lg:w-[480px] lg:pr-0 xl:pr-0 xl:w-[650px]">
      <div className="my-3 flex justify-between">
        <div>
          <Button
            type="filter"
            onClick={() => handleFilterClick("Relevant")}
            className={filterType === "Relevant" ? "font-bold" : ""}
          >
            Relevants
          </Button>
          <Button
            type="filter"
            onClick={() => handleFilterClick("Latest")}
            className={filterType === "Latest" ? "font-bold" : ""}
          >
            Latest
          </Button>
          <Button
            type="filter"
            onClick={() => handleFilterClick("Top")}
            className={
              filterType === "Top" ||
              filterType === "Week" ||
              filterType === "Month" ||
              filterType === "Year" ||
              filterType === "Infinity"
                ? "font-bold"
                : ""
            }
          >
            Top
          </Button>
        </div>

        <div className="">
          {showAdditionalB && (
            <>
              <Button
                type="filter"
                onClick={() => handleFilterClick("Week")}
                className={
                  filterType === "Week" || filterType === "Top"
                    ? "font-bold"
                    : ""
                }
              >
                Week
              </Button>
              <Button
                type="filter"
                onClick={() => handleFilterClick("Month")}
                className={filterType === "Month" ? "font-bold" : ""}
              >
                Month
              </Button>
              <Button
                type="filter"
                onClick={() => handleFilterClick("Year")}
                className={filterType === "Year" ? "font-bold" : ""}
              >
                Year
              </Button>
              <Button
                type="filter"
                onClick={() => handleFilterClick("Infinity")}
                className={filterType === "Infinity" ? "font-bold" : ""}
              >
                Infinity
              </Button>
            </>
          )}
        </div>
      </div>

      {!searchBar
        ? posts.map(
            ({
              _id,
              author,
              title,
              reactions,
              tags,
              coverImage,
              createdAt,
              comments,
              readingTime,
            }) => (
              <CardCenter
                key={_id}
                _id={_id}
                author={author}
                comments={comments}
                coverImage={coverImage}
                createdAt={createdAt}
                reactions={reactions}
                readingTime={readingTime}
                tags={tags}
                title={title}
              />
            )
          )
        : filteredPosts.map(
            ({
              _id,
              author,
              title,
              reactions,
              tags,
              coverImage,
              createdAt,
              comments,
              readingTime,
            }) => (
              <CardCenter
                key={_id}
                _id={_id}
                author={author}
                comments={comments}
                coverImage={coverImage}
                createdAt={createdAt}
                reactions={reactions}
                readingTime={readingTime}
                tags={tags}
                title={title}
              />
            )
          )}
    </div>
  );
};
