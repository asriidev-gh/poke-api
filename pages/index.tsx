import PokemonsList from '@/components/PokemonsList'

export default function Home() {
  return (
    <main
      className="
        container 
        mx-auto
        flex-column
        justify-center
			  text-center
      "
    >  
      <PokemonsList />
    </main>
  )
}