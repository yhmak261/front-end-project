class Paginator {

    static rows;
    static rowsPerPage;
    static totalPages;
    static currentPageNumber;
    static prevPage;
    static nextPage;
    static offset;
    static startRow;
    static endRow;
    static maxBoundaryRange;
    static startPage;
    static endPage;
    static leftEdge;
    static rightEdge;

    constructor(rows, rowsPerPage = 10, currentPageNumber = 1, maxBoundaryRange = 4) {
        this.rows = rows;
        this.rowsPerPage = rowsPerPage
        this.totalPages = Math.ceil(this.rows / rowsPerPage);
        this.currentPageNumber = currentPageNumber;
        this.prevPage = this.currentPageNumber - 1 < 1 ? 1 : this.currentPageNumber - 1;
        this.nextPage = this.currentPageNumber + 1 > this.totalPages ? this.totalPages : this.currentPageNumber + 1;

        // offset is for array or mysql use.
        this.offset = this.currentPageNumber * this.rowsPerPage - this.rowsPerPage;
        
        this.startRow = this.currentPageNumber * this.rowsPerPage - this.rowsPerPage + 1;
        this.endRow = this.currentPageNumber * this.rowsPerPage <= this.rows ? this.currentPageNumber * this.rowsPerPage : this.rows;


        this.genMaxBoundaryRange(maxBoundaryRange);
        this.genEdge();
        this.genFillRows();
    }

    genMaxBoundaryRange(maxBoundaryRange) {
        
        this.maxBoundaryRange = maxBoundaryRange;

        if (this.maxBoundaryRange * 2 + 1 > this.totalPages) { 
            this.maxBoundaryRange = Math.ceil(this.totalPages / 2) - 1;
        }

        if (this.totalPages == 2) {
            this.maxBoundaryRange = 1;
        }

        this.startPage = this.currentPageNumber - this.maxBoundaryRange >= 1 ? this.currentPageNumber - this.maxBoundaryRange : 1;
        if (this.totalPages == 0 ) {
            this.endPage = 1;
        } else {
            this.endPage = this.currentPageNumber + this.maxBoundaryRange <= this.totalPages ? this.currentPageNumber + this.maxBoundaryRange : this.totalPages;
        }
    }

    genEdge() {

        if (this.currentPageNumber - this.maxBoundaryRange > 1) {
            this.leftEdge = this.currentPageNumber - this.maxBoundaryRange;
            if (this.currentPageNumber - this.maxBoundaryRange > this.totalPages - this.maxBoundaryRange * 2) {
                this.leftEdge = this.totalPages - this.maxBoundaryRange * 2;
            }
        } else {
            this.leftEdge = 1;
        }

        if (this.currentPageNumber + this.maxBoundaryRange > this.maxBoundaryRange * 2 + 1) {
            this.rightEdge = this.currentPageNumber + this.maxBoundaryRange;
            if (this.rightEdge > this.totalPages) {
                this.rightEdge = this.totalPages;
            }
        } else {
            this.rightEdge = this.maxBoundaryRange * 2 + 1;
        }

        if (this.totalPages == 2 && this.rightEdge > this.endPage) {
            this.rightEdge = this.endPage;
        }
    }

    genFillRows() {
        if (this.endRow < this.currentPageNumber * this.rowsPerPage) {
            this.fillRows = this.currentPageNumber * this.rowsPerPage - this.endRow;
        } else {
            this.fillRows = 0;
        }
    }

    getInfo() {

        return {
            'rows': this.rows,
            'rowsPerPage' : this.rowsPerPage,
            'totalPages' : this.totalPages,
            'currentPage' : this.currentPageNumber,
            'prevPage' : this.prevPage,
            'nextPage' : this.nextPage,
            'offset' : this.offset,
            'startRow' : this.startRow,
            'endRow' : this.endRow,
            'maxBoundaryRange' : this.maxBoundaryRange,
            'startPage' : this.startPage,
            'endPage' : this.endPage,
            'leftEdge' : this.leftEdge,
            'rightEdge' : this.rightEdge,
            'fillRows' : this.fillRows
        };
    }
}