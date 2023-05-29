const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const total = blogs
    .map(blog => blog.likes)
    .reduce((accumulator, current) => accumulator + current, 0)

    return total
}

module.exports = {
    dummy, totalLikes
}