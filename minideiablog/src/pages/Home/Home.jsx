import React from 'react'
import logo from '/MBD.png'
import styles from './Home.module.css'


import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'

import PostDetail from '../../components/PostDetail'

const Home = () => {

  const { documents: posts, loading } = useFetchDocuments('posts')
  const navigate = useNavigate()

  const [query, setQuery] = useState("")

  const handlerSubmit = (e) => {
    e.preventDefault()

    if (query) {
      return navigate(`/search?q=${query}`)
    }
  }
  console.log(loading)

  return (
    <>
      <div className={styles.home}>
        <h1>Veja nossas idéias!</h1>
        <form className={styles.search_form} onSubmit={handlerSubmit}>
          <input
            type="text"
            placeholder='Ou busque por tags...'
            onChange={(e) => { setQuery(e.target.value) }}
          />
          <button className='btn btn-dark'>Pesquisar</button>
        </form>
        <div className='post-list'>
          {loading && <p>Carregando...</p>}
          {posts && posts.length === 0 && (
            <div className={styles.noposts}>
              <p>Não encontramos Ideias cara!</p>
              <Link to="/post/create">
                <img src={logo} alt="Logo do Site" />
              </Link>
            </div>
          )}

          {
            posts && posts.map((post) => (
              <PostDetail key={post.id} post={post} />
            ))
          }
        </div>
      </div>
    </>

  )
}

export default Home