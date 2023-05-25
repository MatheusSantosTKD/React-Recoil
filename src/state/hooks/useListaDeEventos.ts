import { useRecoilValue } from "recoil";
import { eventosFiltradosState } from "../selector";

const useListaDeEvento = () => {
    return useRecoilValue(eventosFiltradosState);
} 

export default useListaDeEvento;