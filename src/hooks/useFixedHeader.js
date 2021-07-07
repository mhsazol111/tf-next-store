import { useContext } from 'react';
import { FixedHeaderContext } from '../context/FixedHeaderContext';

const useFixedHeader = () => useContext(FixedHeaderContext);
export default useFixedHeader;
