// interface ClienteProps {
//   id: string
//   name: string
//   phone: string
//   createdAt: Date
// }

interface HomeProps {
  poolCount: number
  guessCount: number
  userCount: number

}
import Image from "next/image";
import appPreviewImg from '../assets/app-nlw-copa-preview.png';
import iconChecking from '../assets/icon-check.svg';
import logoImg from '../assets/logo.svg';
import usersAvatarExemplo from '../assets/users-avatar-example.png';
import { api } from "../lib/axios";


export default function Home(props: HomeProps) {
  return (

    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center">
      <main>
        <Image src={logoImg} alt="logo da aplicação" />

        <h1 className="mt-8 text-white text-4xl font-bold leading-tight"
        >Crie seu próprio bolão e compartilhe com seus amigos!</h1>

        <div className="mt-6 flex items-center gap-2">
          <Image src={usersAvatarExemplo} alt="Imagem de vários avatars" />
          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">{props.userCount}</span> Pessoas já estão usando
          </strong>
        </div>

        <form className="mt-10 flex gap-2">
          <input
            className="flex-1 px-6 py-4 rounded bg-gray-800 border-gray-600 text-sm"
            type="text"
            required placeholder="Qual o nome de seu bolão?" />
          <button
            className="bg-btYellow-500 px-6 py-4 
            rounded text-gray-900 hover:bg-btYellow-700 font-bold text-sm uppercase"
            type="submit"
          >Criar meu bolão
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed" >
          Após criar o seu bolão você receberá um código único que você poderá usar para convidar outras pessoas</p>

        <div
          className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100">
          <div className="flex items-center gap-6 mb-10">
            <Image src={iconChecking} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">{props.poolCount}</span>
              <span className="text-sm">Bolões Criados</span>
            </div>
          </div>

          <div className="w-px h-14 bg-gray-600" />

          <div className="flex items-center gap-6 mb-10">
            <Image src={iconChecking} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">{props.guessCount}</span>
              <span className="text-sm">Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>

      <Image src={appPreviewImg}
        alt="Imagem de dois celulares"
        quality={100}
      />
    </div>


  );
}


export const getServerSideProps = async () => {

  const [poolContResponse, guessContResponse, userContResponse] = await Promise.all([
    api.get('pools/count'),
    api.get('guesses/count'),
    api.get('users/count')


  ])


  return {
    props: {
      poolCount: poolContResponse.data.count,
      guessCount: guessContResponse.data.count,
      userCount: userContResponse.data.count
    }
  }
}