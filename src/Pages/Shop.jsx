import Hero from "../Components/Hero/Hero"
import NewCollections from "../Components/NewCollections/NewCollections"
import Newsletter from "../Components/NewsLetter/Newsletter"
import Offers from "../Components/Offers/Offers"
import Popular from "../Components/Popular/Popular"


export const Shop = () => {
  return (
    <div>
        <Hero></Hero>
        <Popular></Popular>
        <Offers></Offers>
        <NewCollections></NewCollections>
        <Newsletter></Newsletter>
    </div>
  )
}
