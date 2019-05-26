import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridCell from './GridCell';
import { shortestPath } from '../../services/shortestPath.js';


class Grid extends Component {

    state = {
        rows: this.props.rows,
        columns: this.props.columns,
        startIndex: null,
        endIndex: null,
        cellMatrix: new Array(this.props.rows * this.props.columns).fill(1),
        pathMatrix: {}
    }

    setupGrid() {
        console.log('rib')
        const { rows, columns } = this.state;
        const startIndex = this.generateRandom(0, rows - 1) * columns;
        const endIndex = this.generateRandom(0, rows - 1) * columns + columns - 1;
        this.setState({ startIndex, endIndex });
    }

    onClickCell(index) {

        const { cellMatrix, startIndex, endIndex, columns } = this.state;
        cellMatrix[index] = Math.abs(cellMatrix[index] - 1);
        this.setState({ cellMatrix }, () => {
            // shortestPath([1, 1, 1, 1, 1, 0, 1, 0, 0], 2, 6, 3);
            let pathMatrix = shortestPath(cellMatrix, startIndex, endIndex, columns);
            this.setState({ pathMatrix });
        });
        // let startIndexArray = cellMatrix[0, startIndex];
        // let endIndexArray = [this.state.rows - 1, endIndex];
        // console.log("start: ", startIndex);
        // console.log("end: ", endIndexArray);
    }

    generateRandom(start, end) {
        const rand = Math.random();
        return Math.round((end - start) * rand) + start;
    }



    componentDidMount() {
        this.setupGrid();
    }

    componentDidUpdate(prevProps) {
        const { rows, columns } = this.props;

        if (rows !== prevProps.rows || columns !== prevProps.columns) {
            this.setState({
                rows: rows,
                columns: columns,
                cellMatrix: new Array(rows * columns).fill(1)
            }, () => {
                this.setupGrid();
            });
        }
    }


    render() {
        const { rows, columns, cellMatrix, startIndex, endIndex, pathMatrix } = this.state;
        console.log("State: ", this.state);

        const cellSize = 500 / columns;

        let gridCells = new Array(rows);
        let count = 0;

        for (let i = 0; i < rows; i++) {
            let gridCellsRow = new Array(columns);

            for (let j = 0; j < columns; j++) {

                let index = i * columns + j;

                gridCellsRow[j] = (
                    <GridCell
                        onClick={() => { this.onClickCell(index) }}
                        size={cellSize}
                        filled={cellMatrix[index] == 1 ? true : false}
                        inPath={pathMatrix[index] ? true : false}
                        start={index == startIndex ? true : false}
                        end={index == endIndex ? true : false}
                    />
                );
            }

            gridCells[i] = (
                <div>{gridCellsRow}</div>
            );
        }



        return (
            <section className="Grid">
                {gridCells}
            </section>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        rows: state.rows,
        columns: state.columns
    }
}

export default connect(mapStateToProps)(Grid);