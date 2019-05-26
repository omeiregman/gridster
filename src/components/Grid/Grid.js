import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridCell from './GridCell';
import shortestPathFinder from '../../utils/shortestPath.js';


class Grid extends Component {

    state = {
        rows: this.props.rows,
        columns: this.props.columns,
        startIndex: null,
        endIndex: null,
        cellMatrix: new Array(this.props.rows * this.props.columns).fill(1),
        shortestPath: new Set()
    }

    setupGrid() {
        const { rows, columns } = this.state;
        const startIndex = this.generateRandom(0, rows - 1) * columns;
        const endIndex = this.generateRandom(0, rows - 1) * columns + columns - 1;
        this.setState({ startIndex, endIndex });
    }

    onCellClick(index) {
        const { cellMatrix, startIndex, endIndex, columns } = this.state;
        cellMatrix[index] = Math.abs(cellMatrix[index] - 1);
        this.setState({ cellMatrix }, () => {
            let shortestPath = shortestPathFinder(cellMatrix, startIndex + 1, endIndex + 1, columns);
            this.setState({ shortestPath });
        });
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
                cellMatrix: new Array(rows * columns).fill(1),
                shortestPath: new Set()
            }, () => {
                this.setupGrid();
            });
        }
    }


    render() {
        const { rows, columns, cellMatrix, startIndex, endIndex, shortestPath } = this.state;

        const cellSize = 500 / columns;

        let gridCells = new Array(rows);
        let count = 1;

        for (let i = 0; i < rows; i++) {
            let gridCellsRow = [];
            for (let j = 0; j < columns; j++) {

                let index = count - 1;

                gridCellsRow.push((
                    <GridCell
                        onClick={() => { this.onCellClick(index) }}
                        size={cellSize}
                        filled={cellMatrix[index] == 1 ? true : false}
                        inPath={shortestPath.has(index) ? true : false}
                        start={index == startIndex ? true : false}
                        end={index == endIndex ? true : false}
                    />
                ));
                count++;
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