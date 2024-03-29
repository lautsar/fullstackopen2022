const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')
const api = supertest(app)

const initialBlogs = [
    {
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 7,
        __v: 0
      },
      {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 5,
        __v: 0
      },
      {
        _id: "5a422b3a1b54a676234d17f9",
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes: 12,
        __v: 0
      }
]

beforeEach(async () => {
    await Blog.deleteMany({})
    let blogObject = new Blog(initialBlogs[0])
    await blogObject.save()
    blogObject = new Blog(initialBlogs[1])
    await blogObject.save()
    blogObject = new Blog(initialBlogs[2])
    await blogObject.save()

})

describe ('Get-methods', () => {

test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(3)
})


test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

test('id is called id', async () => {
    const response = await api.get('/api/blogs')
    const blog = response.body[0]
    expect(blog.id).toBeDefined()
})

})

describe ('Post methods', () => {
    test('amount of blogs increases when new blog is added', async () => {
        const newBlog = {
            title: "Uusi blogi",
            author: "Kirjoittaja",
            url: "http://osoite.com",
            likes: 0
        }

        await api
        .post('/api/blogs')
        .send(newBlog)

        const response = await api.get('/api/blogs')
        expect(response.body).toHaveLength(4)
    })

    test('added blog can be found', async () => {
        const newBlog = {
            title: "Uusi blogi",
            author: "Kirjoittaja",
            url: "http://osoite.com",
            likes: 0
        }

        await api
        .post('/api/blogs')
        .send(newBlog)

        const response = await api.get('/api/blogs')
        expect(response.body[3].title).toEqual(newBlog.title)
        expect(response.body[3].author).toEqual(newBlog.author)
    })


})

afterAll(async () => {
    await mongoose.connection.close()
})