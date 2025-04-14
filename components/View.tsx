import Ping from "@/components/Ping";
import {client} from "@/sanity/lib/client";
import {STARTUP_VIEWS_QUERY} from "@/sanity/lib/queries";

const View = async ({ id }: { id: string }) => {
  const totalViews = await client.withConfig({ useCdn: false }).fetch(STARTUP_VIEWS_QUERY, { id })

  return (
    <div className="view-container">
      <div className="absolute -top-2 -left-1">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">Views: {totalViews.views}</span>
      </p>
    </div>
  )
}

export default View
