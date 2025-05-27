import  {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate,  useParams } from 'react-router-dom';

interface Post {
  $id: string;
  title: string;
  content: string;
  status: "active" | "inactive";
  featuredImage: string;
}

function EditPost() {
    const [post, setPosts] = useState<Post | null>(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post:any) => {
                if (post) {
                    setPosts(post )
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost