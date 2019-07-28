import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showSubTenant, fetchSubTenant, showBrand, getData } from '../reduxs/actions/action'

class SelectSubTenant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subTenants: [],
            subTenantId: '1',
        }
    }

    componentDidMount() {
        fetchSubTenant().then(res => {
            this.props.showSubTenant(res);
        })
    }


    handleChangeSubTenant = (e) => {
        const { value } = e.target;

        this.setState({
            subTenantId: value
        })
    }

    handleLoadBrand = () => {
        const { subTenantId } = this.state;
        console.log(subTenantId);
        this.props.getData(subTenantId);
    }

    renderOptions = () => {
        const { listSubTenant } = this.props;
        console.log(listSubTenant);

        return listSubTenant && listSubTenant.map(item => {
            return (
                <option key={item.id} value={item.id}>{item.name}</option>
            )
        })
    }

    render() {
        return (
            <div className="app-subtenant d-flex mt-3">
                <h5 className="mr-4">Select Sub-Tenant</h5>
                <select className="form-control col-2 mr-4" name="subtenant" id="subtenant" onChange={this.handleChangeSubTenant} value={this.state.subTenantId}>
                    {this.renderOptions()}
                </select>
                <button type="button" className="btn btn-secondary col-1" onClick={this.handleLoadBrand}>Load</button>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        listSubTenant: state.subTenant.listSubTenant
    };
};
const mapDispatchToProps = dispatch => {
    return {
        showSubTenant: payload => dispatch(showSubTenant(payload)),
        showBrand: payload => dispatch(showBrand(payload)),
        getData: subTenantId => dispatch(getData(subTenantId))
    };
};

// export default SelectSubTenant;
export default connect(mapStateToProps, mapDispatchToProps)(SelectSubTenant);