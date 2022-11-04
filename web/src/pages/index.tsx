// interface ClienteProps {
//   id: string
//   name: string
//   phone: string
//   createdAt: Date
// }

// interface HomeProps {
//   count: number

// }
import Image from "next/image";
import appPreviewImg from '../assets/app-nlw-copa-preview.png';
import iconChecking from '../assets/icon-check.svg';
import logoImg from '../assets/logo.svg';
import usersAvatarExemplo from '../assets/users-avatar-example.png';


export default function Home() {
  return (

    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center">
      <main>
        <Image src={logoImg} alt="logo da aplicação" />

        <h1 className="mt-14 text-white text-5xl font-bold leading-tight"
        >Crie seu próprio bolão e compartilhe com seus amigos!</h1>

        <div className="mt-10 flex items-center gap-2">
          <Image src={usersAvatarExemplo} alt="Imagem de vários avatars" />
          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+12.362</span> Pessoas já estão usando
          </strong>
        </div>

        <form >
          <input type="text" required placeholder="Qual o nome de seu bolão?" />
          <button type="submit">Criar meu bolão</button>
        </form>

        <p>Após criar o seu bolão...</p>

        <div>
          <div>
            <Image src={iconChecking} alt="" />
            <div>
              <span>+2.203</span>
              <span>Bolões Criados</span>
            </div>
          </div>
          <div>
            <Image src={iconChecking} alt="" />
            <div>
              <span>+2.203</span>
              <span>Bolões Criados</span>

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


// export const getServerSideProps = async () => {
//   const response = await fetch('http://localhost:3333/pools/count')
//   const data = await response.json()

//   return {
//     props: {
//       count: data.count
//     }
//   }
// }