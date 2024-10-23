import { Card } from "@/components/ui/card";

const brands = [
  { id: 1, name: "Apple", logo: "https://placehold.co/200x100" },
  { id: 2, name: "Samsung", logo: "https://placehold.co/200x100" },
  { id: 3, name: "Nike", logo: "https://placehold.co/200x100" },
  { id: 4, name: "Adidas", logo: "https://placehold.co/200x100" },
  { id: 5, name: "Dell", logo: "https://placehold.co/200x100" },
  { id: 6, name: "LG", logo: "https://placehold.co/200x100" },
];

export const BrandsSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {brands.map((brand) => (
        <Card
          key={brand.id}
          className="group p-4 flex items-center justify-center border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
        >
          <div className="relative w-full aspect-[2/1]">
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </Card>
      ))}
    </div>
  );
};