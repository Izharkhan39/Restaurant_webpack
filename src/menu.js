function openMenuContent(parentElement) {
  const menu = document.createElement("div");
  menu.classList.add("menu-container");

  // Menu Header
  const menuHeader = document.createElement("h1");
  menuHeader.textContent = "Our Menu";
  menuHeader.classList.add("menu-header");
  menu.appendChild(menuHeader);

  // Menu Categories
  const categories = [
    {
      name: "Starters",
      items: [
        {
          name: "Bruschetta",
          description:
            "Toasted bread topped with tomatoes, garlic, and fresh basil",
          price: "$8.50",
        },
        {
          name: "Calamari",
          description: "Crispy fried squid with lemon aioli",
          price: "$12.00",
        },
        {
          name: "Caprese Salad",
          description:
            "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze",
          price: "$10.50",
        },
      ],
    },
    {
      name: "Main Courses",
      items: [
        {
          name: "Spaghetti Carbonara",
          description:
            "Classic Roman pasta with eggs, cheese, pancetta, and black pepper",
          price: "$16.50",
        },
        {
          name: "Grilled Salmon",
          description:
            "Atlantic salmon with lemon butter sauce and seasonal vegetables",
          price: "$22.00",
        },
        {
          name: "Beef Tenderloin",
          description:
            "8oz grass-fed beef with red wine reduction and truffle mashed potatoes",
          price: "$28.50",
        },
        {
          name: "Mushroom Risotto",
          description: "Creamy arborio rice with wild mushrooms and parmesan",
          price: "$18.00",
        },
      ],
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Tiramisu",
          description:
            "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
          price: "$9.00",
        },
        {
          name: "Chocolate Lava Cake",
          description:
            "Warm chocolate cake with molten center and vanilla ice cream",
          price: "$10.50",
        },
        {
          name: "Panna Cotta",
          description: "Italian custard with berry compote",
          price: "$8.00",
        },
      ],
    },
  ];

  // Create menu sections
  categories.forEach((category) => {
    const section = document.createElement("div");
    section.classList.add("menu-section");

    const heading = document.createElement("h2");
    heading.textContent = category.name;
    heading.classList.add("menu-category");
    section.appendChild(heading);

    category.items.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("menu-item");

      const namePrice = document.createElement("div");
      namePrice.classList.add("name-price");

      const name = document.createElement("h3");
      name.textContent = item.name;

      const price = document.createElement("span");
      price.textContent = item.price;

      namePrice.appendChild(name);
      namePrice.appendChild(price);
      itemElement.appendChild(namePrice);

      const description = document.createElement("p");
      description.textContent = item.description;
      description.classList.add("description");
      itemElement.appendChild(description);

      section.appendChild(itemElement);
    });

    menu.appendChild(section);
  });

  parentElement.appendChild(menu);
  return menu;
}

export { openMenuContent };
