import SearchForm from "../components/SearchForm";
import Story from "../components/Story";
import Pagination from "../components/Pagination";
import { useGlobalContext } from "../context";

const Home = () => {
  const { loading, stories, removeStory } = useGlobalContext();
  return (
    <section className='main'>
      <div className='container'>
        <SearchForm />
        <Pagination />
        <article className='news-container'>
          {loading ? (
            <h1 className='loading'>Loading...</h1>
          ) : (
            stories.map((story) => {
              return (
                <Story
                  key={story.objectID}
                  {...story}
                  removeStory={removeStory}
                />
              );
            })
          )}
        </article>
      </div>
    </section>
  );
};

export default Home;
