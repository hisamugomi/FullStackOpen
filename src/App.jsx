import * as React from "react"

const Part = (props) => {
    return (
        <div>
            <p>{props.content} Number of excersises: {props.number}</p>
        </div>
    )
}

const Content = (props) => {
    const contentandnumber = [
        { name: 'Fundamentals of React', number: 10, },
        { name: 'Using props to pass data', number: 7 },
        { name: 'State of component', number: 14 }
    ]
    return (
        <div>
            <Part content={contentandnumber[0].name} number={contentandnumber[0].number}></Part>
            <Part content={contentandnumber[1].name} number={contentandnumber[1].number}></Part>
            <Part content={contentandnumber[2].name} number={contentandnumber[2].number}></Part>
            <p>{props.content}</p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
          <strong>HalfStackOpen practice</strong>
            <Content />
            </div>
    )
}

export default App