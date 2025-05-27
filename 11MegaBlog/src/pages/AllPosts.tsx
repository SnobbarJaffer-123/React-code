import  {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

interface Post {
  $id: string;
  title: string;
  content: string;
  status: "active" | "inactive";
  featuredImage: string;
  // Add more fields if needed
}


function AllPosts() {
    const [posts, setPosts] = useState<Post[]>([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts:any) => {
        if (posts) {
            setPosts(posts.documents )
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts
