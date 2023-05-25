import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventosState } from "../atom"
import { obterID } from "../../util";

const useAdicionarEventos = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
    return (evento: IEvento) => {
        const hoje = new Date();
        if (evento.inicio < hoje) {
            throw new Error("Eventos não podem ser cadastrados com a data menor que a atual")
        }
        evento.id = obterID();
        return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
    }
}

export default useAdicionarEventos