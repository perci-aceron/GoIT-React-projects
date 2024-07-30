import { Input } from 'components/Styles/Element.styled';

const SearchInput = () => (
  <Input
    type="text"
    name="movieName"
    pattern="[a-zA-Z0-9]+"
    title="May contain only letters, apostrophe, dash and spaces. For example moon"
    required
    autoComplete="off"
    autoFocus
    placeholder="Search movie..."
  />
);

export default SearchInput;
