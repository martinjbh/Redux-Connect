
export const AgregarMovie = (movieNew) => {
    return (
        { type: "AGREGAR_PELICULA", movieNew: movieNew }
    )
}
export const ModificadorDePrecios = (id, movie) => {
    return (
        { type: "MODIFICAR_PRECIOS", id: id, movie: movie }
    )
}
export const Borrando = (id) => {
    return (
        { type: "BORRAR_PELICULA", id: id }
    )
}

