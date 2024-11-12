import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";

export const CartPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary">Carrinho de Compras</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="p-6 space-y-6">
            {/* Example cart item */}
            <div className="flex items-center gap-4 border-b pb-6">
              <img src="https://placehold.co/100x100" alt="Product" className="rounded-lg w-24 h-24 object-cover" />
              <div className="flex-1">
                <h3 className="font-medium">Nome do Produto</h3>
                <p className="text-sm text-muted-foreground">Categoria</p>
                <div className="flex items-center gap-4 mt-2">
                  <Button variant="outline" size="icon">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span>1</span>
                  <Button variant="outline" size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="ml-auto text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">R$ 199,90</p>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>R$ 199,90</span>
              </div>
              <div className="flex justify-between">
                <span>Frete</span>
                <span className="text-green-600">Grátis</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t">
                <span>Total</span>
                <span>R$ 199,90</span>
              </div>
            </div>
            <Button asChild className="w-full bg-primary/90 hover:bg-primary">
              <Link to="/checkout">Finalizar Compra</Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};