import SearchForm from "@/components/SearchForm";
import StartupCard, {StartupTypeCard} from "@/components/StartupCard";

export default async function Home({searchParams}: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query

  const posts: StartupTypeCard[] = [{
    _id: 1,
    title: 'Cool Shop',
    description: 'Cool description',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1743001025958-19eca24afd23?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: {_id: 1, name: 'Yanni Frufru'},
    views: 101,
    _createdAt: new Date().toString(),
  }]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your Startup, <br/>
          Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, vote on pitches and get noticed in virtual competitions.
        </p>
        <SearchForm query={query}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>
        <div className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts?.map((post: StartupTypeCard) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </div>
      </section>
    </>
  );
}
