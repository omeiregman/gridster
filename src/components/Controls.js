import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputGroup from '../common/InputGroup';
import { generateGrid } from '../actions';
import './style.scss';


class Controls extends Component {
    constructor(props) {
        super(props);

        this.state = {
            row: 10,
            column: 10
        }

        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: Number(e.target.value)
        });
    }

    onBlur(e) {
        this.setState({
            [e.target.name]: Number(e.target.value) < 4 ? 3 : Number(e.target.value)
        })
    }

    onSubmit() {
        const payload = {
            rows: this.state.row,
            columns: this.state.column
        }

        this.props.generateGrid(payload);
    }

    render() {
        return (
            <section className="Control">
                <section className="control__wrapper">
                    <span className="row">
                        <label className="label">
                            Rows
                        </label>
                        <InputGroup type="number"
                            value={this.state.row}
                            onChange={this.onChange}
                            name="row"
                            onBlur={this.onBlur}
                        />
                    </span>
                    <span className="x"> X </span>
                    <span className="column">
                        <label className="label">
                            Columns
                        </label>
                        <div>
                            <InputGroup type="number"
                                value={this.state.column}
                                onChange={this.onChange}
                                name="column"
                                onBlur={this.onBlur}
                            />
                        </div>
                    </span>
                    <span className="btn__generate" onClick={this.onSubmit}>
                        Generate
                    </span>
                </section>
            </section>
        );
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        generateGrid: (payload) => dispatch(generateGrid(payload))
    }
}

export default connect(null, mapDispatchToProps)(Controls);