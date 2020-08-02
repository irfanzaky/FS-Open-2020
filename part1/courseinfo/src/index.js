import  React  from  'react'
import  ReactDOM  from  'react-dom'

const  Header  =  (props)  =>{
    return(
        <h1>{props.courseName}</h1>
    )
}


const  Content  =  (props)  =>{
    return(
        <div>
            <p>
                {props.content[0].partName}  {props.content[0].partExcercise}
            </p>
            <p>
                {props.content[1].partName}  {props.content[1].partExcercise}
            </p>
            <p>
                {props.content[2].partName}  {props.content[2].partExcercise}
            </p>
        </div>
    )
}


const  Total  =  (props)  =>{
    return(
        <p>Number  of  exercises  {props.totalExcercise}</p>
    )
}

const  App  =  ()  =>  {
    const course = { 
      courseName: 'Half Stack application development',
      courseContent: [{
        partName: 'Fundamentals of React',
        partExcercise: 10,
      },
      {
        partName: 'Using props to pass data',
        partExcercise: 7,
      },
      {
        partName: 'State of a component',
        partExcercise: 14,
      }]
    }
  return (
    <div>
      <Header courseName = {course.courseName}  />
            <Content  content  =  {course.courseContent}/>
            <Total  totalExcercise  =  {course.courseContent.reduce((acc, part)  =>  acc  +  part.partExcercise,  0)}/>
        </div>
    )
}

ReactDOM.render(<App  />,  document.getElementById('root'))