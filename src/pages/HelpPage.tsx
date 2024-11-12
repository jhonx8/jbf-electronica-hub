import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const HelpPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-primary text-center">
          Como podemos ajudar?
        </h1>

        <div className="relative mb-8">
          <Input 
            placeholder="Busque sua dúvida aqui..." 
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="font-medium">Pedidos</h3>
            <p className="text-sm text-muted-foreground">Rastreamento e status</p>
          </Card>
          <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="font-medium">Trocas</h3>
            <p className="text-sm text-muted-foreground">Política e processos</p>
          </Card>
          <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="font-medium">Pagamentos</h3>
            <p className="text-sm text-muted-foreground">Métodos e problemas</p>
          </Card>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Perguntas Frequentes</h2>
          
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Como rastrear meu pedido?</AccordionTrigger>
              <AccordionContent>
                Você pode rastrear seu pedido através do código de rastreamento enviado por email ou acessando a área "Meus Pedidos" no seu perfil.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Qual o prazo de entrega?</AccordionTrigger>
              <AccordionContent>
                O prazo de entrega varia de acordo com a sua localização e o método de envio escolhido. Em geral, o prazo é de 3 a 7 dias úteis.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Como solicitar uma troca?</AccordionTrigger>
              <AccordionContent>
                Para solicitar uma troca, acesse a área "Meus Pedidos" e selecione o pedido desejado. Clique em "Solicitar Troca" e siga as instruções.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Quais são as formas de pagamento?</AccordionTrigger>
              <AccordionContent>
                Aceitamos cartões de crédito, débito, PIX e boleto bancário.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">Não encontrou o que procurava?</p>
          <Button>Fale Conosco</Button>
        </div>
      </div>
    </div>
  );
};