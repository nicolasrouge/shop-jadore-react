import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCollectionsItems, selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import  CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.style.scss';

const CollectionsOverView = ({collections}) => (
    <div className='collections-overview'>
        
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}

    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverView);