import { Button } from "@/components/ui/button";
import { PiForkKnifeFill } from "react-icons/pi";
import FoodCard from "./components/FoodCard";
import { Input } from "@/components/ui/input";
export default function LandingPage() {
  return (
    <div className="p-4 md:px-12 overflow-x-hidden">
      <header className="flex justify-between">
        <p className="flex items-center justify-start w-1/2 gap-2">
          <PiForkKnifeFill className="text-redColor text-5xl" />
          Bem-vindo ao FoodSpot
        </p>
        <Button className="bg-redColor hover:bg-red-600">Log-in</Button>
      </header>
      <main className="flex flex-col my-12">
        <section className="flex flex-col md:flex-row gap-2">
          <div className="w-full lg:w-1/2">
              <h1 className="text-4xl">
                Descubra, peça e experimente pratos únicos
              </h1>
              <p className="text-lg">
                Mais de 7.000 restaurantes e mais de 1.000 chefes independentes no
                FoodSpot
              </p>
              <div className="flex gap-3 justify-center sm:justify-start mt-8">
                <Button className="bg-redColor hover:bg-red-600">
                  Comece a explorar
                </Button>
                <Button className="bg-redColor hover:bg-red-600">
                  Adicionar restaurante
                </Button>
              </div>
              <div className="flex mt-16 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <p className="font-[500] text-2xl">7k +</p>
                  <p>Pratos</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-[500] text-2xl">1k +</p>
                  <p>Restaurantes</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-[500] text-2xl">250k +</p>
                  <p>Usuários ativos</p>
                </div>
              </div>
          </div>
          <div className="hidden lg:flex w-1/2 justify-center">
            <div className="w-1/2 h-full flex flex-col border pb-3 rounded-2xl">
                <img src="/landing-side-photo.png" alt="side-photo" />
                <div className="flex justify-around">
                    <div className="my-3">
                        <p className="text-xs">Nota</p>
                        <p className="text-sm">4.7</p>
                    </div>
                    <div className="my-3">
                        <p className="text-xs">Tempo estimado</p>
                        <p className="text-sm">30-45 minutos</p>
                    </div>
                </div>
                    <div className="flex justify-center gap-3">
                        <Button className="bg-redColor hover:bg-red-600">Adicionar ao carrinho</Button>
                        <Button className="bg-redColor hover:bg-red-600">Ver menu</Button>
                    </div>

            </div>
          </div>
        </section>
        <section className="my-12">
          <h1 className="text-lg font-[500]">Restaurantes em destaque</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
            <FoodCard
              topImage="/restaurant1/pizza.webp"
              followers={19253}
              restaurantName="Sapore di Pizza"
              restaurantUsername="SaporePizza"
              speciality="Pizza"
              restaurantPhoto="/restaurant1/avatar1.webp"
              dishOne="/restaurant1/dish1.webp"
              dishTwo="/restaurant1/dish2.webp"
              dishThree="/restaurant1/dish3.webp"
            />

            <FoodCard
              topImage="/restaurant2/esfiha.webp"
              followers={2327}
              restaurantName="Esfiha Express"
              restaurantUsername="EsfihaExp"
              speciality="Esfiha"
              restaurantPhoto="/restaurant2/avatar2.webp"
              dishOne="/restaurant2/dish1.webp"
              dishTwo="/restaurant2/dish2.webp"
              dishThree="/restaurant2/dish3.webp"
            />

            <FoodCard
              topImage="/restaurant3/burguer.webp"
              followers={92621}
              restaurantName="Grill & Burger"
              restaurantUsername="Grill&Burger"
              speciality="Hambúrguer"
              restaurantPhoto="/restaurant3/avatar3.webp"
              dishOne="/restaurant3/dish1.webp"
              dishTwo="/restaurant3/dish2.webp"
              dishThree="/restaurant3/dish3.webp"
            />

            <FoodCard
              topImage="/restaurant4/pastel.webp"
              followers={75629}
              restaurantName="Cantinho do Pastel"
              restaurantUsername="CantinhoDoPastel"
              speciality="Pastel"
              restaurantPhoto="/restaurant4/avatar4.webp"
              dishOne="/restaurant4/dish1.webp"
              dishTwo="/restaurant4/dish2.webp"
              dishThree="/restaurant4/dish3.webp"
            />
          </div>
        </section>
        <section className="my-12 flex">
          <div className="hidden md:block w-1/2">
            <img src="/market.png" alt="market" className="w-full h-full" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-12 items-center justify-center">
            <h1 className="text-2xl font-[500]">
              Experimente a comida dos melhores restaurantes da região com
              FoodSpot.
            </h1>
            <div className="flex w-full">
              <Input placeholder="Insira seu email aqui" className="p-4" />
              <Button className="bg-redColor hover:bg-red-600">
                Inscreva-se
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-between mt-4 text-center">
        <p className="font-semibold text-lg">FoodSpot</p>

        
        <p className="text-lg">© FoodSpot {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
