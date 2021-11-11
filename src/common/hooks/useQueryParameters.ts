import { useLocation } from 'react-router';

const useQueryParameters = (): URLSearchParams => new URLSearchParams(useLocation().search);

export default useQueryParameters;
