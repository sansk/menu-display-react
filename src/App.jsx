import { useState } from "react";
import { Title } from "./title";
import { Categories } from "./categories";
import { Menu } from "./menu";
import menu from "./data";

const uniqueCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [allCategories, setAllCategories] = useState(uniqueCategories);

  const filterCategory = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }

    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories
          allCategories={allCategories}
          filterCategory={filterCategory}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;