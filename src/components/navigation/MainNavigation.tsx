import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sparkles, Laptop, Home, Shirt, ShoppingBag, Package } from "lucide-react";

const categories = [
  {
    title: "Lingerie",
    icon: <Sparkles className="h-4 w-4" />,
    subcategories: ["Conjuntos", "Plus Size", "Moda Íntima", "Pijamas", "Promoções"],
  },
  {
    title: "Eletrônicos",
    icon: <Laptop className="h-4 w-4" />,
    subcategories: ["Smartphones", "Tablets", "Notebooks", "Acessórios"],
  },
  {
    title: "Eletrodomésticos",
    icon: <Home className="h-4 w-4" />,
    subcategories: ["Geladeiras", "Fogões", "Máquinas de Lavar", "Microondas"],
  },
  {
    title: "Roupas Masculinas",
    icon: <Shirt className="h-4 w-4" />,
    subcategories: ["Camisas", "Calças", "Bermudas", "Acessórios"],
  },
  {
    title: "Roupas Femininas",
    icon: <ShoppingBag className="h-4 w-4" />,
    subcategories: ["Vestidos", "Blusas", "Calças", "Saias"],
  },
  {
    title: "Calçados",
    icon: <Package className="h-4 w-4" />,
    subcategories: ["Masculino", "Feminino", "Infantil", "Esportivo"],
  },
];

export const MainNavigation = () => {
  return (
    <NavigationMenu className="h-12">
      <NavigationMenuList className="gap-2">
        {categories.map((category) => (
          <NavigationMenuItem key={category.title}>
            <NavigationMenuTrigger className="bg-transparent hover:bg-primary/5 data-[state=open]:bg-primary/5">
              <span className="flex items-center gap-2">
                {category.icon}
                {category.title}
              </span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={`/${category.title.toLowerCase()}/${subcategory.toLowerCase().replace(" ", "-")}`}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{subcategory}</div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};