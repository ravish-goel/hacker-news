import fetch from 'node-fetch'
import LineItem from '../components/LineItem'

function Blog({ posts }) {
  const result = posts.hits.filter(post => post.title);
  return (
    <ol>
      {result.map((post, index)=> (
        <LineItem {...post} index={index + 1}></LineItem>
      ))}
    </ol>
  )
}


export async function getStaticProps() {
  const res = await fetch('https://hn.algolia.com/api/v1/search?query=')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default Blog