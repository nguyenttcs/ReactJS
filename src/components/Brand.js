import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactFileReader from 'react-file-reader';
import FileReaderInput from 'react-file-reader-input';
import { showBrand, fetchBrand } from '../reduxs/actions/action';

class Brand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brands: [],
            url: ''
        }
    }

    componentDidMount() {
        fetchBrand().then(res => {
            this.props.showBrand(res);
        })
    }

    handleFiles = (files) => {
        console.log(files.base64)
        this.setState({
            url: files.base64
        })
    }

    renderOptions = () => {
        const { listBrand, subTenantId } = this.props;
        // console.log("Test SubtenantId: "+ subTenantId)
        // console.log(listBrand);

        return listBrand && listBrand.filter(item => item.subTenantId === parseInt(subTenantId, 10)).map(item => {
            return (
                <div key={item.id} className="brand-item">
                    <fieldset className="brand-border">
                        <legend className="brand-border">Brand BR1</legend>
                        <div className="brand-content row">
                            <label className="col-2 ml-3">Review</label>
                            <img className="col-3" src={item.url} alt="img1" />
                            <div className="col-6 d-flex align-items-center justify-content-center">
                                <div className="mr-3">
                                    <label htmlFor={`file-upload${item.id}`} className="custom-file-upload btn btn-outline-dark">
                                        Browser
                                    </label>
                                    <span className="file-selected"></span>
                                    {/* <input id="file-upload" type="file" onChange={this.onImageChange} value={this.state.url} /> */}
                                    <ReactFileReader fileTypes={[".png"]} base64={true} multipleFiles={false} handleFiles={this.handleFiles}>
                                        <input id={`file-upload${item.id}`} type="file" />
                                    </ReactFileReader>
                                </div>
                                <button type="button" className="btn btn-outline-dark mr-3">Reset</button>
                                <button type="button" className="btn btn-outline-dark">Apply</button>
                            </div>
                        </div></fieldset>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="app-brand">
                {this.renderOptions()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        listBrand: state.brand.listBrand,
        subTenantId: state.subTenantID.subTenantId
    };
};
const mapDispatchToProps = dispatch => {
    return {
        showBrand: payload => dispatch(showBrand(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Brand);