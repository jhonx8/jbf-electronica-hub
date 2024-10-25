import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

export const MainLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link to="/" className="text-3xl font-bold text-primary relative group">
              <span className="relative z-10">JBF Vendas</span>
              <span className="absolute inset-0 bg-primary/20 blur-lg group-hover:bg-primary/30 transition-all duration-300"></span>
            </Link>
            <div className="flex items-center gap-2 w-full md:w-1/2">
              <Input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-primary/20 focus-visible:ring-primary/50"
              />
              <Button size="icon" variant="outline" className="border-primary/20 hover:border-primary/50">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <nav className="flex items-center gap-4">
              <Button variant="ghost" className="hover:bg-primary/10">Login</Button>
              <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                Carrinho (0)
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-muted py-8 mt-8 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-primary">Sobre a JBF Vendas</h3>
              <p className="text-sm text-muted-foreground">
                Sua loja online completa para eletrônicos, moda e muito mais.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-primary">Contato</h3>
              <p className="text-sm text-muted-foreground">
                Email: contato@jbfvendas.com
                <br />
                Telefone: (11) 1234-5678
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-primary">Redes Sociais</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary/50">
                  Instagram
                </Button>
                <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary/50">
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};