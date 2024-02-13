import React from 'react';
import BasicExample from './item';


function Products() {
    
    return (
        <div className='container product'>
            <h2 className='text-center text-success text-uppercase'>This is a Product Page</h2>
            <div className='row mt-1 '>
                <div className='col-lg-4 p-4'>
                    <BasicExample
                        title='Card Title'
                        imageSrc='https://picsum.photos/300/200'
                        description=' Some quick example text to build on the card title and make up the
          bulk of the cards content.'
                        price='$99' />
                </div>
                <div className='col-lg-4 p-4'>
                    <BasicExample
                        title='Card Title'
                        imageSrc='https://picsum.photos/300/200'
                        description=' Some quick example text to build on the card title and make up the
          bulk of the cards content.'
                        price='$99' />
                </div>
                <div className='col-lg-4 p-4'>
                    <BasicExample
                        title='Card Title'
                        imageSrc='https://picsum.photos/300/200'
                        description=' Some quick example text to build on the card title and make up the
          bulk of the cards content.'
                        price='$99' />
                </div>
                
                

            </div>

        </div>
    )
}
export default Products;