import select from 'select-dom';

function highlightJiraTickets() {
    const branchInfoRegex = /(ENG[\-\s]\d+)/i;
    const titles = select.all('.commit-title,.gh-header-title');

    for (const title of titles) {
        const [,ticket_original] = title.innerHTML.trim().match(branchInfoRegex);
        const ticket = ticket_original.replace(" ", "-"),
            ticket_url = "https://jira.bbthr.com/browse/" + ticket,
            ticket_link = "<a target=\"_blank\" href=\"" + ticket_url + "\">" + ticket + "</a>";
        title.innerHTML = title.innerHTML.replace(ticket_original, ticket_link);
    }
}
export default function () {
    highlightJiraTickets();
}
