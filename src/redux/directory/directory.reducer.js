const INITIAL_STATE = {
    sections : [
        {
          title: 'hats',
          imageUrl: 'https://images.vivino.com/thumbs/9tKfWxg7SKinNtAvrtndgA_pb_x600.png',
          id: 1,
          linkUrl: 'shop/hats'
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
          imageUrl: 'https://assets-global.website-files.com/5dd5d96cb04202979d27778b/5efccf988ca8df9a8d780f00_Feature%20image_2.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://cdn.shopify.com/s/files/1/2128/6147/articles/180327_frenchwine_2048x.jpg?v=1522132851',
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