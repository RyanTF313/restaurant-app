import Card from "./Card";

type MenuItemProps = {
  items: MenuItem[];
};

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

function MenuItem(props: MenuItemProps) {
  const { items } = props;
  return (
    <>
      <div>MenuItems</div>

      {items.map((item) => (
        <Card key={item.id} title={item.name} description={item.description} />
      ))}
    </>
  );
}

export default MenuItem;
