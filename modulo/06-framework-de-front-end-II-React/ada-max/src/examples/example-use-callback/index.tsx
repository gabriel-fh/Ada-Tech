import { memo, useCallback, useState } from "react";

const items = [
  {
    id: "1",
    name: "Item 1",
  },
  {
    id: "2",
    name: "Han Solo",
  },
  {
    id: "3",
    name: "Luke Skywalker",
  },
  {
    id: "4",
    name: "Leia Organa",
  },
  {
    id: "5",
    name: "Darth Vader",
  },
  {
    id: "6",
    name: "Obi-Wan Kenobi",
  },
  {
    id: "7",
    name: "Yoda",
  },
  {
    id: "8",
    name: "Boba Fett",
  },
  {
    id: "9",
    name: "Chewbacca",
  },
  {
    id: "10",
    name: "R2-D2",
  },
  {
    id: "11",
    name: "C-3PO",
  },
  {
    id: "12",
    name: "Anakin Skywalker",
  },
  {
    id: "13",
    name: "Padmé Amidala",
  },
  {
    id: "14",
    name: "Mace Windu",
  },
  {
    id: "15",
    name: "Qui-Gon Jinn",
  },
  {
    id: "16",
    name: "Count Dooku",
  },
  {
    id: "17",
    name: "Darth Maul",
  },
  {
    id: "18",
    name: "Emperor Palpatine",
  },
  {
    id: "19",
    name: "General Grievous",
  },
  {
    id: "20",
    name: "Jabba the Hutt",
  },
  {
    id: "21",
    name: "Lando Calrissian",
  },
  {
    id: "22",
    name: "Mara Jade",
  },
  {
    id: "23",
    name: "Rey",
  },
  {
    id: "24",
    name: "Finn",
  },
  {
    id: "25",
    name: "Poe Dameron",
  },
  {
    id: "26",
    name: "Kylo Ren",
  },
  {
    id: "27",
    name: "Snoke",
  },
  {
    id: "28",
    name: "Captain Phasma",
  },
  {
    id: "29",
    name: "Admiral Ackbar",
  },
];

type ListItemProps = {
  item: { id: string; name: string };
  onClick: (id: string) => void;
  isSelected: boolean;
};

const ListItem = memo(({ item, onClick, isSelected }: ListItemProps) => {
  console.log(item.name);
  return (
    <li style={{ marginBottom: 8 }}>
      <button onClick={() => onClick(item.id)} className="btn btn--white">
        {item.name} {isSelected ? "selected" : ""}
      </button>
    </li>
  );
});

type ListComponentProps = {
  items: { id: string; name: string }[];
};

const ListComponent = ({ items }: ListComponentProps) => {
  const [count, setCount] = useState(0);
  const [selectedItem, setSelectedItem] = useState("");

  // Memoize the click handler to prevent re-renders of ListItem components
  const handleClick = useCallback((id: string) => {
    setSelectedItem(id);
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <ul>
        {items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onClick={handleClick}
            isSelected={selectedItem === item.id}
          />
        ))}
      </ul>
    </div>
  );
};

export const ExampleOfUseCallback = () => {
  return (
    <div>
      <h1>Example of useCallback</h1>
      <ListComponent items={items} />
    </div>
  );
};
