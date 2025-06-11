export default async function Posts() {
  const data = await fetch(
    'https://dummyjson.com/posts?limit=10&skip=0&select=id,title,body',
  ).then((res) => res.json())

  return (
    <div className="pt-12">
      <h1 className="text-3xl capitalize font-bold mb-4 m-x-auto text-center">
        Welcome to my blog!
      </h1>
      <div className="max-w-3xl mx-auto px-4">
        <ul className="space-y-6">
          {data.posts.map(
            (post: { id: number; title: string; body: string }) => (
              <li key={post.id} className="border p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-700">{post.body}</p>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  )
}
