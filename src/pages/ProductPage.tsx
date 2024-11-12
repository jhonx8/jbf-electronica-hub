import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Share2, ShoppingCart, Star } from "lucide-react";

export const ProductPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <Card className="overflow-hidden">
            <img 
              src="https://placehold.co/600x400" 
              alt="Product" 
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform"
            />
          </Card>
          <div className="grid grid-cols-4 gap-4">
            {[1,2,3,4].map((i) => (
              <Card key={i} className="overflow-hidden cursor-pointer hover:ring-2 ring-primary transition-all">
                <img 
                  src={`https://placehold.co/150x150`}
                  alt={`Thumbnail ${i}`}
                  className="w-full h-[100px] object-cover"
                />
              </Card>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Nome do Produto</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(128 avaliações)</span>
            </div>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Card className="p-6">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-sm text-muted-foreground line-through">R$ 299,90</span>
              <span className="text-3xl font-bold text-primary">R$ 199,90</span>
            </div>
            
            <div className="space-y-4">
              <Button className="w-full bg-primary/90 hover:bg-primary">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Adicionar ao Carrinho
              </Button>
              
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1">
                  <Heart className="mr-2 h-4 w-4" />
                  Favoritar
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="mr-2 h-4 w-4" />
                  Compartilhar
                </Button>
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Detalhes do Produto</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Categoria:</span>
                <p>Eletrônicos</p>
              </div>
              <div>
                <span className="text-muted-foreground">Marca:</span>
                <p>Nome da Marca</p>
              </div>
              <div>
                <span className="text-muted-foreground">Material:</span>
                <p>Premium</p>
              </div>
              <div>
                <span className="text-muted-foreground">Disponibilidade:</span>
                <p className="text-green-600">Em Estoque</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};