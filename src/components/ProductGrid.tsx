import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="group overflow-hidden border-primary/20 hover:border-primary/50 transition-colors">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="p-4">
            <h3 className="font-medium mb-2">{product.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {product.category}
            </p>
            <p className="text-lg font-bold text-primary">
              R$ {product.price.toLocaleString("pt-BR")}
            </p>
            <Button className="w-full mt-4 bg-primary/90 hover:bg-primary shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40">
              Adicionar ao Carrinho
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};