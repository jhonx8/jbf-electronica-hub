import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-primary text-center">Contato</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 text-center">
            <Phone className="h-6 w-6 mx-auto mb-4 text-primary" />
            <h3 className="font-medium mb-2">Telefone</h3>
            <p className="text-sm text-muted-foreground">(11) 99999-9999</p>
          
          </Card>
          
          <Card className="p-6 text-center">
            <Mail className="h-6 w-6 mx-auto mb-4 text-primary" />
            <h3 className="font-medium mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">contato@empresa.com</p>
          </Card>
          
          <Card className="p-6 text-center">
            <MapPin className="h-6 w-6 mx-auto mb-4 text-primary" />
            <h3 className="font-medium mb-2">Endereço</h3>
            <p className="text-sm text-muted-foreground">
              Rua Example, 123<br />
              São Paulo - SP
            </p>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Seu nome" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Assunto</Label>
              <Input id="subject" placeholder="Assunto da mensagem" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea 
                id="message" 
                placeholder="Digite sua mensagem aqui..." 
                className="min-h-[150px]"
              />
            </div>

            <Button className="w-full md:w-auto">
              Enviar Mensagem
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};