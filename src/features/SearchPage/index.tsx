import UserInfo from "@/components/UserInfo";

interface DataProps {
  name: any;
}

const SearchPage = ({ name }: DataProps) => {  
  return (
    <>
      <UserInfo name={name} />
    </>
  );
};

export default SearchPage;
