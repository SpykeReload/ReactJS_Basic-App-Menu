import React from 'react';
import {Link} from 'react-router-dom';

function ProductCard(props) {
    return(
        <div class="border mb-4 rounded overflow-hidden">
            <Link to={`/products/${props.product.id}`}>
                <div 
                    style={{
                        'backgroundImage': `url('${props.product.images[0].imageUrl}')`,
                    }}
                    class="w-full h-64 bg-blue bg-cover"
                >
                </div>
            </Link>
            <div class="p-3">
                    <h3 class="font-bold text-xl mb-3">
                        <Link to={`/products/${props.product.id}`}>
                            { props.product.name }
                        </Link>
                    </h3>
                    <div class="font-bold mb-3">
                        $ { props.product.price }
                    </div>
                    <div class="mb-3">
                        { props.product.description }
                    </div>
                    <Link to={`/products/${props.product.id}`}
                        class="bg-blue-500 text-white p-2 flex justify-center w-full"
                    >
                            View
                    </Link>
            </div>
        </div>
    )
}

export default ProductCard;