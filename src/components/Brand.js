import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showBrand, fetchBrand } from '../reduxs/actions/action';
import $ from 'jquery'

class Brand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: null,
            previewUrl: '',
        }
    }

    componentDidMount() {
        fetchBrand().then(res => {
            this.props.showBrand(res);
        })
    }

    handleBrowser = (e) => {
        // console.log(e);
        this.setState({
            key: e,
            previewUrl: ''
        })

    }

    onChange = (e) => {
        let files = e.target.files;
        // console.log(files);
        let reader = new FileReader();
        reader.onload = r => {
            // console.log(r.target.result);
            this.setState({
                previewUrl: r.target.result
            })
        };
        reader.readAsDataURL(files[0]);
    }

    handleReset = () => {
        this.setState({
            previewUrl: ''
        })
    }

    renderOptions = () => {
        const { listBrand, subTenantId } = this.props;
        // console.log("Test SubtenantId: "+ subTenantId)


        return listBrand && listBrand.filter(item => item.subTenantId === parseInt(subTenantId, 10)).map(item => {
            return (
                <div key={item.id} className="brand-item">
                    <fieldset className="brand-border">
                        <legend className="brand-border">Brand BR1</legend>
                        <div className="brand-content row">
                            <label className="col-2 ml-3">Review</label>
                            {
                                this.state.previewUrl !== '' && item.id === this.state.key ? <img className="col-3" src={this.state.previewUrl} alt="img1" /> : <img className="col-3" src={item.url} alt="img1" />
                            }
                            <div className="col-6 d-flex align-items-center justify-content-center">
                                <div className="mr-3">
                                    <label htmlFor={`file-upload${item.id}`} className="custom-file-upload btn btn-outline-dark" onClick={() => this.handleBrowser(item.id)}>
                                        Browser
                                    </label>
                                    <span className="file-selected"></span>
                                    <input id={`file-upload${item.id}`} ref="file" data-value={item.id} type="file" onChange={e => this.onChange(e)} />
                                    {/* <input id="file-upload" type="file" onChange={this.onImageChange} value={this.state.url} /> */}
                                </div>
                                <button type="button" className="btn btn-outline-dark mr-3" onClick={this.handleReset}>Reset</button>
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