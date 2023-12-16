interface GenericListProps<T> {
  items: T[]; // A list of items of type T
  renderItem: (item: T) => React.ReactNode; // A function that renders each item
}

function GenericList<T>(props: GenericListProps<T>) {
  const { items, renderItem } = props;
  const itemsList: React.ReactNode[] = items.map((el) => {
    return <li>{renderItem(el)}</li>;
  });

  return <ul>{itemsList}</ul>;
}

export { GenericList };
