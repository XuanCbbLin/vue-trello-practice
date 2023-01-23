export interface APILists {
  id: string;
  title: string;
  tasks: Tasks[];
}

interface Tasks {
  id: string;
  title: string;
  content: string;
}
