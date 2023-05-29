const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const total = blogs
    .map(blog => blog.likes)
    .reduce((accumulator, current) => accumulator + current, 0)

    return total
}

const favoriteBlog = (blogs) => {
    let max = 0
    let bestBlog = {}
    blogs.forEach(blog => {
        if (blog.likes >= max) {
            bestBlog = blog
            max = blog.likes
        }
    });

    return ({title: bestBlog.title, author: bestBlog.author, likes: bestBlog.likes})
}

module.exports = {
    dummy, totalLikes, favoriteBlog
}