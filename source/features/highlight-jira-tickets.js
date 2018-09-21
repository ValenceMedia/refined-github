import select from 'select-dom';

function highlightJiraTickets() {
    const branchInfoRegex = /(ENG\-\d+)/;
    const titles = select.all('.commit-title');

    for (const title of titles) {
        title.valueOf();
        const [,ticket] = title.innerHTML.trim().match(branchInfoRegex)
        var ticket_url = "https://jira.bbthr.com/browse/" + ticket,
            ticket_link = "<a target=\"_blank\" href=\"" + ticket_url + "\">" + ticket + "</a>";
        // console.warn(ticket_link);
        // console.log(title);

        title.innerHTML = title.innerHTML.replace(ticket, ticket_link);
    }
}
export default function () {
    highlightJiraTickets();
}
