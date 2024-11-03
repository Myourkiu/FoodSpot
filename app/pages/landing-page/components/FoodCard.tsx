/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
interface FoodCardProps{
    topImage: string,
    restaurantPhoto: string,
    restaurantName:string,
    restaurantUsername: string,
    dishOne: string,
    dishTwo: string,
    dishThree: string,
    speciality: string,
    followers:number,

}
export default function FoodCard({topImage, restaurantPhoto, dishOne, dishTwo, dishThree, followers, restaurantName, restaurantUsername, speciality} : FoodCardProps) {
    return (
        <div className="flex items-center justify-center">
  <div className="max-w-xs min-w-[300px] rounded-lg overflow-hidden shadow-lg bg-bgColor mx-auto">
    {/* Image Section */}
    <div className="relative h-40 w-full">
      <img
        src={topImage}
        alt="Chef's dish"
        className="object-cover h-full w-full rounded-t-lg"
      />
    </div>

    {/* Content Section */}
    <div className="p-4">
      {/* Profile Section */}
      <div className="flex items-center space-x-3">
        <img
          src={restaurantPhoto}
          alt="Chef Avatar"
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{restaurantName}</h2>
          <p className="text-sm text-gray-500">@{restaurantUsername}</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-between mt-4 text-gray-700">
        <div className="text-center">
          <p className="text-xs">Especialidade</p>
          <p className="font-semibold text-sm">{speciality}</p>
        </div>
        <div className="text-center">
          <p className="text-xs">Seguidores</p>
          <p className="font-semibold text-sm">{followers!.toLocaleString("pt-BR")}</p>
        </div>
        <Button className="h-8 rounded-md bg-white text-black bg-bgColor hover:bg-[#DBDBDB]">+ Seguir</Button>
      </div>

      {/* Gallery Section */}
      <div className="mt-4 flex justify-center gap-2">
        <img
          src={dishOne}
          alt="Food item 1"
          className="w-1/3 h-16 object-cover rounded-md"
        />
        <img
          src={dishTwo}
          alt="Food item 2"
          className="w-1/3 h-16 object-cover rounded-md"
        />
        <img
          src={dishThree}
          alt="Food item 3"
          className="w-1/3 h-16 object-cover rounded-md"
        />
      </div>
    </div>
  </div>
</div>

    )
}