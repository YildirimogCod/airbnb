import { Input } from "@/components/ui/input";

const SearchComponent = () => {
  return (
    <div>
      <Input
        type="text"
        placeholder="Search"
        className=" border p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-96"
      />
    </div>
  );
};

export default SearchComponent;
