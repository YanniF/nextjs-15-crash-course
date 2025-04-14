import {EyeIcon, User} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {formatDate} from "@/lib/utils";

export type StartupTypeCard = {
  _id: number,
  title: string,
  description: string,
  category: string,
  image: string,
  author: { _id: number, name: string, image?: string },
  views: number,
  _createdAt: string,
}

const StartupCard = ({post}: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    image,
    description,
  } = post;

  return (
    <div className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary"/>
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between gap-5 mt-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          {author?.image ? (
            <Image
              src={author?.image}
              alt={author?.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            )
            : (
              <div className="flex items-center justify-center size-12 bg-primary rounded-full">
                <User className="size-8 text-white"/>
              </div>
            )
          }
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>

        <img src={image} alt="placeholder" className="startup-card_img"/>
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </div>
  )
}

export default StartupCard;