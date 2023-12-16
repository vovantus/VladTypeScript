import { useState } from "react";
import { GenericList } from "./GenericList";

const TodoList = () => {
  type ListItems = {
    a: string;
    b: string;
  };
  const [stringList] = useState<string[]>(["Apple", "Banana", "Orange"]);
  const [numberList] = useState<number[]>([1, 2, 3]);
  const [itemsList] = useState<ListItems[]>([
    { a: "first", b: "typescript cheatsheet" },
    { a: "second", b: "Vlad's ts tasks" },
    { a: "third", b: "rtq query for proflorist" },
  ]);

  const renderStringItem = (item: string): React.ReactNode => (
    <span>{item}</span>
  );

  const renderNumberItem = (item: number): React.ReactNode => (
    <strong>{item}</strong>
  );

  const renderListItem = (item: ListItems): React.ReactNode => (
    <>
      <strong>{item.a}</strong>: <p>{item.b}</p>
    </>
  );

  return (
    <div>
      <h2>TypeScript React Generics Task</h2>
      <h3>String List:</h3>
      <GenericList items={stringList} renderItem={renderStringItem} />
      <h3>Number List:</h3>
      <GenericList items={numberList} renderItem={renderNumberItem} />
      <h3>Objects List:</h3>
      <GenericList items={itemsList} renderItem={renderListItem} />
    </div>
  );
};

export { TodoList };
