import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Share2, ShoppingCart, Star } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

interface ProductAttribute {
  type: string;
  options: string[];
}

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: "shoes" | "clothing" | "appliances";
  attributes: {
    colors?: string[];
    sizes?: string[];
    types?: string[];
  };
  images: string[];
}

// Simulated API call - replace with actual API integration
const fetchProduct = async (id: string): Promise<Product> => {
  // This is a mock response - replace with actual API call
  return {
    id,
    name: "Produto Exemplo",
    price: 299.90,
    description: "Descrição detalhada do produto...",
    category: "shoes",
    attributes: {
      colors: ["Preto", "Branco", "Azul"],
      sizes: ["36", "37", "38", "39", "40"],
      types: ["Casual", "Esportivo", "Social"]
    },
    images: ["https://placehold.co/600x400"]
  };
};

export const ProductPage = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id || ""),
    enabled: !!id
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-[400px] bg-muted rounded-lg mb-4"></div>
          <div className="h-8 bg-muted rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-muted rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-muted rounded w-1/4"></div>
        </div>
      </div>
    );
  }

  if (!product) return null;

  const renderAttributes = () => {
    const attributeComponents = [];

    if (product.attributes.colors?.length) {
      attributeComponents.push(
        <div key="color" className="space-y-2">
          <label className="text-sm font-medium">Cor</label>
          <Select value={selectedColor} onValueChange={setSelectedColor}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione a cor" />
            </SelectTrigger>
            <SelectContent>
              {product.attributes.colors.map((color) => (
                <SelectItem key={color} value={color}>
                  {color}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );
    }

    if (product.category === "shoes" || product.category === "clothing") {
      attributeComponents.push(
        <div key="size" className="space-y-2">
          <label className="text-sm font-medium">Tamanho</label>
          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o tamanho" />
            </SelectTrigger>
            <SelectContent>
              {product.attributes.sizes?.map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );
    }

    if (product.category === "shoes" && product.attributes.types?.length) {
      attributeComponents.push(
        <div key="type" className="space-y-2">
          <label className="text-sm font-medium">Tipo</label>
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o tipo" />
            </SelectTrigger>
            <SelectContent>
              {product.attributes.types.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );
    }

    return attributeComponents;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <Card className="overflow-hidden">
            <img 
              src={product.images[0]}
              alt={product.name}
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform"
            />
          </Card>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(128 avaliações)</span>
            </div>
            <p className="text-muted-foreground">
              {product.description}
            </p>
          </div>

          <Card className="p-6">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold text-primary">
                R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </span>
            </div>
            
            <div className="space-y-6">
              {/* Dynamic Attributes */}
              {renderAttributes()}
              
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
        </div>
      </div>
    </div>
  );
};