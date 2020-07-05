import React, { Component } from "react";
import CardItem from '../../components/UI/Card/CardItem'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'
import axios from '../../axios-orders'


class Menus extends Component {

    componentDidMount() {
        this.props.onFetchCategories()
    }

    render() {
        let categories = <Spinner />
        if (!this.props.loading) {
            categories = (this.props.categories.map(item => (

                <CardItem
                    name={item.name}
                    img={item.img}
                    description={item.description} />)
            ))
        }
        return (
            <div>
                {categories}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.menus.categories,
        loading: state.menus.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchCategories: () => dispatch(actions.fetchCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Menus, axios))
