'use server'

import {auth} from "@/auth";
import {parseServerActionResponse} from "@/lib/utils";
import slugify from "slugify";
import {writeClient} from "@/sanity/lib/write-client";

// TODO: fix types
export const createStartup = async (state: any, form: any, pitch:string) => {
  const session = await auth()

  if(!session){
    return parseServerActionResponse({
      error: 'Not signed in',
      status: 'ERROR'
    })
  }

  const { title, description, category, link } = form

  const slug = slugify(title.toString(), { lower: true, strict: true })

  try {
    const startup = {
      title,
      description,
      category,
      image: link,
      slug: {
        _type: 'slug',
        current: slug
      },
      author: {
        _type: 'reference',
        _ref: session?.id
      },
      pitch,
      views: 0,
    }

    const result = await writeClient.create({ _type: 'startup', ...startup })

    return parseServerActionResponse({ ...result, error: '', status: 'SUCCESS' })
  }
  catch (error) {
    console.log(error)

    return parseServerActionResponse({error: JSON.stringify(error), status: 'ERROR'})
  }
}