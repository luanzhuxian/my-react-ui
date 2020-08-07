import React from 'react'

interface HelloProps {
    message?: string
}

// const Hello = (props: HelloProps) => {
//     return <h2>{props.message}</h2>
// }

const Hello: React.FC<HelloProps> = (props) => <h2>{props.message}</h2>
Hello.defaultProps = {
    message: 'Hello 123'
}

export default Hello