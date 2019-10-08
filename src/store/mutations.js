export default {
    nuevaCompra: (state, { precio }) => {
        state.compras = state.compras + 1
        state.costos = state.costos + precio
    },
    getPaises: (state, { paises }) => {
        state.paises = paises
    },
    setLikes: (state, { like }) => {
        if (like) state.likes++
        else state.likes--
    },
    clearStates: (state) => {
        state.compras = 0
        state.costos = 0
    }
}