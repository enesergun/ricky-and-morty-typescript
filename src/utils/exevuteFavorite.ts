const executeFavorite = (alreadyFavorite: any, addToFavorites: any, removeFromFavorites: any, item: any) => {
    if (alreadyFavorite) {        
        removeFromFavorites(item)
    } else {        
        addToFavorites(item)
    }

}
export default executeFavorite