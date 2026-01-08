interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  return (
    <section className="menu">
      <h2>Menu</h2>
      <div className="menu-items">{/* Add menu items here */}</div>
    </section>
  );
};

export default Menu;
