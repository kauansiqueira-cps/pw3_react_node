import styles from './Post.module.css'

import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useParams } from 'react-router-dom'

const Post = () => {
    const { id } = useParams()
    const { documents: post } = useFetchDocument("posts", id)

    return (
        <>
            <div className={styles.post_container}>
                {post && (
                    <>
                        <h1>{post.title}</h1>
                        <img src={post.image} alt={post.title} />
                        <p className={styles.tags}>{post.body}</p>
                        <p className={styles.tags}>Por: {post.createBy}</p>
                        <div className={styles.tags}>
                            {post.tags.map((tag) => (
                                <p key={tag}>
                                    <span>#</span>
                                    {tag}
                                </p>
                            ))}
                        </div>
                    </>
                )}
                {!post && (<p>O Post qye está procurando não existe em nossa base!</p>)}
            </div>
        </>
    )
}

export default Post