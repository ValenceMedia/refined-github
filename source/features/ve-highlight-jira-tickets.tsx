import select from 'select-dom';
import features from '../libs/features';

function init() {
	const jiraRegex = /(ENG[\-\s]\d+)/i;
	const titles = select.all('.commit-title,.gh-header-title');

	for (const title of titles) {
		const ticket_match = title.innerHTML.trim().match(jiraRegex);
		if (ticket_match !== null) {
			const ticket = ticket_match[1].replace(" ", "-"),
				ticket_url = "https://jira.bbthr.com/browse/" + ticket,
				ticket_link = "<a target=\"_blank\" href=\"" + ticket_url + "\">" + ticket + "</a>";
			title.innerHTML = title.innerHTML.replace(ticket_match[1], ticket_link);
		}
	}
}
features.add({
    id: __featureName__,
	description: 'make links to jira from tickets in titles',
	screenshot: false,
    load: features.onDomReady,
    init
});
