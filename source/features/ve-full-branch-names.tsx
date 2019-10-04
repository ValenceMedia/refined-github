import select from 'select-dom';
import features from '../libs/features';

function init(): void {
	const branchAnchors = select.all('a.css-truncate-target');
	const branchList = select('div.new-discussion-timeline');
	const branchDetails = select.all('span.branch-details');

	// Widen the interface
	if (branchList !== null) {
		branchList.style.width = ' 95%';
		branchList.style.maxWidth = ' 95%';
	}

	// Expand the truncated branch names
	for (const branchDetail of branchDetails) {
		branchDetail.style.width = '800px';
	}

	// Expand the truncated branch names
	for (const anchor of branchAnchors) {
		anchor.classList.remove('css-truncate-target');
	}
}

features.add({
	id: __featureName__,
	description: 'show full branch names without ellipses',
	screenshot: false,
	load: features.onDomReady,
	init
});
