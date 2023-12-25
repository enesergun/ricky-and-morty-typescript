const executeFavorite = (alreadyFavorite: any, addToFavorites: any, removeFromFavorites: any, item: any) => {
    if (alreadyFavorite) {
        console.log('here')
        removeFromFavorites(item)
    } else {
        console.log('here 2')
        addToFavorites(item)
    }

}
export default executeFavorite