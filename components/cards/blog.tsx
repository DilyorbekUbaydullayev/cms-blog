import { IBlog } from "@/types"
import Image from "next/image"

function Blog(blog:IBlog) {
  return (
    <div className="grid gap-4 group grid-cols-1 md:grid-cols-2">
        <div className="relative bg-secondary rounded-md">
            <Image width={650} height={335} src={blog.image} alt={blog.title} className="px-2 md:px-7 rounded-md group-hover:-translate-y-7 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3" />
        </div>
    </div>
  )
}

export default Blog