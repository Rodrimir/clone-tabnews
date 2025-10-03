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
  try {
    const res = await fetch("https://www.tabnews.com.br/api/v1/contents");

    // Verifica se a resposta da API foi bem-sucedida
    if (!res.ok) {
      // Se não foi (ex: erro 500), joga um erro para ser capturado pelo catch
      throw new Error(`Failed to fetch posts, received status ${res.status}`);
    }

    const posts = await res.json();

    return {
      props: {
        posts: posts.slice(0, 15),
      },
      revalidate: 60,
    };
  } catch (error) {
    // Se qualquer parte do 'try' falhar, o build não vai quebrar.
    // Ele vai apenas logar o erro no console da Vercel e renderizar a página sem posts.
    console.error("Error in getStaticProps:", error);
    return {
      props: {
        posts: [], // Retorna uma lista vazia de posts em caso de erro
      },
      revalidate: 60,
    };
  }
}

export default Home;

