import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridCell from './GridCell';


class Grid extends Component {

    state = {
        rows: this.props.rows,
        columns: this.props.columns,
        startIndex: null,
        endIndex: null,
        cellMatrix: this.generateCellMatrix(this.props.rows, this.props.columns)
    }

    setupGrid() {
        const { rows, columns } = this.state;
        const startIndex = this.generateRandom(0, rows - 1);
        const endIndex = this.generateRandom(0, rows - 1);
        const cellMatrix = this.generateCellMatrix(rows, columns);
        this.setState({ startIndex, endIndex, cellMatrix });
    }

    // paintGrid(rows, columns) {
    //     const cellMatrix = this.generateCellMatrix(rows, columns);
    //     this.setState({
    //         cellMatrix: cellMatrix
    //     });
    // }

    generateCellMatrix(rows, columns) {
        let res = new Array(rows);

        for (let i = 0; i < rows; i++) {
            res[i] = new Array(columns).fill(1);
        }
        console.log("Res: ", res);
        return res;
    }

    onClickCell(row, column) {
        console.log(99999);
        let { cellMatrix } = this.state;
        cellMatrix[row][column] = Math.abs(cellMatrix[row][column] - 1);
        this.setState({ cellMatrix });
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
            this.setState({
                rows: rows,
                columns: columns,
                cellMatrix: this.generateCellMatrix(rows, columns)
            }, () => {
                this.setupGrid();
            });
        }
    }


    render() {
        const { rows, columns, cellMatrix, startIndex, endIndex } = this.state;
        console.log("State: ", this.state);

        const cellSize = 500 / columns;

        let gridCells = new Array(rows);

        for (let i = 0; i < rows; i++) {
            let gridCellsRow = new Array(columns);

            for (let j = 0; j < columns; j++) {
                gridCellsRow[j] = (
                    <GridCell
                        onClick={() => { this.onClickCell(i, j) }}
                        size={cellSize}
                        filled={cellMatrix[i][j] == 1 ? true : false}
                        inPath={null}
                        start={j == 0 && i == startIndex ? true : false}
                        end={j == columns - 1 && i == endIndex ? true : false}
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
        columns: state.columns,
    }
}

export default connect(mapStateToProps)(Grid);