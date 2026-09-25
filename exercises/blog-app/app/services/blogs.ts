const blogs = [
    { id: 1, title: "Introduction to Next.js", author: "John Doe", url: "https://example.com/nextjs-intro", likes: 10 },
    { id: 2, title: "Building a Next.js App", author: "John Doe", url: "https://example.com/nextjs-building", likes: 5 },
    {
        id: 3,
        title: "Static and Dynamic Rendering in Next.js",
        author: "Mary Jane",
        url: "https://example.com/nextjs-rendering",
        likes: 8
    },
]

let nextId = 4

export const getBlogs = () => {
    return blogs
}

export const addBlog = (title: string, author: string, url: string) => {
    blogs.push({ id: nextId++, title, author, url, likes: 0 })
}