import React, { Component } from 'react';


 let styles = {
        listStyleType: 'none'
    }

class CategoryList extends Component {

    render() {
        return(

            <div className="category">
                <ul style={styles}>
                    <li><button className="btn btn-default btn-sm">Clothes</button></li>
                    <li><button className="btn btn-default btn-sm">Food</button></li>
                    <li><button className="btn btn-default btn-sm">Games & Electronics</button></li>
                    <li><button className="btn btn-default btn-sm">Outdoors</button></li>
                    <li><button className="btn btn-default btn-sm">Software</button></li>
                    <li><button className="btn btn-default btn-sm">Travel</button></li>
                    <li><button className="btn btn-default btn-sm">Movies</button></li>
                    <li><button className="btn btn-default btn-sm">Automotive</button></li>
                    <li><button className="btn btn-default btn-sm">Toys</button></li>
                    <li><button className="btn btn-default btn-sm">Sports</button></li>
                </ul>
            </div>
        )
    }
}

export default CategoryList;