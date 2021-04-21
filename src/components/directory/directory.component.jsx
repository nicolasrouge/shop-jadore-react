import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
 
import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {

            sections : [
                {
                  title: 'hats',
                  imageUrl: 'https://images.vivino.com/thumbs/9tKfWxg7SKinNtAvrtndgA_pb_x600.png',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://assets-global.website-files.com/5dd5d96cb04202979d27778b/5efccf988ca8df9a8d780f00_Feature%20image_2.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://cdn.shopify.com/s/files/1/2128/6147/articles/180327_frenchwine_2048x.jpg?v=1522132851',
                  size: 'large',
                  id: 5,
                  linkUrl: 'mens'
                }
              ]
        }

    }
    render(){
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(( {id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;