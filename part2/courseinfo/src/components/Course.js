import React from 'react';

const Course = ({course}) => {
    return(
        <div>
            <Header text={course.name} />
            <Content parts={course.parts} />
            <Sum parts={course.parts} />
        </div>
    );
};

const Header = ({text}) => <h1>{text}</h1>;

const Content = ({parts}) => {
    return (
        <div>
            {parts.map((part) => <Part key={part.id} name={part.name} exercises={part.exercises}></Part>)}
        </div>
    );
}

const Part = ({name, exercises}) => <p>{name} {exercises}</p>;

const Sum = ({parts}) => {
    const sum = parts.reduce((accum, current) => {
        accum += current.exercises;
        return accum;
    },0);
    return <p>Total of {sum} exercises</p>
};

export default Course;