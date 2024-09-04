import SearchPage from "@/features/SearchPage";
import { useRouter } from "next/router";

const Search = () =>{ 
  const router = useRouter();
  const {name} = router.query;
  return (
    <>
      <SearchPage name={name}/>
    </>
  )
}
export default Search;
