import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const PoliciesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-primary">Políticas</h1>

        <Card className="p-6">
          <Tabs defaultValue="privacy" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="privacy">Privacidade</TabsTrigger>
              <TabsTrigger value="terms">Termos de Uso</TabsTrigger>
              <TabsTrigger value="shipping">Envio</TabsTrigger>
              <TabsTrigger value="returns">Trocas e Devoluções</TabsTrigger>
            </TabsList>

            <TabsContent value="privacy" className="prose max-w-none mt-6">
              <h2 className="text-2xl font-bold mb-4">Política de Privacidade</h2>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <h3 className="text-xl font-bold mt-6 mb-2">Coleta de Dados</h3>
              <p className="text-muted-foreground">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabsContent>

            <TabsContent value="terms" className="prose max-w-none mt-6">
              <h2 className="text-2xl font-bold mb-4">Termos de Uso</h2>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </TabsContent>

            <TabsContent value="shipping" className="prose max-w-none mt-6">
              <h2 className="text-2xl font-bold mb-4">Política de Envio</h2>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </TabsContent>

            <TabsContent value="returns" className="prose max-w-none mt-6">
              <h2 className="text-2xl font-bold mb-4">Política de Trocas e Devoluções</h2>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};