import select from 'select-dom';

function fullBranchNames() {
    const branchAnchors = select.all('a.css-truncate-target'),
        branchList = select("div.new-discussion-timeline"),
        branchDetails = select.all('span.branch-details');

    // Widen the interface
    branchList.style.width=" 75%";

    // expand the truncated branch names
    for (const branchDetail of branchDetails) {
        branchDetail.style.width="800px"
    }

    // expand the truncated branch names
    for (const anchor of branchAnchors) {
        anchor.classList.remove('css-truncate-target');
    }
}
export default function () {
    fullBranchNames();
}
