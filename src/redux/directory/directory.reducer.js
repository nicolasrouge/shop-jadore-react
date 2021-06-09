const INITIAL_STATE = {
    sections : [
        {
          title: 'bookmarks',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/jadore-db.appspot.com/o/collectionBookmark.jpeg?alt=media&token=3ebe9ca8-b55f-4039-9bae-7b47bdba7d4b',
          id: 1,
          linkUrl: 'shop/bookmarks'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://www.apetogentleman.com/wp-content/uploads/2018/06/top-male-models-1160x677.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;