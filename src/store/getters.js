export default {
    promedio: state => {
        if (state.compras === 0) {
            return 0
        }
        return (state.costos / state.compras)
    }
}