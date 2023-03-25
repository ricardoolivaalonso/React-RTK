import { v4 as uuidv4 } from 'uuid'

export const initialTasks = {
    tasks: [
        {
            id: uuidv4(),
            content: "Fix something that's broken in your house",
            board: "board-001",
            project: 'project-001'
        },
        {
            id: uuidv4(),
            content: "Meditate for five minutes",
            board: "board-001",
            project: 'project-001'
        },
        {
            id: uuidv4(),
            content: "Create or update your resume",
            board: "board-002",
            project: 'project-001'
        },
        {
            id: uuidv4(),
            content: "Listen to music you haven't heard in a while",
            board: "board-002",
            project: 'project-001'
        },
        {
            id: uuidv4(),
            content: "Take a class at your local community center that interests you",
            board: "board-003",
            project: 'project-001'
        }
    ]
}