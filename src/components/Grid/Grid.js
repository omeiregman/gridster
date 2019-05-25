import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridCell from './GridCell';


class Grid extends Component {

    state = {
        rows: this.props.rows,
        columns: this.props.columns,
        startIndex: null,
        endIndex: null,
        cellMatrix: []
    }

    setupGrid() {
        const { rows, columns } = this.state;

        const startIndex = this.generateRandom(0, rows - 1);
        const endIndex = this.generateRandom(0, rows - 1);
        this.setState({ startIndex, endIndex }, this.paintGrid(rows, columns));
    }

    paintGrid(rows, columns) {
        const cellMatrix = this.generateCellMatrix(rows, columns);

        this.setState({
            cellMatrix: cellMatrix
        });
    }

    generateCellMatrix(rows, columns) {
        let res = new Array(rows);

        for (let i = 0; i < rows; i++) {
            res[i] = new Array(columns).fill(1);
        }
        return res;
    }

    generateRandom(start, end) {
        let rand = Math.random();
        return Math.round((end - start) * rand) + start;
    }

    componentDidMount() {
        this.setupGrid();
    }

    componentDidUpdate(prevProps) {
        let { rows, columns } = this.props;

        if (rows !== prevProps.rows || columns !== prevProps.columns) {
            this.setState({ rows, columns }, () => {
                this.setupGrid();
            });
        }
    }


    render() {
        const { columns } = this.state;
        const { cellMatrix } = this.state;

        console.log(this.state);
        const cellSize = 500 / columns;

        return (
            <section className="Grid">
                {cellMatrix.map(row => {
                    return (
                        <div className="row">
                            {row.map(itemRow => {
                                return <GridCell size={cellSize} />
                            })}
                        </div>
                    )
                })}
            </section>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        rows: state.rows,
        columns: state.columns,
    }
}

export default connect(mapStateToProps)(Grid);