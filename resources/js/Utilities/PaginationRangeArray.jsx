import _ from "lodash";

export function PaginationRangeArray(
    currentPage,
    total,
    pagePerSlide,
    siblings
) {
    if (total) {
        let totalPage = Math.ceil(total / pagePerSlide);

        const totalPageNumInArr = 4 + siblings;

        //for no dot fit in a Arr
        if (totalPageNumInArr >= totalPage) {
            return _.range(1, totalPage + 1);
        }

        const leftSiblingIndex = Math.max(currentPage - siblings, 1);
        const rightSiblingIndex = Math.min(currentPage + 1, totalPage);

        const isExceedLeft = leftSiblingIndex > 2;
        const isExceedRight = rightSiblingIndex < totalPage - 2;

        if (!isExceedLeft && isExceedRight) {
            //make range 1 to 4
            let leftCount = 2 + 2 * siblings;
            let leftRange = _.range(1, leftCount + 1);
            // connect dot and the last page
            return [...leftRange, "...", totalPage];
        } else if (isExceedLeft && !isExceedRight) {
            //make right range from total page to totalpage  + 4
            let rightCount = 2 + 2 * siblings;
            let rightRange = _.range(totalPage - rightCount, totalPage + 1);

            //connect 1, start page and dots and right range
            return [1, "...", ...rightRange];
        } else {
            let middleRange = _.range(leftSiblingIndex, rightSiblingIndex + 1);
            return [1, "...", ...middleRange, "...", totalPage];
        }
    }
}
