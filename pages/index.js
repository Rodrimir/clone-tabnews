import Link from "next/link";

function Home({ posts }) {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Página Inicial</h1>

      <div style={{ marginBottom: '2.5rem' }}>
        <Link href="/plano" style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            backgroundColor: '#2563eb',
            color: 'white',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: 'bold',
            boxShadow: '0 4px 14px 0 rgba(0, 118, 255, 0.39)'
          }}>
            Acessar Meu Plano Semanal
        </Link>
      </div>

      <h2 style={{ fontSize: '2rem', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Postagens</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: '1rem' }}>
            <Link href={`/${post.owner_username}/${post.slug}`} style={{ fontSize: '1.2rem', textDecoration: 'none', color: '#333' }}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
// 👇 Esta linha agora está CORRETA
const res = await fetch("https://www.tabnews.com.br/api/v1/contents"); 
const posts = await res.json();

return {
    props: {
    posts: posts.slice(0, 15), // Pega apenas os 15 primeiros posts
    },
    revalidate: 60, // Regenera a página a cada 60 segundos
};
}

export default Home;

