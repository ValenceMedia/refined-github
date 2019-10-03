import select from 'select-dom';
import features from '../libs/features';

function init() {
	const branchList = select("div.new-discussion-timeline");

	// Widen the interface
	if (branchList !== null){
		branchList.style.width=" 95%";
		branchList.style.maxWidth=" 95%";
	}
}
features.add({
	id: __featureName__,
	description: 'w i d e c o a d',
	screenshot: false,
	load: features.onDomReady,
	init
});
