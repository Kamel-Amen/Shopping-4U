import React from 'react'
import Navbar from './Navbar'
import getProducts from './../data/productsData'
import cart from '../img/Icons/shopping_cart.svg'
import cancel from '../img/Icons/close.svg'
import remove from '../img/Icons/trash.svg'
import { v4 as uuidv4 } from 'uuid'

class Products extends React.Component {
    state = {
        products: getProducts(),
        boughtItems: [],
        total: 0,
        toggle: false
    }

    addData = () => {
        let products = [...this.state.products];
        products.push(this.props.location.state);
        this.setState({ products });
    }

    addToCart = item => {
        let { total, boughtItems } = this.state;
        total = total + item.price;
        this.setState({ boughtItems: [...boughtItems, item], total: total })
    }

    handleDelete = item => {
        let { boughtItems, total } = this.state;
        const index = boughtItems.indexOf(item);
        boughtItems.splice(index, 1);
        total = total - item.price;
        this.setState({ boughtItems: [...boughtItems], total: total })
    }

    toggleCart = e => {
        console.log(e.currentTarget.parentNode)
        if (!this.state.toggle) {
            e.currentTarget.parentNode.classList.toggle("cartToggle");
            this.setState({ toggle: false });
        } else {
            e.currentTarget.parentNode.classList.toggle("cartToggle");
            this.setState({ toggle: true });
        }
    }

    render() {
        return (
            <div className="products position-relative">
                <Navbar />
                <div className="container pt-5 pb-3">
                    {this.state.products.map(p => {
                        return (
                            <div key={p.name} className="card d-inline-block me-3 mb-4 overflow-hidden">
                                <img src={p.img} className="card-img-top" alt="img" />
                                <div className="card-body">
                                    <h5 className="card-title float-start">{p.name}</h5>
                                    <h5 className="card-title float-end">{p.price}$</h5>
                                    <div className="clearFix"></div>
                                    <div className="card-text position-relative">
                                        <p className="w-75 float-start">{p.description}</p>
                                        <button className="btn btn-danger p-4 fs-4 position-absolute" onClick={() => this.addToCart(p)}>Buy</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <div className="cart position-absolute top-0 start-0 overflow-hidden">
                        <hr />
                        <img className="pointer position-relative cartIcon" onClick={this.toggleCart} src={cart} alt="cart" />
                        <img className="pointer position-relative cancel" onClick={this.toggleCart} src={cancel} alt="cancel" />
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Delete</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.boughtItems.map(item => {
                                    return (
                                        <tr key={uuidv4()}>
                                            <th scope="row">{item.name}</th>
                                            <td>{item.price}$</td>
                                            <td>
                                                <img onClick={() => this.handleDelete(item)} className="mx-2 pointer" src={remove} alt="img" />
                                            </td>
                                            <td>{this.state.total}$</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;