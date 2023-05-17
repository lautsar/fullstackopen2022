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
  
    const total = contents
    .map(obj => obj.exercises)
    .reduce((accumulator, current) => accumulator + current, 0)
  
    return (
      <div>
        {contents.map(content=>
        <Part key={content.id} part={content}/>
          )}
        
        Total {total} exercises
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
  
  export default Course