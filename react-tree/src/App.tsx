import { useState } from "react";
import "./App.css";

const files = {
  children: [
    {
      name: "node_modules",
      children: [
        {
          name: "react",
          children: [
            {
              name: "index.js",
            },
          ],
        },
      ],
    },
    {
      name: "src",
    },
    {
      name: "package.json",
    },
  ],
};

type TEntry = {
  name: string;
  children?: TEntry[];
};

function Entry({ entry, depth }: { entry: TEntry; depth: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      {entry.children ? (
        <button
          className="bg-transparent p-0"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "-" : "+"} {entry.name}
        </button>
      ) : (
        <div>{entry.name}</div>
      )}
      {isExpanded && (
        <div className="pl-3">
          {entry.children?.map((entry) => (
            <Entry entry={entry} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {files.children.map((entry) => (
        <Entry entry={entry} depth={1} />
      ))}
    </div>
  );
}

export default App;