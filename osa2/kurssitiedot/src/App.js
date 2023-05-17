const Course = (props) => {
  const course = props.course
  const courses = course.parts
  return (
    <div>
    <Header name={course.name}/>

    <Content content={courses}/>

    </div>
  )

}

const Content = (props) => {
  const contents = props.content
  console.log("Content-tyyppi ", typeof contents)
  console.log("Content-keys", Object.keys(contents))

  return (
    <div>
      {contents.map(content=>
      <Part key={content.id} part={content}/>
        )}
    </div>
  )
}

const Part = (props) => {
  const part = props.part

  return (
    <div>
      {part.name} {part.exercises}
    </div>
  )
}



const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App