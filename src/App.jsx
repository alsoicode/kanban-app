import { render } from 'react-dom';
import KanbanBoard from './components/KanbanBoard';

let cardsList = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should read the whole book",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the book",
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
      },
      {
        id: 2,
        name: "Kanban Example"
      },
      {
        id: 3,
        name: "My own experiments"
      }
    ]
  },
];

render(
  <KanbanBoard cards={cardsList} />,
  document.getElementById('app')
);
