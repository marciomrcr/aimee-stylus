interface ClienteProps {
  id: string
  name: string
  phone: string
  createdAt: Date
}

interface HomeProps {
  count: number

}

export default function Home(props: HomeProps) {
  return (

    <h1>Contagem dos Bolões: {props.count}</h1>


  );
}


export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()

  return {
    props: {
      count: data.count
    }
  }
}