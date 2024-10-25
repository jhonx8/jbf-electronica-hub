import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const banners = [
  {
    id: 1,
    image: "https://placehold.co/1920x600",
    title: "Nova Coleção",
    description: "Confira as últimas tendências em moda",
  },
  {
    id: 2,
    image: "https://placehold.co/1920x600",
    title: "Ofertas Imperdíveis",
    description: "Até 50% de desconto em eletrônicos",
  },
  {
    id: 3,
    image: "https://placehold.co/1920x600",
    title: "Lançamentos",
    description: "Os melhores produtos acabaram de chegar",
  },
];

export const BannerCarousel = () => {
  return (
    <Carousel className="relative w-full">
      <CarouselContent>
        {banners.map((banner) => (
          <CarouselItem key={banner.id}>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden rounded-lg">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2 className="text-4xl font-bold mb-2 text-white">{banner.title}</h2>
                  <p className="text-xl text-white/90">{banner.description}</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
};