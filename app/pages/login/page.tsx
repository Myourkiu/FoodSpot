/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useState } from "react";
import { PiForkKnifeFill } from "react-icons/pi";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/app/utils/loginSchema";
import { makeServer } from "@/api/mirage";
import axiosInstance from "@/api/axiosInstance";
import { useRouter } from "next/navigation";
import {toast} from "react-toastify"
type LoginFormInputs = z.infer<typeof loginSchema>;
makeServer()
export default function Login() {
  const [defaultUserName, setDefaultUserName] = useState("customer");
  const [defaultPassword, setDefaultPassword] = useState("customer123");
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userName: defaultUserName,
      password: defaultPassword,
    }
  });

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      // Faz a requisição ao endpoint /api/login
      const response = await axiosInstance.post('/login', {
        username: data.userName,
        password: data.password,
      });

      if(response.data.userType == "customer") router.push("/pages/customer/home")
        else if(response.data.userType == "admin") router.push("/pages/admin/home")
    
      toast.success("Login bem sucedido")
      
    } catch (err) {
        toast.error("Algo deu errado, tente novamente.")
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 md:p-10">
        <div className="flex justify-center items-center mb-8">
          <PiForkKnifeFill className="text-redColor text-4xl" />
          <h1 className="text-2xl font-semibold text-gray-800 ml-2">FoodSpot</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="username">
              Nome de usuário
            </label>
            <input
              type="text"
              id="username"
              placeholder="Insira seu nome de usuário"
              {...register("userName")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.userName && <p className="text-red-600 text-sm mt-1">{errors.userName.message}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Senha
            </label>
            <input
              type="password"
              id="password"
              placeholder="Insira sua senha"
              {...register("password")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-redColor text-white rounded-md hover:bg-red-700 transition-colors font-semibold"
          >
            Login
          </button>
        </form>

        <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
          <a href="#" className="hover:underline">
            Esqueceu a senha?
          </a>
          <a href="#" className="hover:underline">
            Cadastre-se
          </a>
        </div>
      </div>
    </div>
  );
}
